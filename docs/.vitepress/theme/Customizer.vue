<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useData } from 'vitepress'
import rawPreviewHtml from './customizer-preview.html?raw'
import hljs from 'highlight.js/lib/core'
import html from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('html', html)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('javascript', javascript)

const { isDark, site } = useData();

const basePath = computed(() => site.value.base || '/');

const palettes = [
  { name: 'red', label: 'Red', color: '#ef4444', description: 'A bold red color palette' },
  { name: 'pink', label: 'Pink', color: '#ec4899', description: 'A playful pink color palette' },
  { name: 'fuchsia', label: 'Fuchsia', color: '#d946ef', description: 'A vibrant fuchsia color palette' },
  { name: 'purple', label: 'Purple', color: '#a855f7', description: 'A royal purple color palette' },
  { name: 'violet', label: 'Violet', color: '#8b5cf6', description: 'A dreamy violet color palette' },
  { name: 'indigo', label: 'Indigo', color: '#6366f1', description: 'A deep indigo color palette' },
  { name: 'azure', label: 'Azure', color: '#0172ad', description: 'The default azure color palette' },
  { name: 'blue', label: 'Blue', color: '#3b82f6', description: 'A classic blue color palette' },
  { name: 'cyan', label: 'Cyan', color: '#06b6d4', description: 'A fresh cyan color palette' },
  { name: 'jade', label: 'Jade', color: '#10b981', description: 'A rich jade color palette' },
  { name: 'green', label: 'Green', color: '#22c55e', description: 'A natural green color palette' },
  { name: 'lime', label: 'Lime', color: '#84cc16', description: 'A bright lime color palette' },
  { name: 'yellow', label: 'Yellow', color: '#eab308', description: 'A cheerful yellow color palette' },
  { name: 'amber', label: 'Amber', color: '#f59e0b', description: 'A warm amber color palette' },
  { name: 'pumpkin', label: 'Pumpkin', color: '#f97316', description: 'A seasonal pumpkin color palette' },
  { name: 'orange', label: 'Orange', color: '#f97316', description: 'An energetic orange color palette' },
  { name: 'sand', label: 'Sand', color: '#d4a574', description: 'A warm sand color palette' },
  { name: 'grey', label: 'Grey', color: '#6b7280', description: 'A neutral grey color palette' },
  { name: 'zinc', label: 'Zinc', color: '#71717a', description: 'A modern zinc color palette' },
  { name: 'slate', label: 'Slate', color: '#64748b', description: 'A cool slate color palette' }
]

const sizes = [
  { name: 'default', label: 'Default', description: 'Standard sizing for all elements' },
  { name: 'pico', label: 'PicoCSS', description: 'PicoCSS original values' }
]

const currentPalette = ref('azure')
const currentSize = ref('default')
const previewFrame = ref(null)
const showInstallModal = ref(false)
const showHelpModal = ref(false)
const installMode = ref('cdn')
const copiedFeedback = ref(null)

const previewHtml = computed(() => {
  const paletteName = currentPalette.value
  const sizeName = currentSize.value
  const dataTheme = isDark.value ? 'dark' : 'light'
  const paletteCssPath = paletteName === 'azure' ? '' : `<link rel="stylesheet" href="${basePath.value}semanticus.palette.${paletteName}.css">`
  const sizeCssPath = sizeName === 'default' ? '' : `<link rel="stylesheet" href="${basePath.value}semanticus.size.${sizeName}.css">`

  return rawPreviewHtml
    .replaceAll('__SEMANTICUS_BASE__', basePath.value)
    .replace(/data-theme=""/, `data-theme="${dataTheme}"`)
    .replace('<!-- PALETTE_CSS -->', paletteCssPath)
    .replace('<!-- SIZE_CSS -->', sizeCssPath)
    .replace('<!-- PALETTE_NAME -->', paletteName)
})

watch([currentPalette, currentSize, isDark], () => {
  if (previewFrame.value) {
    previewFrame.value.srcdoc = previewHtml.value
  }
})

function selectPalette(paletteName) {
  currentPalette.value = paletteName
}

function selectSize(sizeName) {
  currentSize.value = sizeName
}

function openInstallModal() {
  showInstallModal.value = true
}

function closeInstallModal() {
  showInstallModal.value = false
}

function openHelpModal() {
  showHelpModal.value = true
}

function closeHelpModal() {
  showHelpModal.value = false
}

async function copyToClipboard(text, type) {
  try {
    await navigator.clipboard.writeText(text)
    copiedFeedback.value = type
    setTimeout(() => copiedFeedback.value = null, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const manualSnippet = computed(() => {
  const paletteName = currentPalette.value
  const sizeName = currentSize.value
  let snippet = '<link rel="stylesheet" href="/css/semanticus.css">'
  if (paletteName !== 'azure') {
    snippet += `\n<link rel="stylesheet" href="semanticus.palette.${paletteName}.css">`
  }
  if (sizeName !== 'default') {
    snippet += `\n<link rel="stylesheet" href="semanticus.size.${sizeName}.css">`
  }
  return snippet
})

const cdnSnippet = computed(() => {
  const paletteName = currentPalette.value
  const sizeName = currentSize.value
  let snippet = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.7.0/dist/semanticus.css">'
  if (paletteName !== 'azure') {
    snippet += `\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.7.0/dist/semanticus.palette.${paletteName}.css">`
  }
  if (sizeName !== 'default') {
    snippet += `\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.7.0/dist/semanticus.size.${sizeName}.css">`
  }
  return snippet
})

const npmInstallSnippet = computed(() => {
  return 'npm install semanticus-css'
})

const npmImportSnippet = computed(() => {
  const paletteName = currentPalette.value
  const sizeName = currentSize.value
  let snippet = "import 'semanticus-css';"
  if (paletteName !== 'azure') {
    snippet += `\nimport 'semanticus-css/palettes/${paletteName}';`
  }
  if (sizeName !== 'default') {
    snippet += `\nimport 'semanticus-css/sizes/${sizeName}';`
  }
  return snippet
})

const highlightedManualSnippet = computed(() => {
  return hljs.highlight(manualSnippet.value, { language: 'html' }).value
})

const highlightedCdnSnippet = computed(() => {
  return hljs.highlight(cdnSnippet.value, { language: 'html' }).value
})

const highlightedNpmInstallSnippet = computed(() => {
  return hljs.highlight(npmInstallSnippet.value, { language: 'bash' }).value
})

const highlightedNpmImportSnippet = computed(() => {
  return hljs.highlight(npmImportSnippet.value, { language: 'javascript' }).value
})
</script>

<template>
  <div class="customizer">
    <div class="customizer-body">
      <aside class="sidebar">
        <section class="sidebar-section">
          <h3 class="sidebar-title">Sizes</h3>
          <ul class="option-list">
            <li
              v-for="size in sizes"
              :key="size.name"
              :class="['option-item', { active: currentSize === size.name }]"
              @click="selectSize(size.name)"
            >
              <div class="option-info">
                <span class="option-label">{{ size.label }}</span>
                <span class="option-description">{{ size.description }}</span>
              </div>
            </li>
          </ul>
        </section>

        <section class="sidebar-section">
          <h3 class="sidebar-title">Palettes</h3>
          <ul class="option-list">
            <li
              v-for="palette in palettes"
              :key="palette.name"
              :class="['option-item', { active: currentPalette === palette.name }]"
              @click="selectPalette(palette.name)"
            >
              <span
                class="option-color"
                :style="{ backgroundColor: palette.color }"
              ></span>
              <div class="option-info">
                <span class="option-label">{{ palette.label }}</span>
                <span class="option-description">{{ palette.description }}</span>
              </div>
            </li>
          </ul>
        </section>
      </aside>

      <div class="main-column">
        <!-- Toolbar -->
        <div class="customizer-toolbar">
          <div class="toolbar-right">
            <button class="toolbar-btn help-btn" @click="openHelpModal" title="Show help">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Help
            </button>
            <button class="toolbar-btn install-btn" @click="openInstallModal" title="How to install">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              How to install
            </button>
          </div>
        </div>

        <main class="preview">
          <ClientOnly>
            <iframe
              ref="previewFrame"
              :srcdoc="previewHtml"
              class="preview-frame"
              sandbox="allow-scripts"
            ></iframe>
            <template #fallback>
              <div class="preview-frame preview-frame-fallback">
                <div class="preview-loading">Loading preview...</div>
              </div>
            </template>
          </ClientOnly>
        </main>
      </div>
    </div>

    <!-- Help Modal -->
    <div v-if="showHelpModal" class="help-overlay" @click="closeHelpModal">
      <div class="help-modal" @click.stop>
        <div class="help-header">
          <h3 class="help-title">Customizer Help</h3>
          <button class="help-close" @click="closeHelpModal">✕</button>
        </div>
        <div class="help-content">
          <p class="help-text">
            The Customizer lets you preview different color palettes and size variants for Semanticus CSS.
          </p>
          <ul class="help-list">
            <li><strong>Sizes</strong> — Choose between <em>Default</em> (standard spacing) or <em>PicoCSS</em> (compact spacing).</li>
            <li><strong>Palettes</strong> — Pick a color palette. The preview updates instantly to show how components look.</li>
            <li><strong>How to install</strong> — Click the top-right button to get copy-paste ready snippets for your project.</li>
          </ul>
          <p class="help-text">
            All changes are previewed live in the iframe. When you're happy with the combination, use the install button to grab the exact files or CDN links you need.
          </p>
        </div>
        <div class="help-footer">
          <button class="help-btn-primary" @click="closeHelpModal">Got it</button>
        </div>
      </div>
    </div>

    <!-- Install Modal -->
    <div v-if="showInstallModal" class="install-overlay" @click="closeInstallModal">
      <div class="install-modal" @click.stop>
        <div class="install-header">
          <h3 class="install-title">How to Install</h3>
          <button class="install-close" @click="closeInstallModal">✕</button>
        </div>
        <div class="install-content">
          <!-- Install Mode Toggle -->
          <div class="install-mode-toggle">
            <label class="install-mode-option" :class="{ active: installMode === 'cdn' }">
              <input type="radio" v-model="installMode" value="cdn" class="install-mode-input">
              <span class="install-mode-label">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                CDN
              </span>
            </label>
            <label class="install-mode-option" :class="{ active: installMode === 'manual' }">
              <input type="radio" v-model="installMode" value="manual" class="install-mode-input">
              <span class="install-mode-label">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                Manual Download
              </span>
            </label>
            <label class="install-mode-option" :class="{ active: installMode === 'npm' }">
              <input type="radio" v-model="installMode" value="npm" class="install-mode-input">
              <span class="install-mode-label">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                Node Import
              </span>
            </label>
          </div>

          <!-- Manual Mode -->
          <div v-if="installMode === 'manual'">
            <p class="install-description">Download the <a href="https://registry.npmjs.org/@semanticus%2Fsemanticus-css/-/semanticus-css-0.7.0.tgz" target="_blank">distribution files</a>, move the ones you need to your <strong>stylesheets</strong> folder and include them in your HTML <code>&lt;head&gt;</code>:</p>
            <div class="install-code-block">
              <pre><code class="language-html" v-html="highlightedManualSnippet"></code></pre>
              <button class="copy-snippet-btn" @click="copyToClipboard(manualSnippet, 'manual')">
                {{ copiedFeedback === 'manual' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
          </div>

          <!-- CDN Mode -->
          <div v-else-if="installMode === 'cdn'">
            <p class="install-description">Include these lines directly from a CDN in your HTML <code>&lt;head&gt;</code>:</p>
            <div class="install-code-block">
              <pre><code class="language-html" v-html="highlightedCdnSnippet"></code></pre>
              <button class="copy-snippet-btn" @click="copyToClipboard(cdnSnippet, 'cdn')">
                {{ copiedFeedback === 'cdn' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
          </div>

          <!-- NPM Mode -->
          <div v-else-if="installMode === 'npm'">
            <p class="install-description">Install the package via npm:</p>
            <div class="install-code-block">
              <pre><code class="language-bash" v-html="highlightedNpmInstallSnippet"></code></pre>
              <button class="copy-snippet-btn" @click="copyToClipboard(npmInstallSnippet, 'npmInstall')">
                {{ copiedFeedback === 'npmInstall' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <p class="install-description" style="margin-top: 1rem;">Then import the styles in your JavaScript entry file:</p>
            <div class="install-code-block">
              <pre><code class="language-javascript" v-html="highlightedNpmImportSnippet"></code></pre>
              <button class="copy-snippet-btn" @click="copyToClipboard(npmImportSnippet, 'npmImport')">
                {{ copiedFeedback === 'npmImport' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
          </div>
        </div>
        <div class="install-footer">
          <button class="install-btn-secondary" @click="closeInstallModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.customizer {
  display: flex;
  flex-direction: column;
  min-height: 600px;
  max-height: 800px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.customizer-body {
  display: grid;
  grid-template-columns: 280px 1fr;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  padding: 1.5rem;
  border-right: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  overflow-y: auto;
  height: 100%;
}

.main-column {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
}

/* ── Toolbar ── */
.customizer-toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  flex-wrap: nowrap;
  flex-shrink: 0;
}

.toolbar-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.toolbar-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  cursor: pointer;
  transition: all 0.15s;
}

.toolbar-btn:hover:not(:disabled) {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}

.toolbar-btn.install-btn {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
}

.toolbar-btn.install-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
  color: #fff;
}

.sidebar-section {
  margin-bottom: 1.5rem;
}

.sidebar-section:last-child {
  margin-bottom: 0;
}

.sidebar-title {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--vp-c-text-2);
  margin-top: 0;
  margin-bottom: 1rem;
}

.option-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.option-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.option-item:hover {
  background-color: var(--vp-c-bg-mute);
  border-color: var(--vp-c-divider);
}

.option-item.active {
  background-color: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand);
}

.option-color {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 2px solid var(--vp-c-divider);
}

.option-info {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.option-label {
  font-weight: 500;
  font-size: 0.875rem;
}

.option-description {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.preview {
  padding: 0;
  background: var(--vp-c-bg);
  overflow-y: auto;
  flex: 1;
  min-height: 0;
}

.preview-frame {
  width: 100%;
  border: none;
  background: var(--vp-c-bg);
  height: 100vh;
}

.preview-frame-fallback {
  background: var(--vp-c-bg-soft, #f3f4f6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-loading {
  color: var(--vp-c-text-2, #6b7280);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .customizer-body {
    grid-template-columns: 1fr;
    max-height: none;
  }

  .customizer {
    max-height: none;
  }

  .sidebar {
    max-height: 280px;
    border-right: none;
    border-bottom: 1px solid var(--vp-c-divider);
  }

  .preview {
    max-height: none;
  }
}

/* ── Help Modal ── */
.help-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.help-modal {
  background: var(--vp-c-bg);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 480px;
  width: 100%;
  overflow: hidden;
}

.help-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.help-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.help-close {
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: var(--vp-c-text-3);
  font-size: 1rem;
  line-height: 1;
  border-radius: 4px;
}

.help-close:hover {
  color: var(--vp-c-danger-1);
  background: var(--vp-c-danger-soft);
}

.help-content {
  padding: 1.25rem;
}

.help-text {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem 0;
  line-height: 1.6;
}

.help-list {
  margin: 0 0 1rem 0;
  padding-left: 1.25rem;
  color: var(--vp-c-text-2);
  font-size: 0.9375rem;
  line-height: 1.7;
}

.help-list li {
  margin-bottom: 0.5rem;
}

.help-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
}

.help-btn-primary {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
}

.help-btn-primary:hover {
  background: var(--vp-c-brand-2);
}

/* ── Install Modal ── */
.install-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.install-modal {
  background: var(--vp-c-bg);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 560px;
  width: 100%;
  overflow: hidden;
}

.install-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.install-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.install-close {
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: var(--vp-c-text-3);
  font-size: 1rem;
  line-height: 1;
  border-radius: 4px;
}

.install-close:hover {
  color: var(--vp-c-danger-1);
  background: var(--vp-c-danger-soft);
}

.install-content {
  padding: 1.25rem;
}

.install-description {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem 0;
}

/* Install Mode Toggle */
.install-mode-toggle {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  background: var(--vp-c-bg-soft);
  padding: 0.375rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.install-mode-option {
  flex: 1;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.15s ease;
}

.install-mode-option:hover {
  background: var(--vp-c-bg);
}

.install-mode-option.active {
  background: var(--vp-c-bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.install-mode-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.install-mode-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  border-radius: 6px;
  transition: all 0.15s ease;
}

.install-mode-option.active .install-mode-label {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.install-mode-label svg {
  flex-shrink: 0;
}

.install-code-block {
  position: relative;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
}

.install-code-block pre {
  margin: 0;
  font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, monospace;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  overflow-x: auto;
}

.copy-snippet-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.15s;
}

.copy-snippet-btn:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.install-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
}

.install-btn-secondary {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  background: transparent;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}

.install-btn-secondary:hover {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}
</style>
