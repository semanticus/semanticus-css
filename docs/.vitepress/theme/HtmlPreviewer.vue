<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import semanticusStyles from '../../../dist/semanticus.css?raw';
import boxModelInspectorScript from 'box-model-inspector/dist/box-model-inspector.js?raw';
import hljs from 'highlight.js/lib/core'
import html from 'highlight.js/lib/languages/xml'
import { useData } from 'vitepress'

// isDark is a reactive Ref<boolean>
const { isDark } = useData();

// Inline the highlight.js styles to ensure they work in both dev and production
// GitHub Light theme colors (based on highlight.js github.css)
const githubLightStyles = `
.hljs{display:block;overflow-x:auto;padding:.5em;color:#24292e;background:#fff}
.hljs-comment,.hljs-quote{color:#6a737d;font-style:italic}
.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#d73a49;font-weight:700}
.hljs-number,.hljs-literal,.hljs-variable,.hljs-template-variable,.hljs-tag .hljs-attr{color:#005cc5}
.hljs-string,.hljs-doctag{color:#22863a}
.hljs-title,.hljs-section,.hljs-selector-id{color:#6f42c1;font-weight:700}
.hljs-subst{font-weight:400}
.hljs-type,.hljs-class .hljs-title{color:#6f42c1;font-weight:700}
.hljs-tag,.hljs-name,.hljs-attribute{color:#22863a;font-weight:400}
.hljs-regexp,.hljs-link{color:#032f62}
.hljs-symbol,.hljs-bullet{color:#e36209}
.hljs-built_in,.hljs-builtin-name{color:#005cc5}
.hljs-meta{color:#6a737d;font-weight:700}
.hljs-deletion{background:#ffeef0;color:#b31d28}
.hljs-addition{background:#f0fff4;color:#22863a}
.hljs-emphasis{font-style:italic}
.hljs-strong{font-weight:700}
`;

// GitHub Dark theme colors (based on highlight.js github-dark.css)
const githubDarkStyles = `
.hljs{display:block;overflow-x:auto;padding:.5em;color:#c9d1d9;background:#0d1117}
.hljs-comment,.hljs-quote{color:#8b949e;font-style:italic}
.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#ff7b72;font-weight:700}
.hljs-number,.hljs-literal,.hljs-variable,.hljs-template-variable,.hljs-tag .hljs-attr{color:#79c0ff}
.hljs-string,.hljs-doctag{color:#a5d6ff}
.hljs-title,.hljs-section,.hljs-selector-id{color:#d2a8ff;font-weight:700}
.hljs-subst{font-weight:400}
.hljs-type,.hljs-class .hljs-title{color:#ffa657;font-weight:700}
.hljs-tag,.hljs-name,.hljs-attribute{color:#7ee787;font-weight:400}
.hljs-regexp,.hljs-link{color:#a5d6ff}
.hljs-symbol,.hljs-bullet{color:#f0883e}
.hljs-built_in,.hljs-builtin-name{color:#79c0ff}
.hljs-meta{color:#8b949e;font-weight:700}
.hljs-deletion{background:#ffdcd7;color:#ffdcd7}
.hljs-addition{background:#aff5b4;color:#aff5b4}
.hljs-emphasis{font-style:italic}
.hljs-strong{font-weight:700}
`;

// Inject highlight.js styles into document head
function injectHighlightStyles() {
  if (typeof document === 'undefined') return;

  let styleEl = document.getElementById('html-previewer-hljs-styles');
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'html-previewer-hljs-styles';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = isDark.value ? githubDarkStyles : githubLightStyles;
}

// Register HTML language
hljs.registerLanguage('html', html)

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  minHeight: {
    type: Number,
    default: 70
  },
  autoResize: {
    type: Boolean,
    default: true
  },
  editable: {
    type: Boolean,
    default: true
  },
  codeCollapsed: {
    type: Boolean,
    default: false
  }
});

const iframeRef = ref(null);
const iframeHeight = ref(props.minHeight);
const code = ref(props.code);
const uid = `html-previewer-${Math.random().toString(36).substr(2, 9)}`;
const codeExpanded = ref(false);
const inspectMode = ref(false);
const highlightedCode = hljs.highlight(props.code || '', { language: 'html' }).value;

const 
iframeContent = computed(() => {
  return `
<!DOCTYPE html>
<html lang="en" data-theme="${isDark.value ? 'dark' : 'light'}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light dark">
  <style id="semanticus-styles">${semanticusStyles}</style>
  <style>
    body {
      margin: 0;
      padding: 46px 24px;
    }

    body.html-previewer-inspect-active,
    body.html-previewer-inspect-active * {
      cursor: crosshair !important;
    }

    .box-model .content {
      background: rgb(109 238 245 / 50%);
    }

    .box-model .margin div {
      background: rgb(251 176 91 / 65%);
    }

    .box-model .padding div {
      background: rgb(139 234 127 / 65%);
    }

    .box-model .border div {
      background-color: rgb(234 228 105 / 80%);
    }
  </style>
</head>
<body>
  ${code.value}

  <script>
    ${boxModelInspectorScript}

    let boxInspector = null;
    let inspectActive = true;

    if (window.BoxModelInspector && !window.BoxModelInspector.__htmlPreviewerPatched) {
      const originalRefresh = window.BoxModelInspector.prototype.refresh;
      window.BoxModelInspector.prototype.refresh = function refreshWithViewportOffsets() {
        if (!this.boxModel.hidden) {
          const el = this.el;
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const dimensions = {
            offset: {
              left: rect.left + window.scrollX,
              top: rect.top + window.scrollY
            },
            width: el.clientWidth,
            height: el.clientHeight,
            outerHeight: rect.height,
            outerWidth: rect.width
          };
          this._elDimensions = dimensions;
          this.boxModel.wrapper.style.display = 'block';
          this.boxModel.wrapper.style.left = dimensions.offset.left + 'px';
          this.boxModel.wrapper.style.top = dimensions.offset.top + 'px';
          this.boxModel.wrapper.style.height = dimensions.outerHeight + 'px';
          this.boxModel.wrapper.style.width = dimensions.outerWidth + 'px';
          this._calculatePadding();
          this._calculateMargin();
          return;
        }
        return originalRefresh.call(this);
      };
      window.BoxModelInspector.__htmlPreviewerPatched = true;
    }

    function setInspectMode(active) {
      inspectActive = active;
      document.body.classList.toggle('html-previewer-inspect-active', inspectActive);
      if (!boxInspector && window.BoxModelInspector) {
        boxInspector = new window.BoxModelInspector({
          className: 'box-model',
          appendTo: document.body
        });
        boxInspector.hide();
      }
      if (!boxInspector) return;
      if (!inspectActive) {
        boxInspector.hide();
        return;
      }
      boxInspector.show();
      boxInspector.refresh();
    }

    // Send height updates to parent for auto-resize
    function sendHeight() {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({ type: 'html-previewer-resize', id: '${uid}', height: height }, '*');
    }

    // Send height at multiple intervals to ensure parent receives it
    // This handles both SSR hydration timing and dynamic content loading
    function sendHeightMultipleTimes() {
      sendHeight();
      setTimeout(sendHeight, 100);
      setTimeout(sendHeight, 500);
      setTimeout(sendHeight, 1000);
    }

    // Send height on load and resize
    window.addEventListener('load', sendHeightMultipleTimes);
    window.addEventListener('resize', sendHeight);

    // Watch for DOM changes that might affect height
    const observer = new MutationObserver(() => {
      // Debounce height updates to avoid excessive messages
      if (window._heightTimeout) clearTimeout(window._heightTimeout);
      window._heightTimeout = setTimeout(sendHeight, 50);
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    // Handle messages from parent (e.g., height request)
    window.addEventListener('message', function(event) {
      if (event.data && event.data.type === 'html-previewer-toggle-inspector' && event.data.id === '${uid}') {
        setInspectMode(Boolean(event.data.active));
      }
      if (event.data && event.data.type === 'html-previewer-request-height' && event.data.id === '${uid}') {
        sendHeight();
      }
    });

    // Handle anchor links for :target pseudo-class (CSS-only modals, tabs, etc.)
    // This prevents iframe reloads when clicking hash links
    document.addEventListener('click', function(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const hash = anchor.getAttribute('href');
        if (hash === '#') {
          // Clear the hash (for close buttons)
          history.pushState(null, null, ' ');
        } else {
          // Set the hash (for opening modals, tabs, etc.)
          location.hash = hash;
        }
        // Trigger :target styles by dispatching a hashchange event
        window.dispatchEvent(new HashChangeEvent('hashchange'));
        // Send height update after hash change (modals may affect height)
        setTimeout(sendHeight, 100);
      }
    });

    document.addEventListener('mousemove', function(e) {
      if (!inspectActive || !boxInspector) return;
      const inspectTarget = e.target?.nodeType === 1 ? e.target : null;
      if (!inspectTarget || inspectTarget.closest('.box-model')) return;
      boxInspector.setElement(inspectTarget);
    });

    window.addEventListener('scroll', function() {
      if (inspectActive && boxInspector) {
        boxInspector.refresh();
      }
    });

    window.addEventListener('resize', function() {
      if (inspectActive && boxInspector) {
        boxInspector.refresh();
      }
    });

    setInspectMode(true);

    // Send initial height immediately and at intervals
    sendHeightMultipleTimes();
  <\/script>
</body>
</html>
`;
});

function updateContent(event) {
  code.value = event.target.innerText;
}

function postToIframe(data) {
  if (iframeRef.value?.contentWindow) {
    iframeRef.value.contentWindow.postMessage({ ...data, id: uid }, '*');
  }
}

function toggleInspector() {
  inspectMode.value = !inspectMode.value;
  postToIframe({ type: 'html-previewer-toggle-inspector', active: inspectMode.value });
}

function handleIframeLoad() {
  postToIframe({ type: 'html-previewer-toggle-inspector', active: inspectMode.value });
  postToIframe({ type: 'html-previewer-request-height' });
}

// Handle messages from the iframe (for auto-resize)
function handleMessage(event) {
  if (event.data && event.data.type === 'html-previewer-resize' && event.data.id === uid && props.autoResize) {
    iframeHeight.value = Math.max(event.data.height, props.minHeight);
  }
}

onMounted(() => {
  window.addEventListener('message', handleMessage);
  // Inject highlight.js styles
  injectHighlightStyles();
  // Request initial height after a short delay to ensure iframe is ready
  setTimeout(() => {
    postToIframe({ type: 'html-previewer-request-height' });
  }, 100);
});

onUnmounted(() => window.removeEventListener('message', handleMessage));

// Watch for theme changes and update highlight.js styles
watch(isDark, () => {
  injectHighlightStyles();
});
</script>

<template>
  <div class="html-preview-container">
    <div class="preview-iframe-container language-html">
      <!-- Only render iframe on client side to ensure proper postMessage communication -->
      <ClientOnly>
        <iframe
          ref="iframeRef"
          title="Semanticus CSS Examples Preview"
          class="preview-iframe"
          sandbox="allow-scripts allow-same-origin"
          :style="{ height: iframeHeight + 'px' }"
          :srcdoc="iframeContent"
          @load="handleIframeLoad"
        ></iframe>
        <template #fallback>
          <!-- SSR fallback: show a placeholder with minHeight -->
          <div class="preview-iframe preview-iframe-fallback" :style="{ height: props.minHeight + 'px' }"></div>
        </template>
      </ClientOnly>

      <span class="lang">live preview</span>
      <button
        type="button"
        class="inspect-toggle-btn"
        :class="{ active: inspectMode }"
        :aria-pressed="inspectMode"
        @click="toggleInspector"
      >
        {{ inspectMode ? 'inspecting' : 'inspect' }}
      </button>
    </div>

    <!-- Collapsed overlay — centered toggle button -->
    <div v-if="codeCollapsed && !codeExpanded" class="code-collapsed-overlay" @click="codeExpanded = true">
      <div class="expand-code-btn">
        <svg class="icon-eye" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        <span>See code</span>
      </div>
    </div>

    <!-- Code section (hidden when collapsed) -->
    <div v-show="!codeCollapsed || codeExpanded" class="language-html">
      <button v-if="codeCollapsed" class="collapse-code-btn" @click.stop="codeExpanded = false">
        <svg class="icon-eye-off" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
        <span>Hide code</span>
      </button>
      <button title="Copy Code" class="copy"></button>
      <span class="lang">{{ editable ? 'editable html' : 'html' }}</span>
      <pre><code class="language-html" v-html="highlightedCode" :contenteditable="editable" @input="updateContent"></code></pre>
    </div>
  </div>
</template>

<style scoped>
.html-preview-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.preview-iframe-container {
  border-bottom: 1px solid var(--vp-c-divider);

  .lang {
    top: unset !important;
    bottom: 2px;
  }
}

.preview-iframe {
  width: 100%;
  min-height: 70px;
  border: none;
}

.preview-iframe-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-iframe-fallback::after {
  content: 'Loading preview...';
  color: var(--vp-c-text-2, #6b7280);
  font-size: 0.875rem;
}

.inspect-toggle-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 1;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  padding: 0.125rem 0.5rem;
  background: var(--vp-code-block-bg);
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  line-height: 1.25;
  cursor: pointer;
}

.inspect-toggle-btn.active {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}

.language-html {
  margin: 0 !important;
  border-radius: 0 !important;
  outline: none;
  cursor: text;
}

/* Collapsed code overlay — full-width clickable area */
.code-collapsed-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem;
  cursor: pointer;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  transition: background 0.2s;
}

.code-collapsed-overlay:hover {
  background: var(--vp-c-bg-mute, var(--vp-c-bg-soft));
}

.expand-code-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  transition: color 0.2s, border-color 0.2s;
}

.code-collapsed-overlay:hover .expand-code-btn {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-text-2);
}

/* Collapse button shown at top of code section when expanded from collapsed */
.collapse-code-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  font-family: inherit;
  transition: background 0.2s, color 0.2s;
}

.collapse-code-btn:hover {
  background: var(--vp-c-bg-mute, var(--vp-c-bg-soft));
  color: var(--vp-c-text-1);
}
</style>
