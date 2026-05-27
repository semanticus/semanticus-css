<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useData } from 'vitepress'
import hljs from 'highlight.js/lib/core'
import html from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'
import { OverviewDemo } from '@demos/index';
import { cdnBaseUrl, npmRegistryTarballUrl } from '@scripts/utils';

function htmlTemplate(style, theme) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="${theme}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <style>
    ${style}
    body {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  </style>
</head>
<body>
  ${OverviewDemo.customizerExample({ class: 'container-fluid' })}

  <script>
    function sendHeight() {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({ type: 'customizer-iframe-resize', id: '${uid}', height: height }, '*');
    }
    window.addEventListener('load', sendHeight);
    window.addEventListener('resize', sendHeight);
    const observer = new MutationObserver(() => {
      if (window._heightTimeout) clearTimeout(window._heightTimeout);
      window._heightTimeout = setTimeout(sendHeight, 50);
    });
    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    sendHeight();
  <\/script>
</body>
</html>`;
}

hljs.registerLanguage('html', html)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('javascript', javascript)

const { isDark, site } = useData();

const basePath = computed(() => site.value.base || '/');

const sizes = [
  { name: 'default', label: 'Default', description: 'Standard sizing for all elements' },
  { name: 'pico', label: 'PicoCSS', description: 'PicoCSS original values' }
]

const currentSize = ref('default')
const previewFrame = ref(null)
const showInstallModal = ref(false)
const installMode = ref('cdn')
const copiedFeedback = ref(null)
const previewTheme = ref(isDark.value ? 'dark' : 'light')

const previewHtml = computed(() => {
  const sizeName = currentSize.value
  const dataTheme = previewTheme.value

  const style = `
    @import url('${basePath.value}semanticus.css');
    ${sizeName !== 'default' ? `@import url('${basePath.value}semanticus.size.${sizeName}.css');` : ''}
  `

  return htmlTemplate(style, dataTheme);
})

watch([currentSize, previewTheme], () => {
  if (previewFrame.value) {
    previewFrame.value.srcdoc = previewHtml.value
  }
})

function togglePreviewTheme() {
  previewTheme.value = previewTheme.value === 'light' ? 'dark' : 'light'
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
  const sizeName = currentSize.value
  let snippet = '<link rel="stylesheet" href="/css/semanticus.css">'
  if (sizeName !== 'default') {
    snippet += `\n<link rel="stylesheet" href="/css/semanticus.size.${sizeName}.css">`
  }
  return snippet
})

const cdnSnippet = computed(() => {
  const sizeName = currentSize.value
  let snippet = `<link rel="stylesheet" href="${cdnBaseUrl(`/dist/semanticus.css`)}">`
  if (sizeName !== 'default') {
    snippet += `\n<link rel="stylesheet" href="${cdnBaseUrl(`/dist/semanticus.size.${sizeName}.css`)}">`
  }
  return snippet
})

const npmInstallSnippet = computed(() => {
  return 'npm install @semanticus/semanticus-css'
})

const tarballUrl = npmRegistryTarballUrl();

const npmImportSnippet = computed(() => {
  const sizeName = currentSize.value
  let snippet = "import '@semanticus/semanticus-css';"
  if (sizeName !== 'default') {
    snippet += `\nimport '@semanticus/semanticus-css/sizes/${sizeName}';`
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

const iframeHeight = ref(600)
const uid = `sizes-preview-${Math.random().toString(36).substr(2, 9)}`

function handleMessage(event) {
  if (event.data?.type === 'customizer-iframe-resize' && event.data.id === uid) {
    iframeHeight.value = Math.max(event.data.height, 200)
  }
}

onMounted(() => {
  window.addEventListener('message', handleMessage)
})

onUnmounted(() => {
  window.removeEventListener('message', handleMessage)
})

defineExpose({
  openInstallModal,
  previewTheme,
  togglePreviewTheme,
})
</script>

<template>
  <div class="sizes-picker">
    <div class="sizes-picker-body">
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
      </aside>

      <div class="main-column">
        <main class="preview">
          <ClientOnly>
            <iframe
              ref="previewFrame"
              :srcdoc="previewHtml"
              class="preview-frame"
              :style="{ height: iframeHeight + 'px' }"
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
            <p class="install-description">Download the <a :href="tarballUrl" target="_blank">distribution files</a>, move the ones you need to your <strong>stylesheets</strong> folder and include them in your HTML <code>&lt;head&gt;</code>:</p>
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
.sizes-picker {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.sizes-picker-body {
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
  min-height: 200px;
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
  .sizes-picker-body {
    grid-template-columns: 1fr;
    max-height: none;
  }

  .sizes-picker {
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
  padding: 0.25rem;
  cursor: pointer;
  color: var(--vp-c-text-3);
  font-size: 1.25rem;
  line-height: 1;
  border-radius: 4px;
}

.install-close:hover {
  color: var(--vp-c-danger-1, #e53e3e);
  background: var(--vp-c-danger-soft, rgba(229, 62, 62, 0.1));
}

.install-content {
  padding: 1.25rem;
}

.install-mode-toggle {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.install-mode-option {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.15s;
  background: var(--vp-c-bg);
}

.install-mode-option:hover {
  border-color: var(--vp-c-brand-1);
}

.install-mode-option.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
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
  gap: 0.375rem;
  font-size: 0.8125rem;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.install-description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.75rem 0;
  line-height: 1.5;
}

.install-description a {
  color: var(--vp-c-brand-1);
}

.install-code-block {
  position: relative;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.install-code-block pre {
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
  font-size: 0.8125rem;
  line-height: 1.6;
}

.install-code-block code {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
  color: var(--vp-c-text-1);
}

.copy-snippet-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.15s;
}

.copy-snippet-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.install-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--vp-c-divider);
}

.install-btn-secondary {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s;
}

.install-btn-secondary:hover {
  border-color: var(--vp-c-text-1);
  color: var(--vp-c-text-1);
}
</style>
