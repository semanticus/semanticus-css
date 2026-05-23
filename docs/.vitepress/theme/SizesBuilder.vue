<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'
import { Demo } from '@demos/overviews';
import hljs from 'highlight.js/lib/core'
import html from 'highlight.js/lib/languages/xml'
import githubLight from 'highlight.js/styles/github.css?raw'
import githubDark from 'highlight.js/styles/github-dark.css?raw'
import { cdnBaseUrl } from '@scripts/utils';

hljs.registerLanguage('html', html)

const { isDark, site } = useData();

const basePath = computed(() => site.value.base || '/');

const cssStyles = computed(() => {
  return isDark.value ? githubDark : githubLight;
});

function htmlTemplate(base, theme) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="${theme}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <title>Semanticus CSS Size Builder</title>
  <link rel="stylesheet" href="${base}semanticus.css" id="theme-stylesheet">
  <style>
    body { transition: background-color 0.3s ease, color 0.3s ease; }
    .compare-mode { display: flex !important; flex-direction: row; width: 100%; gap: 0; }
    .compare-mode .default-mode { display: block !important; flex: 0 0 50% !important; width: 50% !important; position: relative; padding: 1rem; box-sizing: border-box; }
    .compare-mode .custom-mode { display: block !important; flex: 0 0 50% !important; width: 50% !important; position: relative; padding: 1rem; box-sizing: border-box; }
    .compare-mode .compare-side-label { display: block !important; position: absolute; top: -0.5rem; font-size: 0.625rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; color: var(--vp-c-text-3, #646b79); background: var(--vp-c-bg-soft, #f3f4f6); padding: 0.125rem 0.5rem; border-radius: 3px; z-index: 5; }
    .compare-mode .default-mode .compare-side-label { left: 0.5rem; }
    .compare-mode .custom-mode .compare-side-label { right: 0.5rem; }
    .compare-mode .compare-divider { display: block !important; position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: #f27036; transform: translateX(-50%); pointer-events: none; z-index: 10; }
  </style>
</head>
<body class="px-2">
  <div id="preview-container" class="position-relative w-100 overflow-visible">
    <div class="default-mode w-100 py-3 my-4">
      <span class="compare-side-label d-none">Before</span>
      <div id="default-content">
        ${Demo.palettesExample({ class: 'container-fluid' })}
      </div>
    </div>
    <div class="custom-mode d-none w-100 py-3 my-4">
      <span class="compare-side-label d-none">After</span>
      <div id="custom-content"></div>
    </div>
    <div class="compare-divider d-none"></div>
  </div>

  <script>
    var sizeBuilderCss = '';
    function applySizeBuilderCss() {
      var customStyle = document.getElementById('size-builder-custom');
      if (!customStyle) {
        customStyle = document.createElement('style');
        customStyle.id = 'size-builder-custom';
        document.head.appendChild(customStyle);
      }
      var inCompare = document.getElementById('preview-container').classList.contains('compare-mode');
      if (inCompare) {
        customStyle.textContent = sizeBuilderCss.replace(new RegExp(':root,\\n:host {', 'g'), '#custom-content {');
      } else {
        customStyle.textContent = sizeBuilderCss;
      }
    }
    window.addEventListener('message', function(event) {
      if (event.data && event.data.type === 'update-size-css') {
        sizeBuilderCss = event.data.css || '';
        applySizeBuilderCss();
      }
      if (event.data && event.data.type === 'set-compare-mode') {
        var container = document.getElementById('preview-container');
        var customContent = document.getElementById('custom-content');
        var defaultContent = document.getElementById('default-content');
        if (event.data.enabled) {
          customContent.innerHTML = defaultContent.innerHTML;
          container.classList.add('compare-mode');
        } else {
          container.classList.remove('compare-mode');
          customContent.innerHTML = '';
        }
        applySizeBuilderCss();
      }
      if (event.data && event.data.type === 'request-computed-values') {
        var result = {};
        var inCompare = document.getElementById('preview-container').classList.contains('compare-mode');
        for (var i = 0; i < event.data.vars.length; i++) {
          var item = event.data.vars[i];
          if (inCompare) {
            result[item.name] = getComputedStyle(document.getElementById('custom-content')).getPropertyValue(item.name).trim();
          } else {
            result[item.name] = getComputedStyle(document.documentElement).getPropertyValue(item.name).trim();
          }
        }
        event.source.postMessage({
          type: 'computed-values',
          requestId: event.data.requestId,
          values: result
        }, '*');
      }
    });
  <\/script>
</body>
</html>`;
}

const previewTheme = ref(isDark.value ? 'dark' : 'light')

const iframeContent = computed(() => {
  return htmlTemplate(basePath.value, previewTheme.value)
})

function togglePreviewTheme() {
  previewTheme.value = previewTheme.value === 'light' ? 'dark' : 'light'
  computedReady.value = false
  Object.keys(computedValues).forEach(k => delete computedValues[k])
}

// ── Variable definitions (non-color size variables from src/sizes/pico.css) ──

const variableGroups = [
  {
    label: 'Font Families',
    vars: [
      { name: '--font-family', label: 'Font Family', desc: 'Primary font family for body text.', default: 'var(--font-family-sans-serif)' },
      { name: '--font-family-sans-serif', label: 'Sans-serif Family', desc: 'System sans-serif font stack.', default: 'system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, Helvetica, Arial, "Helvetica Neue", sans-serif, var(--font-family-emoji)' },
      { name: '--font-family-monospace', label: 'Monospace Family', desc: 'Monospace font stack for code elements.', default: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, var(--font-family-emoji)' },
      { name: '--font-family-emoji', label: 'Emoji Family', desc: 'Font fallback for emoji characters.', default: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' },
    ]
  },
  {
    label: 'Typography',
    vars: [
      { name: '--font-size', label: 'Root Font Size', desc: 'Root font-size; scales with breakpoints.', default: '100%' },
      { name: '--line-height', label: 'Line Height', desc: 'Default line-height for body text.', default: '1.5' },
      { name: '--font-weight', label: 'Font Weight', desc: 'Default font weight for body text.', default: '400' },
      { name: '--text-underline-offset', label: 'Underline Offset', desc: 'Offset for underlined text.', default: '0.1rem' },
      { name: '--a-decoration', label: 'Link Decoration', desc: 'Text decoration style for links.', default: 'underline' },
    ]
  },
  {
    label: 'Heading Sizes',
    vars: [
      { name: '--h1-size', label: 'H1 Size', desc: 'Font size for <h1> elements.', default: '2rem' },
      { name: '--h2-size', label: 'H2 Size', desc: 'Font size for <h2> elements.', default: '1.75rem' },
      { name: '--h3-size', label: 'H3 Size', desc: 'Font size for <h3> elements.', default: '1.5rem' },
      { name: '--h4-size', label: 'H4 Size', desc: 'Font size for <h4> elements.', default: '1.25rem' },
      { name: '--h5-size', label: 'H5 Size', desc: 'Font size for <h5> elements.', default: '1.125rem' },
      { name: '--h6-size', label: 'H6 Size', desc: 'Font size for <h6> elements.', default: '1rem' },
    ]
  },
  {
    label: 'Spacing',
    vars: [
      { name: '--spacing', label: 'Spacing', desc: 'Applied spacing; scales with base-spacing and breakpoints.', default: 'var(--base-spacing)' },
      { name: '--typography-spacing-vertical', label: 'Typography Vertical', desc: 'Vertical margin below typographic elements.', default: '1rem' },
      { name: '--input-spacing-vertical', label: 'Input Vertical', desc: 'Vertical padding inside form inputs.', default: '0.75rem' },
      { name: '--input-spacing-horizontal', label: 'Input Horizontal', desc: 'Horizontal padding inside form inputs.', default: '1rem' },
    ]
  },
  {
    label: 'Borders & Effects',
    vars: [
      { name: '--radius', label: 'Border Radius', desc: 'Default border-radius for elements.', default: '0.25rem' },
      { name: '--border-size', label: 'Border Size', desc: 'Default border width.', default: '0.0625rem' },
      { name: '--outline-size', label: 'Outline Size', desc: 'Focus-ring outline width.', default: '0.125rem' },
      { name: '--transition', label: 'Transition', desc: 'Default transition timing for interactive states.', default: '0.2s ease-in-out' },
    ]
  },
  {
    label: 'Navigation',
    vars: [
      { name: '--nav-link-gap', label: 'Nav Link Gap', desc: 'Spacing inside nav links.', default: 'calc(var(--spacing) * 0.5)' },
      { name: '--nav-breadcrumb-divider', label: 'Breadcrumb Divider', desc: 'Character between breadcrumb items.', default: '">"' },
      { name: '--sidebar-size', label: 'Sidebar Width', desc: 'Sidebar width; scales with breakpoints.', default: '25%' },
    ]
  },
  {
    label: 'Group Shadows',
    vars: [
      { name: '--group-shadow', label: 'Group Shadow', desc: 'Shadow on [role="group"] and [role="search"] combos.', default: '0 0 0 rgba(0, 0, 0, 0)' },
      { name: '--group-shadow-focus-button', label: 'Group Button Focus', desc: 'Focus shadow when a button inside the group is focused.', default: '0 0 0 var(--outline-size) var(--color-primary-focus-ring)' },
      { name: '--group-shadow-focus-input', label: 'Group Input Focus', desc: 'Focus shadow when an input inside the group is focused.', default: '0 0 0 0.0625rem var(--input-border)' },
    ]
  },
  {
    label: 'Button Shadows',
    vars: [
      { name: '--button-shadow', label: 'Button Shadow', desc: 'Shadow on buttons at rest.', default: '0 0 0 rgb(0 0 0 / 0)' },
      { name: '--button-shadow-hover', label: 'Button Hover Shadow', desc: 'Shadow on buttons when hovered.', default: '0 0 0 rgb(0 0 0 / 0)' },
    ]
  },
  {
    label: 'Form States & Misc',
    vars: [
      { name: '--input-opacity-disabled', label: 'Disabled Opacity', desc: 'Opacity for disabled form inputs.', default: '0.5' },
      { name: '--loading-spinner-opacity', label: 'Loading Opacity', desc: 'Opacity for the loading spinner overlay.', default: '0.5' },
    ]
  },
]

// ── State ───────────────────────────────────────────────────────────────────

const customValues = reactive({})
const searchQuery = ref('')
const expandedGroups = reactive({})
const iframeRef = ref(null)
const sidebarCollapsed = ref(false)
const showExportModal = ref(false)
const exportMode = ref('inline')
const copiedFeedback = ref(null)
const activePopover = ref(null)
const compareMode = ref(false)
const computedValues = reactive({})
const computedReady = ref(false)
const pendingRequestId = ref(null)
const fileInputRef = ref(null)

// Build a lookup from variable name to its default for import
const varDefaults = {}
variableGroups.forEach(g => {
  g.vars.forEach(v => {
    varDefaults[v.name] = v.default
  })
})

// Initialize all groups as collapsed except the first
variableGroups.forEach((g, i) => {
  expandedGroups[g.label] = i === 0
})

// ── Computed ────────────────────────────────────────────────────────────────

const filteredGroups = computed(() => {
  const q = searchQuery.value.toLowerCase().trim()
  if (!q) return variableGroups

  return variableGroups
    .map(group => ({
      ...group,
      vars: group.vars.filter(v =>
        v.name.toLowerCase().includes(q) ||
        v.label.toLowerCase().includes(q) ||
        v.desc.toLowerCase().includes(q)
      )
    }))
    .filter(group => group.vars.length > 0)
})

const changedCount = computed(() => Object.keys(customValues).length)

// ── Helpers ─────────────────────────────────────────────────────────────────

function getKey(v) {
  return `root:${v.name}`
}

function getDefault(v) {
  return v.default
}

function getDisplayValue(v) {
  const key = getKey(v)
  if (computedReady.value && computedValues[v.name] && computedValues[v.name] !== '') {
    return computedValues[v.name]
  }
  if (key in customValues) return customValues[key]
  return v.default
}

function setCurrentValue(v, value) {
  const key = getKey(v)
  if (value === '' || value === v.default) {
    delete customValues[key]
  } else {
    customValues[key] = value
  }
  updateIframeStyles()
}

function isChanged(v) {
  return getKey(v) in customValues
}

function resetVar(v) {
  delete customValues[getKey(v)]
  updateIframeStyles()
}

function resetAll() {
  Object.keys(customValues).forEach(k => delete customValues[k])
  updateIframeStyles()
}

function toggleGroup(label) {
  expandedGroups[label] = !expandedGroups[label]
}

function togglePopover(varName) {
  activePopover.value = activePopover.value === varName ? null : varName
}

function closePopover() {
  activePopover.value = null
}

function handleDocumentClick(event) {
  if (activePopover.value && !event.target.closest('.popover-container')) {
    closePopover()
  }
}

function highlightMatch(text, query) {
  if (!query) return text
  const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi')
  return text.replace(regex, '<mark class="search-highlight">$1</mark>')
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
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

function toggleCompare() {
  compareMode.value = !compareMode.value
  computedReady.value = false
  if (iframeRef.value?.contentWindow) {
    iframeRef.value.contentWindow.postMessage({
      type: 'set-compare-mode',
      enabled: compareMode.value
    }, '*')
    setTimeout(() => {
      requestComputedValues()
    }, 0)
  }
}

function toggleSidebar() {
  sidebarCollapsed.value = !sidebarCollapsed.value
}

// ── iframe Communication ────────────────────────────────────────────────────

function buildCustomCSS() {
  const rootVars = []

  for (const [key, value] of Object.entries(customValues)) {
    const [, ...nameParts] = key.split(':')
    const name = nameParts.join(':')
    rootVars.push(`  ${name}: ${value};`)
  }

  const allRootLines = [...rootVars]
  if (!allRootLines.length) {
    return `/* No custom variables set */`
  }

  return `:root,
:host {
${allRootLines.join('\n')}
}
`
}

function updateIframeStyles() {
  if (!iframeRef.value?.contentWindow) return
  iframeRef.value.contentWindow.postMessage({
    type: 'update-size-css',
    css: buildCustomCSS()
  }, '*')
  setTimeout(requestComputedValues, 80)
}

// ── Export ─────────────────────────────────────────────────────────────────

function exportCSS() {
  showExportModal.value = true
}

function closeExportModal() {
  showExportModal.value = false
}

function downloadCSS() {
  const name = 'custom'
  const css = buildCustomCSS()
  const header = `/* Semanticus CSS Custom Size
 * Generated by Semanticus CSS Size Builder
 * ${new Date().toISOString().split('T')[0]}
 */

`
  const blob = new Blob([header + css], { type: 'text/css' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `semanticus.size.${name}.css`
  a.click()
  URL.revokeObjectURL(url)
}

const exportSnippet = computed(() => {
  const cssPath = '/css/semanticus.size.custom.css'
  return `<link rel="stylesheet" href="${cdnBaseUrl('/dist/semanticus.css')}">\n<link rel="stylesheet" href="${cssPath}">`
})
const highlightedExportSnippet = computed(() => {
  return hljs.highlight(exportSnippet.value, { language: 'html' }).value;
})

const inlineSnippet = computed(() => {
  const css = buildCustomCSS().trimEnd()
  return `<link rel="stylesheet" href="${cdnBaseUrl('/dist/semanticus.css')}">\n<style>\n${css}\n</style>`
})
const highlightedInlineSnippet = computed(() => {
  return hljs.highlight(inlineSnippet.value, { language: 'html' }).value;
})

function triggerImport() {
  if (fileInputRef.value) {
    fileInputRef.value.value = ''
    fileInputRef.value.click()
  }
}

function handleFileImport(event) {
  const file = event.target.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (e) => {
    const text = e.target?.result
    if (typeof text === 'string') {
      parseAndApplyCSS(text)
    }
  }
  reader.readAsText(file)
}

function parseAndApplyCSS(text) {
  // Match --var-name: value; lines
  const regex = /--[\w-]+\s*:\s*[^;]+/g
  const matches = text.matchAll(regex)
  let changed = false
  for (const match of matches) {
    const [full] = match
    const colonIdx = full.indexOf(':')
    const name = full.slice(0, colonIdx).trim()
    const value = full.slice(colonIdx + 1).trim()
    if (name in varDefaults) {
      const key = `root:${name}`
      const def = varDefaults[name]
      if (value === def) {
        if (key in customValues) {
          delete customValues[key]
          changed = true
        }
      } else {
        customValues[key] = value
        changed = true
      }
    }
  }
  if (changed) {
    updateIframeStyles()
  }
}

function requestComputedValues() {
  if (!iframeRef.value?.contentWindow) return
  const reqId = Date.now()
  pendingRequestId.value = reqId
  const payload = []
  for (const group of variableGroups) {
    for (const v of group.vars) {
      payload.push({ name: v.name })
    }
  }
  iframeRef.value.contentWindow.postMessage({
    type: 'request-computed-values',
    requestId: reqId,
    vars: payload
  }, '*')
}

function handleMessage(event) {
  if (event.data && event.data.type === 'computed-values') {
    if (event.source !== iframeRef.value?.contentWindow) return
    if (event.data.requestId !== pendingRequestId.value) return
    Object.assign(computedValues, event.data.values)
    computedReady.value = true
  }
}

// ── Lifecycle ───────────────────────────────────────────────────────────────

onMounted(() => {
  window.addEventListener('message', handleMessage)
  document.addEventListener('click', handleDocumentClick)
})

onUnmounted(() => {
  window.removeEventListener('message', handleMessage)
  document.removeEventListener('click', handleDocumentClick)
})

const IFRAME_INIT_DELAY_MS = 300

function onIframeLoad() {
  setTimeout(() => {
    updateIframeStyles()
    requestComputedValues()
  }, IFRAME_INIT_DELAY_MS)
}

defineExpose({
  changedCount,
  compareMode,
  previewTheme,
  togglePreviewTheme,
  exportCSS,
  toggleCompare,
  triggerImport,
  resetAll,
})
</script>

<template>
  <div class="sizes-builder">
    <component :is="'style'" v-html="cssStyles"></component>
    <div
      class="builder-body"
      :style="{ gridTemplateColumns: sidebarCollapsed ? '0px auto 1fr' : 'minmax(280px, 30%) auto 1fr' }"
    >
      <!-- Sidebar: Variable Editors -->
      <aside class="builder-sidebar" :class="{ collapsed: sidebarCollapsed }">
        <div class="search-box">
          <svg class="search-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search variables..."
            class="search-input"
          >
        </div>

        <div class="var-groups">
          <div
            v-for="group in filteredGroups"
            :key="group.label"
            class="var-group"
          >
            <button class="group-header" @click="toggleGroup(group.label)">
              <svg :class="['chevron', { expanded: expandedGroups[group.label] }]" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6" /></svg>
              <span class="group-label">{{ group.label }}</span>
              <span class="group-count">{{ group.vars.length }}</span>
            </button>

            <div v-show="expandedGroups[group.label]" class="group-vars">
              <div
                v-for="v in group.vars"
                :key="v.name"
                :class="['var-row', { changed: isChanged(v) }]"
              >
                <div class="var-label-row">
                  <label class="var-label" :for="'input-' + v.name">
                    <code class="var-name-label" v-html="highlightMatch(v.name, searchQuery)"></code>
                  </label>
                  <div class="popover-container">
                    <button
                      type="button"
                      class="help-trigger"
                      :aria-expanded="activePopover === v.name"
                      @click.stop="togglePopover(v.name)"
                      title="Show details"
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                    </button>
                    <div
                      v-if="activePopover === v.name"
                      class="help-popover"
                      @click.stop
                    >
                      <div class="popover-header">
                        <code class="var-name-popover">{{ v.name }}</code>
                        <button
                          type="button"
                          class="popover-close"
                          @click.stop="closePopover"
                        >✕</button>
                      </div>
                      <div class="popover-content">
                        <p class="popover-short-label" v-html="highlightMatch(v.label, searchQuery)"></p>
                        <p class="popover-desc" v-html="highlightMatch(v.desc, searchQuery)"></p>
                        <div class="popover-default">
                          <span class="default-label">Default:</span>
                          <code class="default-value">{{ getDefault(v) }}</code>
                        </div>
                        <div class="popover-copy-css">
                          <button
                            type="button"
                            class="copy-css-btn"
                            @click.stop="copyToClipboard(`${v.name}: ${getDisplayValue(v)};`, 'cssRule')"
                          >
                            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                            {{ copiedFeedback === 'cssRule' ? 'Copied CSS!' : 'Copy CSS Rule' }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    v-if="isChanged(v)"
                    class="reset-var-btn"
                    @click="resetVar(v)"
                    title="Reset to default"
                  >✕</button>
                </div>

                <div class="var-input-row">
                  <input
                    type="text"
                    class="text-input"
                    :id="'input-' + v.name"
                    :value="getDisplayValue(v)"
                    :placeholder="getDefault(v)"
                    @change="setCurrentValue(v, $event.target.value)"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Sidebar Toggle -->
      <button
        class="sidebar-toggle"
        @click="toggleSidebar"
        :title="sidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'"
        :class="{ collapsed: sidebarCollapsed }"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline :points="sidebarCollapsed ? '9 18 15 12 9 6' : '15 18 9 12 15 6'" /></svg>
      </button>

      <!-- Preview -->
      <main class="builder-preview">
        <div class="preview-container">
          <ClientOnly>
            <iframe
              :key="previewTheme"
              ref="iframeRef"
              :srcdoc="iframeContent"
              class="preview-iframe"
              title="Size Preview"
              sandbox="allow-scripts allow-same-origin"
              @load="onIframeLoad"
            ></iframe>
            <template #fallback>
              <div class="preview-iframe preview-iframe-fallback">
                <div class="preview-loading">Loading size preview...</div>
              </div>
            </template>
          </ClientOnly>
        </div>
      </main>
    </div>

    <!-- Export Modal -->
    <div v-if="showExportModal" class="export-overlay" @click="closeExportModal">
      <div class="export-modal" @click.stop>
        <div class="export-header">
          <h3 class="export-title">Export Your Size Overrides</h3>
          <button class="export-close" @click="closeExportModal">✕</button>
        </div>
        <div class="export-content">
          <!-- Export Mode Toggle -->
          <div class="export-mode-toggle">
            <label class="export-mode-option" :class="{ active: exportMode === 'inline' }">
              <input
                type="radio"
                v-model="exportMode"
                value="inline"
                class="export-mode-input"
              >
              <span class="export-mode-label">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                Code Snippet
              </span>
            </label>
            <label class="export-mode-option" :class="{ active: exportMode === 'file' }">
              <input
                type="radio"
                v-model="exportMode"
                value="file"
                class="export-mode-input"
              >
              <span class="export-mode-label">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                Download CSS file
              </span>
            </label>
          </div>

          <!-- External File Mode -->
          <div v-if="exportMode === 'file'">
            <p class="export-description">Download the <strong>semanticus.size.custom.css</strong> to your <strong>stylesheets</strong> folder and include these lines in your HTML:</p>
            <div class="export-code-block">
              <pre><code class="language-html" v-html="highlightedExportSnippet"></code></pre>
              <button
                class="copy-snippet-btn"
                @click="copyToClipboard(exportSnippet, 'snippet')"
              >
                {{ copiedFeedback === 'snippet' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
          </div>

          <!-- Inline Mode -->
          <div v-else>
            <p class="export-description">Copy this snippet to use inline styles directly in your HTML:</p>
            <div class="export-code-block">
              <pre><code class="language-html" v-html="highlightedInlineSnippet"></code></pre>
              <button
                class="copy-snippet-btn"
                @click="copyToClipboard(inlineSnippet, 'inlineSnippet')"
              >
                {{ copiedFeedback === 'inlineSnippet' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
          </div>
        </div>
        <div class="export-footer">
          <button class="export-btn-secondary" @click="closeExportModal">Cancel</button>
          <button v-if="exportMode === 'file'" class="export-btn-primary" @click="downloadCSS">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Download semanticus.size.custom.css
          </button>
        </div>
      </div>
    </div>

    <!-- Hidden file input for import -->
    <input
      ref="fileInputRef"
      type="file"
      accept=".css"
      @change="handleFileImport"
      style="display: none"
    />
  </div>
</template>

<style scoped>
.sizes-builder {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  background: var(--vp-c-bg);
}

/* ── Body Layout ── */
.builder-body {
  display: grid;
  grid-template-columns: minmax(280px, 30%) auto 1fr;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

/* ── Sidebar Toggle ── */
.sidebar-toggle {
  width: 20px;
  background: var(--vp-c-bg-soft);
  border: none;
  border-left: 1px solid var(--vp-c-divider);
  border-right: 1px solid var(--vp-c-divider);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-3);
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;
  padding: 0;
  position: relative;
  z-index: 10;
}

.sidebar-toggle:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.sidebar-toggle.collapsed {
  border-left-color: var(--vp-c-divider);
}

/* ── Sidebar ── */
.builder-sidebar {
  overflow-y: auto;
  background: var(--vp-c-bg-soft);
  max-height: 100%;
}

.builder-sidebar.collapsed {
  overflow: hidden;
  visibility: hidden;
}

.search-box {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 0.75rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.search-icon {
  flex-shrink: 0;
  color: var(--vp-c-text-3);
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  color: var(--vp-c-text-1);
  outline: none;
}

.search-input::placeholder {
  color: var(--vp-c-text-3);
}

/* ── Variable Groups ── */
.var-groups {
  padding: 0.25rem 0;
}

.var-group {
  border-bottom: 1px solid var(--vp-c-divider);
}

.group-header {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  width: 100%;
  padding: 0.625rem 0.75rem;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-2);
  font-weight: 600;
}

.group-header:hover {
  color: var(--vp-c-text-1);
}

.chevron {
  transition: transform 0.15s;
  flex-shrink: 0;
}

.chevron.expanded {
  transform: rotate(90deg);
}

.group-label {
  flex: 1;
  text-align: left;
}

.group-count {
  font-size: 0.625rem;
  padding: 0.0625rem 0.375rem;
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-3);
}

/* ── Variable Rows ── */
.group-vars {
  padding: 0 0.5rem 0.5rem;
}

.var-row {
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.15s;
  border: 1px solid transparent;
}

.var-row:hover,
.var-row.selected {
  background: var(--vp-c-bg);
  border-color: var(--vp-c-divider);
}

.var-row.changed {
  background: rgba(242, 112, 54, 0.04);
}

.var-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}

.var-label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.popover-container {
  position: relative;
  display: inline-flex;
}

.help-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-3);
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
  transition: all 0.15s;
}

.help-trigger:hover,
.help-trigger[aria-expanded="true"] {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.help-popover {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  width: 260px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
}

.popover-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.75rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.var-name-popover {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
}

.popover-close {
  background: none;
  border: none;
  padding: 0.125rem 0.25rem;
  cursor: pointer;
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
  line-height: 1;
  border-radius: 3px;
}

.popover-close:hover {
  color: var(--vp-c-danger-1, #e53e3e);
  background: var(--vp-c-danger-soft, rgba(229, 62, 62, 0.1));
}

.popover-content {
  padding: 0.75rem;
}

.popover-short-label {
  font-size: 0.8125rem;
  color: var(--vp-c-text-1);
  margin: 0 0 0.375rem 0;
  font-weight: 600;
}

.popover-desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.75rem 0;
  line-height: 1.5;
}

.popover-default {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.default-label {
  font-size: 0.6875rem;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.default-value {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
  word-break: break-word;
}

.popover-copy-css {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--vp-c-divider);
}

.copy-css-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  transition: all 0.15s;
}

.copy-css-btn:hover {
  background: var(--vp-c-brand-2);
}

.reset-var-btn {
  background: none;
  border: none;
  padding: 0.125rem 0.25rem;
  cursor: pointer;
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
  line-height: 1;
  border-radius: 3px;
}

.reset-var-btn:hover {
  color: var(--vp-c-danger-1, #e53e3e);
  background: var(--vp-c-danger-soft, rgba(229, 62, 62, 0.1));
}

.var-input-row {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.text-input {
  flex: 1;
  min-width: 0;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.75rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
  outline: none;
  transition: border-color 0.15s;
}

.text-input:focus {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

/* ── Search Highlight ── */
:deep(.search-highlight) {
  background: var(--vp-c-warning-soft, rgba(255, 214, 165, 0.4));
  color: var(--vp-c-warning-1, #d97706);
  padding: 0 0.125rem;
  border-radius: 2px;
  font-weight: 600;
}

/* ── Var Name Label ── */
.var-name-label {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-mute);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
}

/* ── Preview ── */
.builder-preview {
  background: var(--vp-c-bg);
  overflow: hidden;
}

.preview-container {
  width: 100%;
  height: 100%;
}

.preview-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.preview-iframe-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-loading {
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
}

/* ── Export Modal ── */
.export-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.export-modal {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  width: 100%;
  max-width: 560px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.export-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.export-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--vp-c-text-1);
}

.export-close {
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  color: var(--vp-c-text-3);
  font-size: 1rem;
  line-height: 1;
  border-radius: 4px;
}

.export-close:hover {
  color: var(--vp-c-danger-1, #e53e3e);
  background: var(--vp-c-danger-soft, rgba(229, 62, 62, 0.1));
}

.export-content {
  padding: 1.25rem;
  overflow-y: auto;
}

.export-description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem 0;
}

.export-code-block {
  position: relative;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.export-code-block pre {
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
  font-size: 0.8125rem;
  line-height: 1.6;
}

.export-code-block code {
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

.export-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--vp-c-divider);
}

.export-btn-secondary {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s;
}

.export-btn-secondary:hover {
  border-color: var(--vp-c-text-1);
  color: var(--vp-c-text-1);
}

.export-btn-primary {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.15s;
}

.export-btn-primary:hover {
  background: var(--vp-c-brand-2);
}

/* Export Mode Toggle */
.export-mode-toggle {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  background: var(--vp-c-bg-soft);
  padding: 0.375rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.export-mode-option {
  flex: 1;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.15s ease;
}

.export-mode-option:hover {
  background: var(--vp-c-bg);
}

.export-mode-option.active {
  background: var(--vp-c-bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.export-mode-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.export-mode-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  border-radius: 6px;
  transition: all 0.15s ease;
}

.export-mode-option.active .export-mode-label {
  color: var(--vp-c-brand-1);
}
</style>
