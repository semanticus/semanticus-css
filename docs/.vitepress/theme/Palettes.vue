<script setup>
import { ref } from 'vue'
import PalettePicker from './PalettePicker.vue'
import PaletteBuilder from './PaletteBuilder.vue'

const activeTab = ref('picker')
const pickerRef = ref(null)
const builderRef = ref(null)
const previewTheme = ref('light')

function setTab(tab) {
  activeTab.value = tab
}

function togglePreviewTheme() {
  previewTheme.value = previewTheme.value === 'light' ? 'dark' : 'light'
  pickerRef.value?.togglePreviewTheme()
  builderRef.value?.togglePreviewTheme()
}
</script>

<template>
  <div class="palettes">
    <!-- Toolbar -->
    <div class="palettes-toolbar">
      <div class="toolbar-left">
        <span class="toolbar-title">Palettes</span>
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
        <button
          class="toolbar-btn theme-toggle"
          @click="togglePreviewTheme()"
          :title="`Preview: ${previewTheme} mode`"
        >
          <template v-if="previewTheme === 'light'">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            Light
          </template>
          <template v-else>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            Dark
          </template>
        </button>
        <template v-if="activeTab === 'picker'">
          <button class="toolbar-btn install-btn" @click="pickerRef?.openInstallModal()" title="How to install">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            How to install
          </button>
        </template>
        <template v-else>
          <button
            v-if="builderRef?.changedCount"
            class="change-badge"
            @click="builderRef?.resetAll()"
            title="Reset all changes"
          >
            {{ builderRef.changedCount }} changed
            <span class="change-badge-close">✕</span>
          </button>
          <button class="toolbar-btn export-btn" @click="builderRef?.exportCSS()" title="Export palette CSS">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export
          </button>
        </template>
      </div>
    </div>

    <div class="palettes-body">
      <PalettePicker v-show="activeTab === 'picker'" ref="pickerRef" />
      <PaletteBuilder v-show="activeTab === 'builder'" ref="builderRef" />
    </div>
  </div>
</template>

<style scoped>
.palettes {
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
.palettes-toolbar {
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

.install-btn {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
}

.install-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
  color: #fff;
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

.theme-toggle {
  background: var(--vp-c-bg);
}

.theme-toggle:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
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
.palettes-body {
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.palettes-body > * {
  flex: 1;
  min-height: 0;
}

@media (max-width: 768px) {
  .palettes {
    height: auto;
    min-height: 600px;
  }
}
</style>
