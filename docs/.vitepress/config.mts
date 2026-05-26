import { defineConfig } from "vitepress";
import path from "path";
import fs from "fs";
import { packageProps } from "../../scripts/utils";

function loadTsconfigAliases() {
  const tsconfigPath = path.resolve(process.cwd(), "tsconfig.json");
  let raw = fs.readFileSync(tsconfigPath, "utf8");
  // tolerate trailing commas so JSON.parse won't fail
  raw = raw.replace(/,\s*(?=[}\]])/g, "");
  const cfg = JSON.parse(raw);
  const paths: Record<string, string[]> = cfg?.compilerOptions?.paths || {};

  return Object.entries(paths).map(([key, values]) => {
    const find = key.replace(/\/\*$/, "");
    const replacement = path.resolve(
      process.cwd(),
      (values[0] as string).replace(/\/\*$/, ""),
    );
    return { find, replacement };
  });
}

const semanticusDistPath = path.resolve(process.cwd(), "dist");
const indexHtmlPath = path.resolve(__dirname, "../../index.html");

function normalizeBase(base: string) {
  const prefixedBase = base.startsWith("/") ? base : `/${base}`;
  return prefixedBase.endsWith("/") ? prefixedBase : `${prefixedBase}/`;
}

// Use base: '/' for custom domain, otherwise use env or repo subpath
const isCustomDomain =
  !!process.env.CUSTOM_DOMAIN ||
  fs.existsSync(path.resolve(__dirname, "../../CNAME"));
const docsBase = isCustomDomain
  ? "/"
  : normalizeBase(
      process.env.SEMANTICUS_DOCS_BASE ??
        (process.env.GITHUB_REPOSITORY
          ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
          : "/"),
    );

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: docsBase,
  // appearance: 'force-auto',
  head: !isProd
    ? []
    : [
        [
          "script",
          {
            async: "",
            src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`,
          },
        ],
        [
          "script",
          {},
          `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.GTAG_ID}');`,
        ],
      ],
  ignoreDeadLinks: true,
  markdown: {
    config: (md) => {
      // No custom markdown plugins needed
    },
  },
  vite: {
    resolve: {
      alias: loadTsconfigAliases(),
    },
    publicDir: "public",
    plugins: [
      {
        name: "semanticus-css",
        configureServer(server) {
          // Serve index.html from project root during dev
          server.middlewares.use("/index.html", (req, res, next) => {
            res.setHeader("Content-Type", "text/html");
            fs.createReadStream(indexHtmlPath).pipe(res);
          });

          // Serve palette CSS files FIRST (before /dist/ handler)
          server.middlewares.use((req, res, next) => {
            const url = req.url || "";
            if (url.includes("/semanticus.palette.")) {
              const filename = url.replace(/^\//, "");
              // Remove query parameters for matching (e.g., ?t=123456)
              const cleanFilename = filename.split("?")[0];
              const match = cleanFilename.match(
                /semanticus\.palette\.(\w+)\.css$/,
              );
              const paletteName = match ? match[1] : "";

              if (!paletteName) {
                next();
                return;
              }

              res.setHeader("Content-Type", "text/css");
              res.setHeader(
                "Cache-Control",
                "no-cache, no-store, must-revalidate",
              );
              res.setHeader("Pragma", "no-cache");
              res.setHeader("Expires", "0");

              if (paletteName === "azure") {
                fs.createReadStream(
                  path.join(semanticusDistPath, "semanticus.css"),
                ).pipe(res);
                return;
              }

              const palettePath = path.join(
                semanticusDistPath,
                `semanticus.palette.${paletteName}.css`,
              );

              if (fs.existsSync(palettePath)) {
                fs.createReadStream(palettePath).pipe(res);
              } else {
                res.statusCode = 404;
                res.end("Palette not found");
              }
              return;
            }
            next();
          });

          // Serve size CSS files
          server.middlewares.use((req, res, next) => {
            const url = req.url || "";
            if (url.includes("/semanticus.size.")) {
              const filename = url.replace(/^\//, "");
              // Remove query parameters for matching (e.g., ?t=123456)
              const cleanFilename = filename.split("?")[0];
              const match = cleanFilename.match(
                /semanticus\.size\.(\w+)\.css$/,
              );
              const sizeName = match ? match[1] : "";

              if (!sizeName) {
                next();
                return;
              }

              res.setHeader("Content-Type", "text/css");
              res.setHeader(
                "Cache-Control",
                "no-cache, no-store, must-revalidate",
              );
              res.setHeader("Pragma", "no-cache");
              res.setHeader("Expires", "0");

              if (sizeName === "default") {
                res.statusCode = 204;
                res.end();
                return;
              }

              const sizePath = path.join(
                semanticusDistPath,
                `semanticus.size.${sizeName}.css`,
              );

              if (fs.existsSync(sizePath)) {
                fs.createReadStream(sizePath).pipe(res);
              } else {
                res.statusCode = 404;
                res.end("Size not found");
              }
              return;
            }
            next();
          });

          // Serve CSS files referenced by index.html
          server.middlewares.use("/dist/", (req, res, next) => {
            const cssFile = req.url?.replace(/^\//, "") || "";
            const cssPath = path.join(semanticusDistPath, cssFile);

            if (fs.existsSync(cssPath)) {
              res.setHeader("Content-Type", "text/css");
              fs.createReadStream(cssPath).pipe(res);
            } else {
              res.statusCode = 404;
              res.end("CSS file not found");
            }
          });

          // Serve semanticus.css from project root during dev
          server.middlewares.use("/semanticus.css", (req, res, next) => {
            res.setHeader("Content-Type", "text/css");
            res.setHeader(
              "Cache-Control",
              "no-cache, no-store, must-revalidate",
            );
            res.setHeader("Pragma", "no-cache");
            res.setHeader("Expires", "0");
            fs.createReadStream(
              path.join(semanticusDistPath, "semanticus.css"),
            ).pipe(res);
          });

          // Serve semanticus-semantics.css from project root during dev
          server.middlewares.use(
            "/semanticus-semantics.css",
            (req, res, next) => {
              res.setHeader("Content-Type", "text/css");
              res.setHeader(
                "Cache-Control",
                "no-cache, no-store, must-revalidate",
              );
              res.setHeader("Pragma", "no-cache");
              res.setHeader("Expires", "0");
              fs.createReadStream(
                path.join(semanticusDistPath, "semanticus-semantics.css"),
              ).pipe(res);
            },
          );

          server.middlewares.use(
            "/semanticus-utilities.css",
            (req, res, next) => {
              res.setHeader("Content-Type", "text/css");
              res.setHeader(
                "Cache-Control",
                "no-cache, no-store, must-revalidate",
              );
              res.setHeader("Pragma", "no-cache");
              res.setHeader("Expires", "0");
              fs.createReadStream(
                path.join(semanticusDistPath, "semanticus-utilities.css"),
              ).pipe(res);
            },
          );

          server.middlewares.use(
            "/semanticus-variants.css",
            (req, res, next) => {
              res.setHeader("Content-Type", "text/css");
              res.setHeader(
                "Cache-Control",
                "no-cache, no-store, must-revalidate",
              );
              res.setHeader("Pragma", "no-cache");
              res.setHeader("Expires", "0");
              fs.createReadStream(
                path.join(semanticusDistPath, "semanticus-variants.css"),
              ).pipe(res);
            },
          );
        },
        writeBundle() {
          // Copy semanticus.css to dist folder during build
          const distPath = path.resolve(__dirname, "dist/semanticus.css");
          fs.copyFileSync(
            path.join(semanticusDistPath, "semanticus.css"),
            distPath,
          );

          // Copy semanticus-semantics.css to dist folder during build
          const semanticsDistPath = path.resolve(
            __dirname,
            "dist/semanticus-semantics.css",
          );
          fs.copyFileSync(
            path.join(semanticusDistPath, "semanticus-semantics.css"),
            semanticsDistPath,
          );

          // Copy palette CSS files to dist folder during build
          const distPalettesDir = path.resolve(__dirname, "dist");
          if (fs.existsSync(semanticusDistPath)) {
            if (!fs.existsSync(distPalettesDir)) {
              fs.mkdirSync(distPalettesDir, { recursive: true });
            }
            const paletteFiles = fs.readdirSync(semanticusDistPath);
            for (const file of paletteFiles) {
              if (file.endsWith(".css")) {
                fs.copyFileSync(
                  path.join(semanticusDistPath, file),
                  path.join(distPalettesDir, file),
                );
              }
            }
          }
        },
      },
    ],
  },
  title: "Semanticus CSS",
  description:
    "A lightweight, semantic CSS framework enhanced with atomic utility classes.",
  srcDir: ".",
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Semanticus CSS",
    nav: [
      { text: "About", link: "/about/" },
      { text: "Guide", link: "/guide/" },
      { text: "Docs", link: "/docs/" },
      { text: "Examples", link: "/examples/" },
    ],
    sidebar: {
      "/about/": [
        { text: "About", link: "/about/" },
        { text: "Vision", link: "/about/vision" },
        { text: "Contributing", link: "/about/contributing" },
        { text: "Token Conventions", link: "/about/token-conventions" },
        { text: "Roadmap", link: "/about/roadmap" },
        { text: "Usecase Scenarios", link: "/about/usecase-scenarios" },
      ],
      "/guide/": [
        { text: "Getting Started", link: "/guide/" },
        { text: "Light & Dark Modes", link: "/guide/light-dark-modes" },
        { text: "Palettes", link: "/guide/palettes" },
        { text: "Sizes", link: "/guide/sizes" },
        { text: "CSS Variables", link: "/guide/css-variables" },
      ],
      "/docs/": [
        {
          text: "Composites",
          items: [
            { text: "Alerts", link: "/docs/composites/alerts" },
            { text: "Buttons", link: "/docs/composites/buttons" },
            { text: "Card List", link: "/docs/composites/card-list" },
            { text: "Card", link: "/docs/composites/card" },
            { text: "Dropdown", link: "/docs/composites/dropdown" },
            { text: "Layout", link: "/docs/composites/layout" },
            { text: "Links", link: "/docs/composites/links" },
            { text: "Loading", link: "/docs/composites/loading" },
            { text: "Modal", link: "/docs/composites/modal" },
            { text: "Pagination", link: "/docs/composites/pagination" },
            { text: "Search", link: "/docs/composites/search" },
            { text: "Toasts", link: "/docs/composites/toasts" },
            { text: "Tooltip", link: "/docs/composites/tooltip" },
            { text: "Typography", link: "/docs/composites/typography" },
            {
              text: "Validation States",
              link: "/docs/composites/validation-states",
            },
          ],
        },
        {
          text: "Semantic Styling API",
          items: [
            {
              text: "Elements",
              collapsed: true,
              items: [
                { text: "&lt;a&gt;", link: "/docs/semantics/elements/a" },
                {
                  text: "&lt;article&gt;",
                  link: "/docs/semantics/elements/article",
                },
                {
                  text: "&lt;aside&gt;",
                  link: "/docs/semantics/elements/aside",
                },
                { text: "&lt;body&gt;", link: "/docs/semantics/elements/body" },
                {
                  text: "&lt;button&gt;",
                  link: "/docs/semantics/elements/button",
                },
                {
                  text: "&lt;details&gt;",
                  link: "/docs/semantics/elements/details",
                },
                {
                  text: "&lt;dialog&gt;",
                  link: "/docs/semantics/elements/dialog",
                },
                {
                  text: "&lt;img&gt; / &lt;video&gt; / &lt;audio&gt;",
                  link: "/docs/semantics/elements/embedded",
                },
                {
                  text: "&lt;fieldset&gt;",
                  link: "/docs/semantics/elements/fieldset",
                },
                {
                  text: "&lt;figure&gt;",
                  link: "/docs/semantics/elements/figure",
                },
                {
                  text: "&lt;header&gt;",
                  link: "/docs/semantics/elements/header",
                },
                {
                  text: "&lt;hgroup&gt;",
                  link: "/docs/semantics/elements/hgroup",
                },
                { text: "&lt;hr&gt;", link: "/docs/semantics/elements/hr" },
                {
                  text: "&lt;input&gt;",
                  link: "/docs/semantics/elements/input",
                },
                {
                  text: "&lt;label&gt;",
                  link: "/docs/semantics/elements/label",
                },
                {
                  text: "&lt;ul&gt; / &lt;ol&gt; / &lt;dl&gt;",
                  link: "/docs/semantics/elements/lists",
                },
                { text: "&lt;main&gt;", link: "/docs/semantics/elements/main" },
                { text: "&lt;nav&gt;", link: "/docs/semantics/elements/nav" },
                {
                  text: "&lt;progress&gt;",
                  link: "/docs/semantics/elements/progress",
                },
                {
                  text: "&lt;section&gt;",
                  link: "/docs/semantics/elements/section",
                },
                {
                  text: "&lt;select&gt;",
                  link: "/docs/semantics/elements/select",
                },
                {
                  text: "&lt;table&gt;",
                  link: "/docs/semantics/elements/table",
                },
                {
                  text: "&lt;textarea&gt;",
                  link: "/docs/semantics/elements/textarea",
                },
              ],
            },
            {
              text: "Attributes",
              collapsed: true,
              items: [
                {
                  text: "[aria-busy]",
                  link: "/docs/semantics/attributes/aria-busy",
                },
                {
                  text: "[aria-disabled]",
                  link: "/docs/semantics/attributes/aria-disabled",
                },
                {
                  text: "[aria-invalid]",
                  link: "/docs/semantics/attributes/aria-invalid",
                },
                {
                  text: "[disabled]",
                  link: "/docs/semantics/attributes/disabled",
                },
                { text: "[hidden]", link: "/docs/semantics/attributes/hidden" },
                {
                  text: '[role="alert"]',
                  link: "/docs/semantics/attributes/role-alert",
                },
                {
                  text: '[role="button"]',
                  link: "/docs/semantics/attributes/role-button",
                },
                {
                  text: '[role="group"]',
                  link: "/docs/semantics/attributes/role-group",
                },
                {
                  text: '[role="link"]',
                  link: "/docs/semantics/attributes/role-link",
                },
                // {
                //   text: '[role="search"]',
                //   link: "/docs/semantics/attributes/role-search",
                // },
                {
                  text: '[role="status"]',
                  link: "/docs/semantics/attributes/role-status",
                },
                {
                  text: '[role="tooltip"]',
                  link: "/docs/semantics/attributes/role-tooltip",
                },
              ],
            },
          ],
        },
        {
          text: "Components API",
          items: [
            { text: ".auto-grid", link: "/docs/components/auto-grid" },
            { text: ".card", link: "/docs/components/card" },
            { text: ".container", link: "/docs/components/container" },
            { text: ".content-grid", link: "/docs/components/content-grid" },
            { text: ".icon-*", link: "/docs/components/icons" },
            { text: ".pane", link: "/docs/components/pane" },
            // { text: ".sidebar", link: "/docs/components/sidebar" },
          ],
        },
        {
          text: "Variants API",
          items: [
            {
              text: "Intent",
              items: [
                { text: ".contrast", link: "/docs/variants/intent/contrast" },
                { text: ".danger", link: "/docs/variants/intent/danger" },
                { text: ".info", link: "/docs/variants/intent/info" },
                { text: ".primary", link: "/docs/variants/intent/primary" },
                { text: ".secondary", link: "/docs/variants/intent/secondary" },
                { text: ".success", link: "/docs/variants/intent/success" },
                { text: ".warning", link: "/docs/variants/intent/warning" },
              ],
            },
            {
              text: "Modifiers",
              items: [
                { text: ".ghost", link: "/docs/variants/modifiers/ghost" },
                { text: ".striped", link: "/docs/variants/modifiers/striped" },
                { text: ".subtle", link: "/docs/variants/modifiers/subtle" },
              ],
            },
          ],
        },
        {
          text: "Utilities API",
          items: [
            { text: "Borders", link: "/docs/utilities/borders" },
            { text: "Colors", link: "/docs/utilities/colors" },
            { text: "Display", link: "/docs/utilities/display" },
            { text: "Effects", link: "/docs/utilities/effects" },
            { text: "Flexbox", link: "/docs/utilities/flexbox" },
            { text: "Grid System", link: "/docs/utilities/grid-system" },
            { text: "Layout", link: "/docs/utilities/layout" },
            { text: "Positioning", link: "/docs/utilities/positioning" },
            { text: "Sizing", link: "/docs/utilities/sizing" },
            { text: "Spacing", link: "/docs/utilities/spacing" },
            { text: "Typography", link: "/docs/utilities/typography" },
          ],
        },
      ],
      "/examples/": [
        { text: "Starter HTML template", link: "/examples/" },
        { text: "Documentation Page", link: "/examples/documentation-page" },
        { text: "Login Page", link: "/examples/login-page" },
        { text: "Landing Page", link: "/examples/landing-page" },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/semanticus/semanticus-css" },
    ],
    search: {
      provider: "local",
    },
  },
});
