import fs from 'fs';
import type MarkdownIt from 'markdown-it'
import type { RenderRule } from 'markdown-it/lib/renderer.mjs'

// Ensure that these files are included in the bundle
const rawSemanticusStyles = fs.readFileSync('./dist/semanticus.css', 'utf-8')
const rawIframeContent = fs.readFileSync('./docs/.vitepress/plugins/html-preview/iframe-content.html', 'utf-8')

function escapeForAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
}

export function htmlPreviewPlugin(md: MarkdownIt) {
  const defaultFence: RenderRule = md.renderer.rules.fence!.bind(md.renderer.rules)

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const info = token.info.trim()

    if (info === 'html-preview') {
      const code = token.content.trim()

      // Render the code block using markdown-it's default fence renderer
      const originalInfo = token.info
      token.info = 'html'
      const renderedCode = defaultFence(tokens, idx, options, env, self)
      token.info = originalInfo

      const iframeContent = rawIframeContent.replace('${customStyles}', rawSemanticusStyles).replace('${code}', code)

      return `<div>
  <div class="preview-section">
    <div class="preview-label">Preview</div>
    <iframe class="preview-iframe" srcdoc="${escapeForAttr(iframeContent)}" sandbox="allow-same-origin allow-scripts" title="Preview"></iframe>
  </div>
  <div class="code-section">
    ${renderedCode}
  </div>
</div>`
    }

    return defaultFence(tokens, idx, options, env, self)
  }
}
