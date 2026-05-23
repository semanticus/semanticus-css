<script setup>
import { ref, watch, computed } from 'vue'
import { useData } from 'vitepress'
import SizesPicker from './SizesPicker.vue'
import SizesBuilder from './SizesBuilder.vue'

const { isDark } = useData()

const activeTab = ref('picker')
const pickerRef = ref(null)
const builderRef = ref(null)
const previewTheme = computed(() => isDark.value ? 'dark' : 'light')

// Sync theme with children
watch(isDark, (val) => {
  const newTheme = val ? 'dark' : 'light'
  if (pickerRef.value) pickerRef.value.previewTheme = newTheme
  if (builderRef.value) builderRef.value.previewTheme = newTheme
})

function setTab(tab) {
  activeTab.value = tab
}
</script>

<template>
  <div class="sizes">
    <!-- Toolbar -->
    <div class="sizes-toolbar">
      <div class="toolbar-left">
        <span class="toolbar-title">Sizes</span>
        <div class="tab-switch">
          <button
            :class="['tab-btn', { active: activeTab === 'picker' }]"
            @click="setTab('picker')"
          >
            Picker
          </button>
          <button
            :class="['tab-btn', { active: activeTab === 'builder' }]"
            @click="setTab('builder')"
          >
            Builder
          </button>
        </div>
      </div>

      <div class="toolbar-right">
        <template v-if="activeTab === 'picker'">
          <button class="toolbar-btn install-btn" @click="pickerRef?.openInstallModal()" title="How to install">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            How to install
          </button>
        </template>
        <template v-if="activeTab === 'builder'">
          <button
            :class="['toolbar-btn compare-btn', { active: builderRef?.compareMode }]"
            @click="builderRef?.toggleCompare()"
            title="Toggle before/after comparison"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="5 12 12 19 12 19"/><polyline points="19 12 12 5 12 5"/></svg>
            Compare
          </button>
          <button
            v-if="builderRef?.changedCount"
            class="change-badge"
            @click="builderRef?.resetAll()"
            title="Reset all changes"
          >
            {{ builderRef.changedCount }} changed
            <span class="change-badge-close">✕</span>
          </button>
          <button class="toolbar-btn import-btn" @click="builderRef?.triggerImport()" title="Import CSS file">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            Import
          </button>
          <button class="toolbar-btn export-btn" @click="builderRef?.exportCSS()" title="Export size CSS">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export
          </button>
        </template>
      </div>
    </div>

    <div class="sizes-body">
      <SizesPicker v-show="activeTab === 'picker'" ref="pickerRef" />
      <SizesBuilder v-show="activeTab === 'builder'" ref="builderRef" />
    </div>
  </div>
</template>

<style scoped>
.sizes {
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg);
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
}

/* ── Toolbar ── */
.sizes-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  flex-shrink: 0;
}

.toolbar-left,
.toolbar-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.toolbar-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.tab-switch {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: var(--vp-c-bg);
  padding: 0.25rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
}

.tab-btn {
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}

.tab-btn:hover {
  color: var(--vp-c-text-1);
}

.tab-btn.active {
  background: var(--vp-c-brand-1);
  color: #fff;
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

.change-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.15s;
}

.change-badge:hover {
  background: var(--vp-c-danger-soft, rgba(229, 62, 62, 0.1));
  color: var(--vp-c-danger-1, #e53e3e);
}

.change-badge-close {
  font-size: 0.625rem;
  opacity: 0.7;
  transition: opacity 0.15s;
}

.change-badge:hover .change-badge-close {
  opacity: 1;
}

.install-btn {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
}

.install-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
  color: #fff;
}

.compare-btn.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.export-btn {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.export-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
  color: #fff;
}

/* ── Body ── */
.sizes-body {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.sizes-body > * {
  flex: 1;
  min-height: 0;
}

@media (max-width: 768px) {
  .sizes {
    height: auto;
    min-height: 600px;
  }
}
</style>
