import { defineConfig } from 'vitepress'
import path from 'path'
import fs from 'fs'

const semanticusDistPath = path.resolve(process.cwd(), 'dist')
const indexHtmlPath = path.resolve(__dirname, '../../index.html')

function normalizeBase(base: string) {
  const prefixedBase = base.startsWith('/') ? base : `/${base}`
  return prefixedBase.endsWith('/') ? prefixedBase : `${prefixedBase}/`
}

// Use base: '/' for custom domain, otherwise use env or repo subpath
const isCustomDomain = !!process.env.CUSTOM_DOMAIN || fs.existsSync(path.resolve(__dirname, '../../CNAME'));
const docsBase = isCustomDomain
  ? '/'
  : normalizeBase(
      process.env.SEMANTICUS_DOCS_BASE
        ?? (process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/')
    );

export default defineConfig({
  base: docsBase,
  // appearance: 'force-auto',
  ignoreDeadLinks: true,
  markdown: {
    config: (md) => {
      // No custom markdown plugins needed
    }
  },
  vite: {
    vue: {
      exclude: [/\.md$/]
    },
    publicDir: 'public',
    plugins: [
      {
        name: 'semanticus-css',
        configureServer(server) {
          // Serve index.html from project root during dev
          server.middlewares.use('/index.html', (req, res, next) => {
            res.setHeader('Content-Type', 'text/html')
            fs.createReadStream(indexHtmlPath).pipe(res)
          })

          // Serve palette CSS files FIRST (before /dist/ handler)
          server.middlewares.use((req, res, next) => {
            const url = req.url || ''
            if (url.includes('/semanticus.palette.')) {
              const filename = url.replace(/^\//, '')
              // Remove query parameters for matching (e.g., ?t=123456)
              const cleanFilename = filename.split('?')[0]
              const match = cleanFilename.match(/semanticus\.palette\.(\w+)\.css$/)
              const paletteName = match ? match[1] : ''

              if (!paletteName) {
                next()
                return
              }

              res.setHeader('Content-Type', 'text/css')
              res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
              res.setHeader('Pragma', 'no-cache')
              res.setHeader('Expires', '0')

              if (paletteName === 'azure') {
                fs.createReadStream(path.join(semanticusDistPath, 'semanticus.css')).pipe(res)
                return
              }

              const palettePath = path.join(semanticusDistPath, `semanticus.palette.${paletteName}.css`)

              if (fs.existsSync(palettePath)) {
                fs.createReadStream(palettePath).pipe(res)
              } else {
                res.statusCode = 404
                res.end('Palette not found')
              }
              return
            }
            next()
          })

          // Serve size CSS files
          server.middlewares.use((req, res, next) => {
            const url = req.url || ''
            if (url.includes('/semanticus.size.')) {
              const filename = url.replace(/^\//, '')
              // Remove query parameters for matching (e.g., ?t=123456)
              const cleanFilename = filename.split('?')[0]
              const match = cleanFilename.match(/semanticus\.size\.(\w+)\.css$/)
              const sizeName = match ? match[1] : ''

              if (!sizeName) {
                next()
                return
              }

              res.setHeader('Content-Type', 'text/css')
              res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
              res.setHeader('Pragma', 'no-cache')
              res.setHeader('Expires', '0')

              if (sizeName === 'default') {
                res.statusCode = 204
                res.end()
                return
              }

              const sizePath = path.join(semanticusDistPath, `semanticus.size.${sizeName}.css`)

              if (fs.existsSync(sizePath)) {
                fs.createReadStream(sizePath).pipe(res)
              } else {
                res.statusCode = 404
                res.end('Size not found')
              }
              return
            }
            next()
          })

          // Serve CSS files referenced by index.html
          server.middlewares.use('/dist/', (req, res, next) => {
            const cssFile = req.url?.replace(/^\//, '') || ''
            const cssPath = path.join(semanticusDistPath, cssFile)

            if (fs.existsSync(cssPath)) {
              res.setHeader('Content-Type', 'text/css')
              fs.createReadStream(cssPath).pipe(res)
            } else {
              res.statusCode = 404
              res.end('CSS file not found')
            }
          })

          // Serve semanticus.css from project root during dev
          server.middlewares.use('/semanticus.css', (req, res, next) => {
            res.setHeader('Content-Type', 'text/css')
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.setHeader('Pragma', 'no-cache')
            res.setHeader('Expires', '0')
            fs.createReadStream(path.join(semanticusDistPath, 'semanticus.css')).pipe(res)
          })

          // Serve semanticus-semantics.css from project root during dev
          server.middlewares.use('/semanticus-semantics.css', (req, res, next) => {
            res.setHeader('Content-Type', 'text/css')
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.setHeader('Pragma', 'no-cache')
            res.setHeader('Expires', '0')
            fs.createReadStream(path.join(semanticusDistPath, 'semanticus-semantics.css')).pipe(res)
          })

          server.middlewares.use('/semanticus-utilities.css', (req, res, next) => {
            res.setHeader('Content-Type', 'text/css')
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.setHeader('Pragma', 'no-cache')
            res.setHeader('Expires', '0')
            fs.createReadStream(path.join(semanticusDistPath, 'semanticus-utilities.css')).pipe(res)
          })

          server.middlewares.use('/semanticus-variants.css', (req, res, next) => {
            res.setHeader('Content-Type', 'text/css')
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
            res.setHeader('Pragma', 'no-cache')
            res.setHeader('Expires', '0')
            fs.createReadStream(path.join(semanticusDistPath, 'semanticus-variants.css')).pipe(res)
          })
        },
        writeBundle() {
          // Copy semanticus.css to dist folder during build
          const distPath = path.resolve(__dirname, 'dist/semanticus.css')
          fs.copyFileSync(path.join(semanticusDistPath, 'semanticus.css'), distPath)

          // Copy semanticus-semantics.css to dist folder during build
          const semanticsDistPath = path.resolve(__dirname, 'dist/semanticus-semantics.css')
          fs.copyFileSync(path.join(semanticusDistPath, 'semanticus-semantics.css'), semanticsDistPath)

          // Copy palette CSS files to dist folder during build
          const distPalettesDir = path.resolve(__dirname, 'dist')
          if (fs.existsSync(semanticusDistPath)) {
            if (!fs.existsSync(distPalettesDir)) {
              fs.mkdirSync(distPalettesDir, { recursive: true })
            }
            const paletteFiles = fs.readdirSync(semanticusDistPath)
            for (const file of paletteFiles) {
              if (file.endsWith('.css')) {
                fs.copyFileSync(
                  path.join(semanticusDistPath, file),
                  path.join(distPalettesDir, file)
                )
              }
            }
          }
        }
      }
    ]
  },
  title: "Semanticus CSS",
  description: "A lightweight, semantic CSS framework enhanced with atomic utility classes.",
  srcDir: '.',
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Semanticus CSS',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Builder', link: '/theme-builder' },
    ],
    sidebar: {
      '/guide/': [
        { text: 'Getting Started', link: '/guide/' },
        { text: 'Light & Dark Modes', link: '/guide/light-dark-modes' },
        { text: 'Palettes & Sizes', link: '/guide/palettes-sizes' },
        { text: 'CSS Variables', link: '/guide/css-variables' },
        { text: 'Contributing', link: '/guide/contributing' },
      ],
      '/docs/': [
        {
          text: 'Composites',
          items: [
            { text: 'Overview', link: '/docs/composites/' },
            { text: 'Layout', link: '/docs/composites/layout' },
            { text: 'Loading', link: '/docs/composites/loading' },
            { text: 'Validation States', link: '/docs/composites/validation-states' },
            {
              text: 'Components',
              items: [
                { text: 'Card', link: '/docs/composites/card' },
                { text: 'Dropdown', link: '/docs/composites/dropdown' },
                { text: 'Modal', link: '/docs/composites/modal' },
                { text: 'Pagination', link: '/docs/composites/pagination' },
                { text: 'Search', link: '/docs/composites/search' },
                { text: 'Tooltip', link: '/docs/composites/tooltip' },
              ],
            },
          ],
        },
        {
          text: 'Semantic Styling',
          items: [
            { text: 'Overview', link: '/docs/semantics/' },
            { text: 'Typography', link: '/docs/typography' },
            {
              text: 'Elements',
              collapsed: true,
              items: [
                { text: '&lt;a&gt;', link: '/docs/semantics/a' },
                { text: '&lt;article&gt;', link: '/docs/semantics/article' },
                { text: '&lt;button&gt;', link: '/docs/semantics/button' },
                { text: '&lt;details&gt;', link: '/docs/semantics/details' },
                { text: '&lt;dialog&gt;', link: '/docs/semantics/dialog' },
                { text: '&lt;fieldset&gt;', link: '/docs/semantics/fieldset' },
                { text: '&lt;input&gt;', link: '/docs/semantics/input' },
                { text: '&lt;label&gt;', link: '/docs/semantics/label' },
                { text: '&lt;nav&gt;', link: '/docs/semantics/nav' },
                { text: '&lt;progress&gt;', link: '/docs/semantics/progress' },
                { text: '&lt;select&gt;', link: '/docs/semantics/select' },
                { text: '&lt;small&gt;', link: '/docs/semantics/small' },
                { text: '&lt;table&gt;', link: '/docs/semantics/table' },
                { text: '&lt;textarea&gt;', link: '/docs/semantics/textarea' },
              ],
            },
            {
              text: 'Attributes',
              collapsed: true,
              items: [
                { text: '[aria-busy]', link: '/docs/semantics/aria-busy' },
                { text: '[aria-invalid]', link: '/docs/semantics/aria-invalid' },
                { text: '[disabled]', link: '/docs/semantics/disabled' },
                { text: '[hidden]', link: '/docs/semantics/hidden' },
                { text: '[role="button"]', link: '/docs/semantics/role-button' },
                { text: '[role="group"]', link: '/docs/semantics/role-group' },
                { text: '[role="search"]', link: '/docs/semantics/role-search' },
                { text: '[role="toolbar"]', link: '/docs/semantics/role-toolbar' },
                { text: '[role="tooltip"]', link: '/docs/semantics/role-tooltip' },
              ],
            },
          ],
        },
        {
          text: 'Variants',
          items: [
            { text: 'Overview', link: '/docs/variants/' },
            {
              text: 'Classes',
              collapsed: true,
              items: [
                { text: '.card', link: '/docs/variants/card' },
                { text: '.container', link: '/docs/variants/container' },
                { text: '.secondary', link: '/docs/variants/secondary' },
                { text: '.contrast', link: '/docs/variants/contrast' },
                { text: '.ghost', link: '/docs/variants/ghost' },
                { text: '.striped', link: '/docs/variants/striped' },
              ],
            },
          ],
        },
        {
          text: 'Utilities',
          items: [
            { text: 'Overview', link: '/docs/utilities/' },
            {
              text: 'Categories',
              collapsed: true,
              items: [
                { text: 'Borders', link: '/docs/utilities/borders' },
                { text: 'Colors', link: '/docs/utilities/colors' },
                { text: 'Display', link: '/docs/utilities/display' },
                { text: 'Effects', link: '/docs/utilities/effects' },
                { text: 'Flexbox', link: '/docs/utilities/flexbox' },
                { text: 'Layout', link: '/docs/utilities/layout' },
                { text: 'Positioning', link: '/docs/utilities/positioning' },
                { text: 'Sizing', link: '/docs/utilities/sizing' },
                { text: 'Spacing', link: '/docs/utilities/spacing' },
                { text: 'Typography', link: '/docs/utilities/typography' },
              ],
            },
          ],
        },
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/goncalvesjoao/semanticus-css' }
    ],
    search: {
      provider: 'local'
    }
  }
})
