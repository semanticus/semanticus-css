<script setup>
import { ref, computed } from 'vue'
import hljs from 'highlight.js/lib/core'
import html from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('html', html)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('javascript', javascript)

const installMode = ref('cdn')
const copiedFeedback = ref(null)

const manualSnippet = `<link rel="stylesheet" href="/css/semanticus.css">

<!-- costumize it with a palette or size variation if needed -->
<link rel="stylesheet" href="/css/semanticus.palette.blue.css">
<link rel="stylesheet" href="/css/semanticus.size.pico.css">`

const cdnSnippet = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.7.0/dist/semanticus.css">

<!-- costumize it with a palette or size variation if needed -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.7.0/dist/semanticus.palette.blue.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.7.0/dist/semanticus.size.pico.css">`

const npmInstallSnippet = 'npm install semanticus-css'

const npmImportSnippet = `import 'semanticus-css';

// Or import only the semantic layer
import 'semanticus-css/semantics';

// Or add a palette / size on top
import 'semanticus-css/palettes/blue';
import 'semanticus-css/sizes/pico';`

const highlightedManualSnippet = computed(() => {
  return hljs.highlight(manualSnippet, { language: 'html' }).value
})

const highlightedCdnSnippet = computed(() => {
  return hljs.highlight(cdnSnippet, { language: 'html' }).value
})

const highlightedNpmInstallSnippet = computed(() => {
  return hljs.highlight(npmInstallSnippet, { language: 'bash' }).value
})

const highlightedNpmImportSnippet = computed(() => {
  return hljs.highlight(npmImportSnippet, { language: 'javascript' }).value
})

async function copyToClipboard(text, type) {
  try {
    await navigator.clipboard.writeText(text)
    copiedFeedback.value = type
    setTimeout(() => copiedFeedback.value = null, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>

<template>
  <div class="install-guide">
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
      <p class="install-description" style="margin-top: 1rem; font-size: 0.875rem; color: var(--vp-c-text-3);">
        Requires a bundler with CSS support (Vite, Webpack, Rollup, Parcel, etc.).
      </p>
    </div>
  </div>
</template>

<style scoped>
.install-guide {
  margin: 1rem 0;
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
</style>
