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

function safeNormalizePath(inputPath: string): string {
  const normalized = path.normalize(inputPath);

  // If it starts with '..' or '..\' it escaped the original bounds
  if (normalized.startsWith("..") || path.isAbsolute(normalized)) {
    throw new Error(
      "Security Error: Path traversal detected outside of bounds.",
    );
  }

  return normalized;
}

function serverStaticFile(req: http.IncomingMessage, res: http.ServerResponse) {
  let relPath: string;
  try {
    const url = new URL(req.url || "/", "http://localhost");
    relPath = safeNormalizePath(url.pathname.replace(/^\/*/, ""));
  } catch {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end("<h1>400 Bad Request</h1>");
    return;
  }

  if (relPath === "semanticus.css") {
    relPath = path.join("dist", relPath);
  } else if (!relPath.startsWith("dist")) {
    relPath = path.join("docs", "public", relPath);
  }
  const filePath = path.resolve(projectRoot, relPath);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  try {
    const content = fs.readFileSync(filePath);

    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);

    return;
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    const statusCode = err.code === "ENOENT" ? 404 : 500;

    res.writeHead(statusCode, {
      "Content-Type": "text/html",
    });

    res.end(
      err.code === "ENOENT"
        ? "<h1>404 Not Found</h1>"
        : "Server Error: " + (err.code ?? "UNKNOWN"),
    );
  }
}

const server = http.createServer(async (req, res) => {
  const reqUrl = req.url || "";
  const parts = reqUrl.split("/");
  parts.shift(); // remove leading empty string from split

  if (!parts[0]) {
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

    serverStaticFile(req, res);
  }
});

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
  console.log(`Demo server running at http://localhost:${PORT}/`);
});
