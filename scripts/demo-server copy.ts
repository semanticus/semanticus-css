/**
 * Demo server — bundles each demo with esbuild on every request.
 * No module caching: esbuild re-reads all files from disk each time,
 * so edits are reflected immediately on the next page refresh.
 */

import http from "http";
import fs from "fs";
import path from "path";
import vm from "vm";
import { createRequire } from "module";
import * as esbuild from "esbuild";
import { variations, renderHtmlTemplate } from "@scripts/utils";

const projectRoot = path.join(__dirname, "..");
const validPalettes = variations.palettes
  .map((p) => p.name)
  .filter((n) => n !== "default");
const validThemes = variations.themes.map((p) => p.name);

const mimeTypes: Record<string, string> = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

/**
 * esbuild plugin that resolves tsconfig path aliases at build time.
 * Tries <base>.ts then <base>/index.ts for each alias prefix.
 */
const aliasPlugin: esbuild.Plugin = {
  name: "tsconfig-path-aliases",
  setup(build) {
    const aliases: Array<{ filter: RegExp; prefix: string; dir: string }> = [
      {
        filter: /^@demos\//,
        prefix: "@demos/",
        dir: path.join(projectRoot, "demos"),
      },
      {
        filter: /^@scripts\//,
        prefix: "@scripts/",
        dir: path.join(projectRoot, "scripts"),
      },
      {
        filter: /^@stories\//,
        prefix: "@stories/",
        dir: path.join(projectRoot, "stories"),
      },
    ];

    for (const { filter, prefix, dir } of aliases) {
      build.onResolve({ filter }, (args) => {
        const rel = args.path.slice(prefix.length);
        const base = path.join(dir, rel);
        for (const candidate of [`${base}.ts`, path.join(base, "index.ts")]) {
          if (fs.existsSync(candidate)) return { path: candidate };
        }
        return { path: base };
      });
    }
  },
};

/**
 * Bundles the demo entry file with esbuild (all imports inlined),
 * executes the bundle in a fresh vm context, and returns the result
 * of calling its exported function named `fnName`.
 */
async function runDemo(
  demoRelPath: string,
  fnName: string,
): Promise<string | null> {
  const base = path.join(projectRoot, "demos", demoRelPath);
  let entryFile: string | null = null;
  for (const candidate of [`${base}.ts`, path.join(base, "index.ts")]) {
    if (fs.existsSync(candidate)) {
      entryFile = candidate;
      break;
    }
  }
  if (!entryFile) return null;

  const result = await esbuild.build({
    entryPoints: [entryFile],
    bundle: true,
    platform: "node",
    format: "cjs",
    write: false,
    plugins: [aliasPlugin],
    // Keep Node.js built-ins external; everything else is inlined.
    packages: "external",
    logLevel: "silent",
  });

  const code = result.outputFiles[0].text;

  // Provide a require that can resolve node_modules relative to the project root.
  const scopedRequire = createRequire(path.join(projectRoot, "package.json"));
  const mod = { exports: {} as any };
  const sandbox = vm.createContext({
    module: mod,
    exports: mod.exports,
    require: scopedRequire,
    __dirname: path.dirname(entryFile),
    __filename: entryFile,
    process,
    console,
    Buffer,
    URL,
    URLSearchParams,
  });
  vm.runInContext(code, sandbox);

  const fn = mod.exports[fnName];
  return typeof fn === "function" ? fn() : null;
}

const server = http.createServer(async (req, res) => {
  const reqUrl = req.url || "";
  const parts = reqUrl.split("/");
  parts.shift(); // remove leading empty string from split

  if (parts[0] === "dist") {
    // Serve static files from dist/ — resolve and guard against path traversal.
    const distRoot = path.join(projectRoot, "dist");
    const relPath = reqUrl.replace(/^\/*/, "");
    const filePath = path.resolve(projectRoot, relPath);
    if (!filePath.startsWith(distRoot + path.sep) && filePath !== distRoot) {
      res.writeHead(403, { "Content-Type": "text/html" });
      res.end("<h1>403 Forbidden</h1>");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(err.code === "ENOENT" ? 404 : 500, {
          "Content-Type": "text/html",
        });
        res.end(
          err.code === "ENOENT"
            ? "<h1>404 Not Found</h1>"
            : "Server Error: " + err.code,
        );
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      }
    });
  } else if (
    reqUrl.startsWith("/semanticus.") &&
    !reqUrl.startsWith("/dist/")
  ) {
    // Serve semanticus CSS files from dist/ at the root level
    // (e.g. /semanticus.css → dist/semanticus.css)
    const distRoot = path.join(projectRoot, "dist");
    const relPath = reqUrl.replace(/^\/*/, "");
    const filePath = path.resolve(distRoot, relPath);
    if (!filePath.startsWith(distRoot + path.sep) && filePath !== distRoot) {
      res.writeHead(403, { "Content-Type": "text/html" });
      res.end("<h1>403 Forbidden</h1>");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(err.code === "ENOENT" ? 404 : 500, {
          "Content-Type": "text/html",
        });
        res.end(
          err.code === "ENOENT"
            ? "<h1>404 Not Found</h1>"
            : `Server Error: ${err.code}`,
        );
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      }
    });
  } else if (reqUrl.endsWith(".html") && reqUrl !== "/") {
    // Serve static HTML files from the project root.
    // URL path maps 1:1 to filesystem (e.g. /docs/public/examples/demo-page.html).
    const relPath = reqUrl.replace(/^\/*/, "");
    const filePath = path.resolve(projectRoot, relPath);
    if (
      !filePath.startsWith(projectRoot + path.sep) &&
      filePath !== projectRoot
    ) {
      res.writeHead(403, { "Content-Type": "text/html" });
      res.end("<h1>403 Forbidden</h1>");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(err.code === "ENOENT" ? 404 : 500, {
          "Content-Type": "text/html",
        });
        res.end(
          err.code === "ENOENT"
            ? "<h1>404 Not Found</h1>"
            : `Server Error: ${err.code}`,
        );
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      }
    });
  } else if (!parts[0]) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to the Demo Server</h1>");
  } else {
    try {
      const url = new URL(reqUrl, "http://localhost");
      const demoParts = url.pathname.split("/").filter(Boolean);
      const fnName = demoParts.pop();
      if (fnName) {
        const html = await runDemo(demoParts.join("/"), fnName);
        const stylePaths = ["/dist/semanticus.css"];
        const rawPalette = url.searchParams.get("palette");
        const rawTheme = url.searchParams.get("theme");
        const paletteName =
          rawPalette && validPalettes.includes(rawPalette)
            ? rawPalette
            : undefined;
        const themeName =
          rawTheme && validThemes.includes(rawTheme) ? rawTheme : undefined;

        if (paletteName) {
          stylePaths.push(`/dist/semanticus.palette.${paletteName}.css`);
        }

        if (html) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(
            renderHtmlTemplate(html, {
              local: true,
              stylePaths,
              theme: themeName,
            }),
            "utf-8",
          );
          return;
        }
      }
    } catch (err) {
      console.error("[demo-server]", err);
    }
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
  console.log(`Demo server running at http://localhost:${PORT}/`);
});
