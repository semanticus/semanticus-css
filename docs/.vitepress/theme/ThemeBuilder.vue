<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useData } from 'vitepress'
import rawIframeContent from './theme-builder-preview.html?raw';
import hljs from 'highlight.js/lib/core'
import html from 'highlight.js/lib/languages/xml'
import githubLight from 'highlight.js/styles/github.css?raw'
import githubDark from 'highlight.js/styles/github-dark.css?raw'

// isDark is a reactive Ref<boolean>
const { isDark, site } = useData();

const basePath = computed(() => site.value.base || '/');

const cssStyles = computed(() => {
  return isDark.value ? githubDark : githubLight;
});

// Register HTML language
hljs.registerLanguage('html', html)

const iframeContent = computed(() => {
  const theme = isDark.value ? 'dark' : 'light'
  return rawIframeContent
    .replaceAll('__SEMANTICUS_BASE__', basePath.value)
    .replace(/data-theme="">/, `data-theme="${theme}">`)
})

// ── Variable definitions ────────────────────────────────────────────────────
// Each variable: { name, label, desc, type, lightDefault, darkDefault?, scope, selectors? }
//   type: 'color' | 'text' | 'range'
//   scope: 'root' (layout) | 'theme' (light/dark specific)
//   selectors: CSS selectors of elements affected (for highlight feature)

// Icons for groups
const groupIcons = {
  'Typography': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>',
  'Borders & Effects': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>',
  'Spacing': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18"/><path d="M8 8v8"/><path d="M16 8v8"/></svg>',
  'Navigation': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></svg>',
  'Core Colors': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/></svg>',
  'Primary Colors': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  'Secondary Colors': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/></svg>',
  'Contrast Colors': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M2 12h20"/></svg>',
  'Headings': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M17 12h3"/><path d="M17 18V6"/></svg>',
  'Shadows': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M4 18l4-4"/><path d="M20 18l-4-4"/></svg>',
  'Mark & Text': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>',
  'Forms': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>',
  'Buttons': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="8" width="16" height="8" rx="2"/><path d="M8 12h.01"/></svg>',
  'Switch': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="8" width="20" height="8" rx="4"/><circle cx="8" cy="12" r="3"/></svg>',
  'Tables': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M9 5v14"/></svg>',
  'Code': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  'Cards': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16"/></svg>',
  'Accordion': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 8h16"/><path d="M4 16h16"/><path d="M8 12l4-4 4 4"/></svg>',
  'Dropdown': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="6" width="16" height="14" rx="2"/><path d="M8 11l4 4 4-4"/></svg>',
  'Progress': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="10" width="20" height="4" rx="2"/><path d="M4 12h8"/></svg>',
  'Tooltip': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v8"/><path d="M12 18v4"/><path d="M4 10h16"/><path d="M8 14l4 4 4-4"/></svg>',
  'Modal': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6"/><path d="M9 13h6"/></svg>',
  'Blockquote': '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M3 12h12"/><path d="M3 18h9"/></svg>',
}

const variableGroups = [
  {
    label: 'Typography',
    vars: [
      { name: '--font-family', label: 'Font Family', desc: 'Base font family for body text. Applied to the entire page.', type: 'text', lightDefault: 'system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, Helvetica, Arial, "Helvetica Neue", sans-serif', scope: 'root', selectors: 'body, p, li, label, h2, h3, h4, h5, h6, button, input, select, th, td, summary, blockquote, small' },
      { name: '--font-family-monospace', label: 'Monospace Font', desc: 'Font family for code blocks, kbd, and monospaced text.', type: 'text', lightDefault: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace', scope: 'root', selectors: 'code, pre, kbd, samp' },
      { name: '--font-size', label: 'Base Font Size', desc: 'Root font size as a percentage. Controls the global text scale.', type: 'text', lightDefault: '97%', scope: 'root', selectors: 'body, h2, h3, h4, h5, h6' },
      { name: '--line-height', label: 'Line Height', desc: 'Default line height for body text. Unitless multiplier.', type: 'text', lightDefault: '1.5', scope: 'root', selectors: 'body, p, h2, h3, h4, h5, h6, input, select, button' },
      { name: '--font-weight', label: 'Font Weight', desc: 'Default font weight for body text (400 = normal, 700 = bold).', type: 'text', lightDefault: '400', scope: 'root', selectors: 'body, p, h2, h3, h4, h5, h6, label, input, select, button, th, td, code, kbd' },
      { name: '--text-underline-offset', label: 'Underline Offset', desc: 'Distance between text baseline and underline decoration.', type: 'text', lightDefault: '0.1rem', scope: 'root', selectors: 'a:not([role=button])' },
    ]
  },
  {
    label: 'Borders & Effects',
    vars: [
      { name: '--border-radius', label: 'Border Radius', desc: 'Global border radius for buttons, inputs, cards, etc.', type: 'text', lightDefault: '0.25rem', scope: 'root', selectors: 'button, input:not([type=checkbox]):not([type=radio]):not([type=range]), select, article, details, code, kbd, pre, progress' },
      { name: '--border-width', label: 'Border Width', desc: 'Base border width used by forms, tables, and other bordered elements.', type: 'text', lightDefault: '0.0625rem', scope: 'root', selectors: 'input:not([type=range]):not([type=file]), select, button, th, td' },
      { name: '--outline-width', label: 'Outline Width', desc: 'Width of the focus ring shown around focused interactive elements.', type: 'text', lightDefault: '0.125rem', scope: 'root', selectors: 'button, input, select, a:not([role=button])' },
      { name: '--transition', label: 'Transition', desc: 'Default CSS transition timing for interactive state changes (hover, focus).', type: 'text', lightDefault: '0.2s ease-in-out', scope: 'root', selectors: 'button, a, input, select, details summary, progress' },
    ]
  },
  {
    label: 'Spacing',
    vars: [
      { name: '--spacing', label: 'Base Spacing', desc: 'Shared base unit used for padding, margins, and gaps throughout the layout.', type: 'text', lightDefault: '0.75rem', scope: 'root', selectors: '.container, section, article, fieldset, th, td, blockquote, pre, details' },
      { name: '--typography-spacing-vertical', label: 'Typography Spacing', desc: 'Vertical margin below typographic elements (paragraphs, lists, etc.).', type: 'text', lightDefault: '1rem', scope: 'root', selectors: 'h2, h3, h4, h5, h6, p, ul, ol, blockquote' },
      { name: '--block-spacing-vertical', label: 'Block Spacing (V)', desc: 'Vertical padding inside block-level components (cards, modals).', type: 'text', lightDefault: '1.2rem', scope: 'root', selectors: 'section, article, dialog' },
      { name: '--block-spacing-horizontal', label: 'Block Spacing (H)', desc: 'Horizontal padding inside block-level components.', type: 'text', lightDefault: '1.2rem', scope: 'root', selectors: 'article, dialog' },
      { name: '--grid-column-gap', label: 'Grid Column Gap', desc: 'Column gap in CSS Grid layouts.', type: 'text', lightDefault: '0.75rem', scope: 'root', selectors: '.grid' },
      { name: '--grid-row-gap', label: 'Grid Row Gap', desc: 'Row gap in CSS Grid layouts.', type: 'text', lightDefault: '0.75rem', scope: 'root', selectors: '.grid' },
      { name: '--form-element-spacing-vertical', label: 'Input Padding (V)', desc: 'Vertical padding inside form inputs, selects, and buttons.', type: 'text', lightDefault: '0.5rem', scope: 'root', selectors: 'input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]), select, button' },
      { name: '--form-element-spacing-horizontal', label: 'Input Padding (H)', desc: 'Horizontal padding inside form inputs, selects, and buttons.', type: 'text', lightDefault: '0.7rem', scope: 'root', selectors: 'input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]), select, button' },
    ]
  },
  {
    label: 'Navigation',
    vars: [
      { name: '--nav-link-spacing-vertical', label: 'Nav Link Spacing (V)', desc: 'Vertical padding inside nav links.', type: 'text', lightDefault: '0.5rem', scope: 'root', selectors: 'nav li a' },
      { name: '--nav-link-spacing-horizontal', label: 'Nav Link Spacing (H)', desc: 'Horizontal padding inside nav links.', type: 'text', lightDefault: '0.5rem', scope: 'root', selectors: 'nav li a' },
    ]
  },
  {
    label: 'Core Colors',
    vars: [
      { name: '--color-background', label: 'Background', desc: 'Main page background color.', type: 'color', lightDefault: '#ffffff', darkDefault: '#13171f', scope: 'theme', selectors: 'body, th, td' },
      { name: '--color-text', label: 'Text Color', desc: 'Default body text color.', type: 'color', lightDefault: '#373c44', darkDefault: '#c2c7d0', scope: 'theme', selectors: 'body, p, li, label, th, td, blockquote' },
      { name: '--color-text-muted', label: 'Muted Text', desc: 'Subdued text for captions, hints, and secondary information.', type: 'color', lightDefault: '#646b79', darkDefault: '#7b8495', scope: 'theme', selectors: 'small, figcaption' },
      { name: '--color-border-muted', label: 'Muted Border', desc: 'Subtle border color for horizontal rules.', type: 'color', lightDefault: '#e7eaf0', darkDefault: '#202632', scope: 'theme', selectors: 'hr' },
    ]
  },
  {
    label: 'Primary Colors',
    vars: [
      { name: '--color-primary-bg', label: 'Primary BG', desc: 'Background fill for primary buttons, checked checkboxes, and checked radios.', type: 'color', lightDefault: '#0172ad', darkDefault: '#0172ad', scope: 'theme', selectors: 'button:not(.secondary):not(.contrast):not(.ghost), [type=submit], [type=checkbox]:not([role=switch]), [type=radio]' },
      { name: '--color-primary-border', label: 'Primary Border', desc: 'Border color for primary elements.', type: 'color', lightDefault: '#0172ad', darkDefault: '#0172ad', scope: 'theme', selectors: 'button:not(.secondary):not(.contrast):not(.ghost), [type=submit]' },
      { name: '--color-primary-underline', label: 'Primary Underline', desc: 'Underline color for primary links.', type: 'text', lightDefault: 'rgba(1, 114, 173, 0.5)', darkDefault: 'rgba(1, 170, 255, 0.5)', scope: 'theme', selectors: 'a:not([role=button]):not(.secondary):not(.contrast)' },
      { name: '--color-primary-hover', label: 'Primary Hover', desc: 'Text/border color on hover for primary links and ghost (outline) primary buttons.', type: 'color', lightDefault: '#015887', darkDefault: '#79c0ff', scope: 'theme', selectors: 'a:not([role=button]):not(.secondary):not(.contrast), button.ghost:not(.secondary):not(.contrast)' },
      { name: '--color-primary-hover-bg', label: 'Primary Hover BG', desc: 'Background on hover for primary filled buttons.', type: 'color', lightDefault: '#02659a', darkDefault: '#017fc0', scope: 'theme', selectors: 'button:not(.secondary):not(.contrast):not(.ghost), [type=submit]' },
      { name: '--color-primary-hover-border', label: 'Primary Hover Border', desc: 'Border color on hover for primary buttons.', type: 'color', lightDefault: '#02659a', darkDefault: '#017fc0', scope: 'theme', selectors: 'button:not(.secondary):not(.contrast):not(.ghost), [type=submit]' },
      { name: '--color-primary-hover-underline', label: 'Primary Hover Underline', desc: 'Underline color on hover for primary links.', type: 'text', lightDefault: '#015887', darkDefault: '#79c0ff', scope: 'theme', selectors: 'a:not([role=button]):not(.secondary):not(.contrast)' },
      { name: '--color-primary-focus', label: 'Primary Focus', desc: 'Semi-transparent focus ring color for primary buttons, links, and accordion summaries.', type: 'color', lightDefault: 'rgba(2, 154, 232, 0.5)', darkDefault: 'rgba(1, 170, 255, 0.375)', scope: 'theme', selectors: 'button:not(.secondary):not(.contrast), a:not([role=button]):not(.secondary):not(.contrast), details summary' },
      { name: '--color-primary-inverse', label: 'Primary Inverse', desc: 'Text color on top of primary background (e.g., white text on colored button).', type: 'color', lightDefault: '#ffffff', darkDefault: '#ffffff', scope: 'theme', selectors: 'button:not(.secondary):not(.contrast):not(.ghost), [type=submit], [type=radio]' },
    ]
  },
  {
    label: 'Secondary Colors',
    vars: [
      { name: '--color-secondary-bg', label: 'Secondary BG', desc: 'Background fill for secondary buttons and file inputs.', type: 'color', lightDefault: '#525f7a', darkDefault: '#525f7a', scope: 'theme', selectors: 'button.secondary:not(.ghost), [type=file]' },
      { name: '--color-secondary-border', label: 'Secondary Border', desc: 'Border color for secondary elements.', type: 'color', lightDefault: '#525f7a', darkDefault: '#525f7a', scope: 'theme', selectors: 'button.secondary:not(.ghost), [type=file]' },
      { name: '--color-secondary-underline', label: 'Secondary Underline', desc: 'Underline color for secondary links.', type: 'text', lightDefault: 'rgba(93, 107, 137, 0.5)', darkDefault: 'rgba(150, 158, 175, 0.5)', scope: 'theme', selectors: 'a.secondary' },
      { name: '--color-secondary-hover', label: 'Secondary Hover', desc: 'Text/border color on hover for secondary links and ghost (outline) secondary buttons.', type: 'color', lightDefault: '#48536b', darkDefault: '#b3b9c5', scope: 'theme', selectors: 'a.secondary, button.ghost.secondary' },
      { name: '--color-secondary-hover-bg', label: 'Secondary Hover BG', desc: 'Background on hover for secondary filled buttons and file inputs.', type: 'color', lightDefault: '#48536b', darkDefault: '#5d6b89', scope: 'theme', selectors: 'button.secondary:not(.ghost), [type=file]' },
      { name: '--color-secondary-hover-border', label: 'Secondary Hover Border', desc: 'Border color on hover for secondary buttons.', type: 'color', lightDefault: '#48536b', darkDefault: '#5d6b89', scope: 'theme', selectors: 'button.secondary:not(.ghost), [type=file]' },
      { name: '--color-secondary-hover-underline', label: 'Secondary Hover Underline', desc: 'Underline color on hover for secondary links.', type: 'text', lightDefault: '#48536b', darkDefault: '#b3b9c5', scope: 'theme', selectors: 'a.secondary' },
      { name: '--color-secondary-focus', label: 'Secondary Focus', desc: 'Focus ring color for secondary buttons and file inputs.', type: 'color', lightDefault: 'rgba(93, 107, 137, 0.25)', darkDefault: 'rgba(144, 158, 190, 0.25)', scope: 'theme', selectors: 'button.secondary, [type=file]' },
      { name: '--color-secondary-inverse', label: 'Secondary Inverse', desc: 'Text on top of secondary background.', type: 'color', lightDefault: '#ffffff', darkDefault: '#ffffff', scope: 'theme', selectors: 'button.secondary:not(.ghost)' },
    ]
  },
  {
    label: 'Contrast Colors',
    vars: [
      { name: '--color-contrast-bg', label: 'Contrast BG', desc: 'Background fill for contrast buttons.', type: 'color', lightDefault: '#181c25', darkDefault: '#eff1f4', scope: 'theme', selectors: 'button.contrast:not(.ghost)' },
      { name: '--color-contrast-border', label: 'Contrast Border', desc: 'Border color for contrast elements.', type: 'color', lightDefault: '#181c25', darkDefault: '#eff1f4', scope: 'theme', selectors: 'button.contrast:not(.ghost)' },
      { name: '--color-contrast-underline', label: 'Contrast Underline', desc: 'Underline color for contrast links.', type: 'text', lightDefault: 'rgba(24, 28, 37, 0.5)', darkDefault: 'rgba(248, 249, 250, 0.5)', scope: 'theme', selectors: 'a.contrast' },
      { name: '--color-contrast-hover', label: 'Contrast Hover', desc: 'Text/border color on hover for contrast links and ghost (outline) contrast buttons.', type: 'color', lightDefault: '#000000', darkDefault: '#ffffff', scope: 'theme', selectors: 'a.contrast, button.ghost.contrast' },
      { name: '--color-contrast-hover-bg', label: 'Contrast Hover BG', desc: 'Background on hover for contrast filled buttons.', type: 'color', lightDefault: '#000000', darkDefault: '#ffffff', scope: 'theme', selectors: 'button.contrast:not(.ghost)' },
      { name: '--color-contrast-hover-border', label: 'Contrast Hover Border', desc: 'Border color on hover for contrast buttons.', type: 'color', lightDefault: '#000000', darkDefault: '#ffffff', scope: 'theme', selectors: 'button.contrast:not(.ghost)' },
      { name: '--color-contrast-hover-underline', label: 'Contrast Hover Underline', desc: 'Underline color on hover for contrast links.', type: 'text', lightDefault: '#000000', darkDefault: '#ffffff', scope: 'theme', selectors: 'a.contrast' },
      { name: '--color-contrast-focus', label: 'Contrast Focus', desc: 'Focus ring color for contrast buttons.', type: 'color', lightDefault: 'rgba(93, 107, 137, 0.25)', darkDefault: 'rgba(207, 213, 226, 0.25)', scope: 'theme', selectors: 'button.contrast' },
      { name: '--color-contrast-inverse', label: 'Contrast Inverse', desc: 'Text on top of contrast background.', type: 'color', lightDefault: '#ffffff', darkDefault: '#000000', scope: 'theme', selectors: 'button.contrast:not(.ghost)' },
    ]
  },
  {
    label: 'Headings',
    vars: [
      { name: '--color-heading-base', label: 'Heading Base Color', desc: 'Base color for all headings. Lighter/darker variants are calculated via color-mix.', type: 'color', lightDefault: '#2d3138', darkDefault: '#f0f1f3', scope: 'theme', selectors: 'h1, h2, h3, h4, h5, h6' },
      { name: '--fs-1', label: 'H1 Font Size', desc: 'Font size for <h1> headings.', type: 'text', lightDefault: '2rem', scope: 'root', selectors: 'h1' },
      { name: '--fs-2', label: 'H2 Font Size', desc: 'Font size for <h2> headings.', type: 'text', lightDefault: '1.75rem', scope: 'root', selectors: 'h2' },
      { name: '--fs-3', label: 'H3 Font Size', desc: 'Font size for <h3> headings.', type: 'text', lightDefault: '1.5rem', scope: 'root', selectors: 'h3' },
      { name: '--fs-4', label: 'H4 Font Size', desc: 'Font size for <h4> headings.', type: 'text', lightDefault: '1.25rem', scope: 'root', selectors: 'h4' },
      { name: '--fs-5', label: 'H5 Font Size', desc: 'Font size for <h5> headings.', type: 'text', lightDefault: '1.125rem', scope: 'root', selectors: 'h5' },
      { name: '--fs-6', label: 'H6 Font Size', desc: 'Font size for <h6> headings.', type: 'text', lightDefault: '1rem', scope: 'root', selectors: 'h6' },
    ]
  },
  {
    label: 'Shadows',
    vars: [
      { name: '--shadow-sm', label: 'Shadow Small', desc: 'Subtle lift shadow for buttons and small UI elements.', type: 'text', lightDefault: '0 0.0625rem 0.125rem rgba(129, 145, 181, 0.1)', darkDefault: '0 0.0625rem 0.125rem rgba(7, 8.5, 12, 0.1)', scope: 'theme', selectors: 'button' },
      { name: '--shadow-md', label: 'Shadow Medium', desc: 'Medium elevation shadow for dropdowns.', type: 'text', lightDefault: '0.0625rem 0.125rem 0.5rem rgba(129, 145, 181, 0.15)', darkDefault: '0.0625rem 0.125rem 0.5rem rgba(7, 8.5, 12, 0.15)', scope: 'theme', selectors: 'details:has(> summary[aria-haspopup="menu"])' },
    ]
  },
  {
    label: 'Mark & Text',
    vars: [
      { name: '--color-mark-bg', label: 'Mark Background', desc: 'Background highlight color for <mark> elements.', type: 'color', lightDefault: '#fde7c0', darkDefault: '#014063', scope: 'theme', selectors: 'mark' },
      { name: '--color-mark-text', label: 'Mark Text', desc: 'Text color inside <mark> elements.', type: 'color', lightDefault: '#0f1114', darkDefault: '#ffffff', scope: 'theme', selectors: 'mark' },
    ]
  },
  {
    label: 'Forms',
    vars: [
      { name: '--form-bg', label: 'Input Background', desc: 'Default background for form inputs and selects.', type: 'color', lightDefault: '#fbfcfc', darkDefault: '#1c212c', scope: 'theme', selectors: 'input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]), select' },
      { name: '--form-border-color', label: 'Input Border', desc: 'Border color for form inputs in their resting state.', type: 'color', lightDefault: '#cfd5e2', darkDefault: '#2a3140', scope: 'theme', selectors: 'input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]), select' },
      { name: '--form-text-color', label: 'Input Text', desc: 'Text color inside form fields.', type: 'color', lightDefault: '#23262c', darkDefault: '#e0e3e7', scope: 'theme', selectors: 'input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]), select' },
      { name: '--form-active-bg', label: 'Input Focus BG', desc: 'Background color when a form field is focused.', type: 'color', lightDefault: '#ffffff', darkDefault: '#1a1f28', scope: 'theme', selectors: 'input:not([type=submit]):not([type=button]):not([type=reset]):not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]), select' },
      { name: '--form-disabled-opacity', label: 'Disabled Opacity', desc: 'Opacity applied to disabled form elements (0–1).', type: 'range', lightDefault: '0.5', darkDefault: '0.5', scope: 'theme', selectors: 'input:disabled, select:disabled, textarea:disabled' },
      { name: '--form-invalid-border', label: 'Invalid Border', desc: 'Border color for invalid form fields (idle state).', type: 'color', lightDefault: '#c52f21', darkDefault: '#f38f79', scope: 'theme', selectors: '[aria-invalid="true"]' },
      { name: '--form-valid-border', label: 'Valid Border', desc: 'Border color for valid form fields (idle state).', type: 'color', lightDefault: '#2b7a4c', darkDefault: '#6ed59d', scope: 'theme', selectors: '[aria-invalid="false"]' },
    ]
  },
  {
    label: 'Buttons',
    vars: [
      { name: '--button-shadow', label: 'Button Shadow', desc: 'Box shadow on buttons in their resting state.', type: 'text', lightDefault: '0 0 0 rgba(0, 0, 0, 0)', darkDefault: '0 0 0 rgba(0, 0, 0, 0)', scope: 'theme', selectors: 'button, [type=submit]' },
      { name: '--button-shadow-hover', label: 'Button Hover Shadow', desc: 'Box shadow on buttons when hovered.', type: 'text', lightDefault: '0 0 0 rgba(0, 0, 0, 0)', darkDefault: '0 0 0 rgba(0, 0, 0, 0)', scope: 'theme', selectors: 'button, [type=submit]' },
    ]
  },
  {
    label: 'Switch',
    vars: [
      { name: '--switch-bg', label: 'Track Background', desc: 'Background of the toggle switch track when unchecked.', type: 'color', lightDefault: '#bfc7d9', darkDefault: '#333c4e', scope: 'theme', selectors: '[type=checkbox][role=switch]' },
      { name: '--switch-thumb-color', label: 'Thumb Color', desc: 'Color of the toggle switch thumb (knob).', type: 'color', lightDefault: '#ffffff', darkDefault: '#ffffff', scope: 'theme', selectors: '[type=checkbox][role=switch]' },
    ]
  },
  {
    label: 'Tables',
    vars: [
      { name: '--table-border-color', label: 'Table Border', desc: 'Border color for table cells and dividers.', type: 'color', lightDefault: '#e7eaf0', darkDefault: '#202632', scope: 'theme', selectors: 'th, td' },
      { name: '--table-row-stripe-bg', label: 'Stripe Background', desc: 'Background for alternating (striped) table rows.', type: 'text', lightDefault: 'rgba(111, 120, 135, 0.0375)', darkDefault: 'rgba(111, 120, 135, 0.0375)', scope: 'theme', selectors: 'table.striped tbody tr:nth-child(odd)' },
    ]
  },
  {
    label: 'Code',
    vars: [
      { name: '--color-code-bg', label: 'Code Background', desc: 'Background for inline <code> and <pre> blocks.', type: 'color', lightDefault: '#f3f5f7', darkDefault: '#1a1f28', scope: 'theme', selectors: 'code, pre' },
      { name: '--color-code-text', label: 'Code Text', desc: 'Text color inside code blocks.', type: 'color', lightDefault: '#646b79', darkDefault: '#8891a4', scope: 'theme', selectors: 'code, pre' },
    ]
  },
  {
    label: 'Cards',
    vars: [
      { name: '--card-bg', label: 'Card Background', desc: 'Background color of card (article) components.', type: 'color', lightDefault: '#ffffff', darkDefault: '#181c25', scope: 'theme', selectors: 'article' },
      { name: '--card-border', label: 'Card Border', desc: 'Border color of card header/footer sections.', type: 'color', lightDefault: '#e7eaf0', darkDefault: '#181c25', scope: 'theme', selectors: 'article > header, article > footer' },
      { name: '--card-section-bg', label: 'Card Section BG', desc: 'Background for header/footer sections inside a card.', type: 'color', lightDefault: '#fbfcfc', darkDefault: '#1a1f28', scope: 'theme', selectors: 'article > header, article > footer' },
    ]
  },
  {
    label: 'Accordion',
    vars: [
      { name: '--accordion-border', label: 'Border', desc: 'Border color of accordion (details) components.', type: 'color', lightDefault: '#e7eaf0', darkDefault: '#202632', scope: 'theme', selectors: 'details' },
      { name: '--accordion-closed-summary', label: 'Closed Summary', desc: 'Text color of <summary> when accordion is closed.', type: 'color', lightDefault: '#373c44', darkDefault: '#c2c7d0', scope: 'theme', selectors: 'details:not([open]) summary' },
      { name: '--accordion-open-summary', label: 'Open Summary', desc: 'Text color of <summary> when accordion is open.', type: 'color', lightDefault: '#646b79', darkDefault: '#7b8495', scope: 'theme', selectors: 'details[open] summary' },
    ]
  },
  {
    label: 'Dropdown',
    vars: [
      { name: '--dropdown-bg', label: 'Dropdown BG', desc: 'Background of flyout dropdown menus.', type: 'color', lightDefault: '#ffffff', darkDefault: '#181c25', scope: 'theme', selectors: 'details:has(> summary[aria-haspopup="menu"])' },
      { name: '--dropdown-border', label: 'Dropdown Border', desc: 'Border color of dropdown menus.', type: 'color', lightDefault: '#eff1f4', darkDefault: '#202632', scope: 'theme', selectors: 'details:has(> summary[aria-haspopup="menu"])' },
      { name: '--dropdown-text', label: 'Dropdown Text', desc: 'Text color inside dropdown menus.', type: 'color', lightDefault: '#373c44', darkDefault: '#c2c7d0', scope: 'theme', selectors: 'details:has(> summary[aria-haspopup="menu"])' },
      { name: '--dropdown-hover-bg', label: 'Dropdown Hover', desc: 'Background of hovered dropdown items.', type: 'color', lightDefault: '#eff1f4', darkDefault: '#202632', scope: 'theme', selectors: 'details:has(> summary[aria-haspopup="menu"])' },
    ]
  },
  {
    label: 'Progress',
    vars: [
      { name: '--progress-bg', label: 'Track BG', desc: 'Background of the progress bar track (empty portion).', type: 'color', lightDefault: '#dfe3eb', darkDefault: '#202632', scope: 'theme', selectors: 'progress' },
      { name: '--progress-fill', label: 'Fill Color', desc: 'Color of the filled portion of progress bars.', type: 'color', lightDefault: '#0172ad', darkDefault: '#0172ad', scope: 'theme', selectors: 'progress' },
    ]
  },
  {
    label: 'Tooltip',
    vars: [
      { name: '--tooltip-bg', label: 'Tooltip BG', desc: 'Background of tooltips shown on [role-tooltip] elements.', type: 'color', lightDefault: '#181c25', darkDefault: '#eff1f4', scope: 'theme', selectors: '[role-tooltip]' },
      { name: '--tooltip-text', label: 'Tooltip Text', desc: 'Text color inside tooltips.', type: 'color', lightDefault: '#ffffff', darkDefault: '#000000', scope: 'theme', selectors: '[role-tooltip]' },
    ]
  },
  {
    label: 'Modal',
    vars: [
      { name: '--modal-overlay-bg', label: 'Overlay BG', desc: 'Semi-transparent backdrop behind open modals.', type: 'text', lightDefault: 'rgba(232, 234, 237, 0.75)', darkDefault: 'rgba(7.5, 8.5, 10, 0.75)', scope: 'theme', selectors: 'dialog' },
      { name: '--modal-overlay-backdrop-filter', label: 'Overlay Blur', desc: 'Blur filter applied behind the modal overlay.', type: 'text', lightDefault: 'blur(0.375rem)', scope: 'root', selectors: 'dialog' },
    ]
  },
  {
    label: 'Blockquote',
    vars: [
      { name: '--blockquote-border-color', label: 'Border Color', desc: 'Left border color of blockquote elements.', type: 'color', lightDefault: '#e7eaf0', darkDefault: '#202632', scope: 'theme', selectors: 'blockquote' },
      { name: '--blockquote-footer-color', label: 'Footer Color', desc: 'Text color for blockquote footer citations.', type: 'color', lightDefault: '#646b79', darkDefault: '#7b8495', scope: 'theme', selectors: 'blockquote footer' },
    ]
  },
]

// ── State ───────────────────────────────────────────────────────────────────

const currentTheme = computed(() => isDark.value ? 'dark' : 'light');
const customValues = reactive({})   // { 'light:--color-primary': '#ff0000', 'root:--spacing': '1.5rem' }
const selectedVar = ref(null)
const iframeRef = ref(null)
const searchQuery = ref('')
const expandedGroups = reactive({})
const activePopover = ref(null)
const compareMode = ref(false)
const showTour = ref(false)
const tourStep = ref(0)
const copiedFeedback = ref(null)
const currentPalette = ref('azure')
const currentSize = ref('default')
const sidebarWidth = ref(280)
const isResizing = ref(false)
const showExportModal = ref(false)
const exportMode = ref('inline') // 'file' or 'inline'

// Available color palettes
const palettes = [
  { name: 'azure', label: 'Azure', color: '#0172ad' },
  { name: 'amber', label: 'Amber', color: '#b4610b' },
  { name: 'blue', label: 'Blue', color: '#045fcb' },
  { name: 'cyan', label: 'Cyan', color: '#027c7b' },
  { name: 'fuchsia', label: 'Fuchsia', color: '#b810a8' },
  { name: 'green', label: 'Green', color: '#168b45' },
  { name: 'grey', label: 'Grey', color: '#595e66' },
  { name: 'indigo', label: 'Indigo', color: '#5149a8' },
  { name: 'jade', label: 'Jade', color: '#168b45' },
  { name: 'lime', label: 'Lime', color: '#5e7d12' },
  { name: 'orange', label: 'Orange', color: '#c1520f' },
  { name: 'pink', label: 'Pink', color: '#be2c6c' },
  { name: 'pumpkin', label: 'Pumpkin', color: '#b84610' },
  { name: 'purple', label: 'Purple', color: '#822db9' },
  { name: 'red', label: 'Red', color: '#b71d2e' },
  { name: 'sand', label: 'Sand', color: '#857255' },
  { name: 'slate', label: 'Slate', color: '#48586f' },
  { name: 'violet', label: 'Violet', color: '#6f46a8' },
  { name: 'yellow', label: 'Yellow', color: '#9b7a06' },
  { name: 'zinc', label: 'Zinc', color: '#52525b' },
]

// Available size variants
const sizes = [
  { name: 'default', label: 'Default', description: 'Standard sizing for all elements' },
  { name: 'pico', label: 'PicoCSS', description: 'PicoCSS original values' },
]

// Initialize all groups as expanded
variableGroups.forEach(g => {
  expandedGroups[g.label] = true
})

// Tour steps
const tourSteps = [
  {
    title: 'Welcome to Theme Builder!',
    content: 'This tool helps you customize Semanticus CSS variables. Changes are previewed live in the iframe on the right.',
    target: null
  },
  {
    title: 'Search Variables',
    content: 'Use the search box to quickly find variables by name, label, or description.',
    target: '.search-box'
  },
  {
    title: 'Variable Input',
    content: 'Each input shows the CSS variable name (e.g., --color-primary). Click the ? icon for details.',
    target: '.var-row'
  },
  {
    title: 'Compare Mode',
    content: 'Toggle "Compare" to see a before/after split view of your changes.',
    target: '.compare-btn'
  },
  {
    title: 'Export Your Theme',
    content: 'When done, click "Export CSS" to download your custom theme file.',
    target: '.export-btn'
  }
]

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

// Count of changed variables
const changedCount = computed(() => Object.keys(customValues).length)

// ── Helpers ─────────────────────────────────────────────────────────────────

function getKey(v) {
  return v.scope === 'root' ? `root:${v.name}` : `${currentTheme.value}:${v.name}`
}

function getDefault(v) {
  if (v.scope === 'root') return v.lightDefault
  return currentTheme.value === 'dark' && v.darkDefault ? v.darkDefault : v.lightDefault
}

function getCurrentValue(v) {
  return customValues[getKey(v)] ?? ''
}

function setCurrentValue(v, value) {
  const key = getKey(v)
  if (value === '' || value === getDefault(v)) {
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

// Convert color for the color input (best effort hex conversion)
function toHex(color) {
  if (!color) return '#000000'
  const s = color.trim()
  if (s.startsWith('#')) {
    if (s.length === 4) {
      return '#' + s[1] + s[1] + s[2] + s[2] + s[3] + s[3]
    }
    return s.slice(0, 7)
  }
  // Try to parse rgb/rgba
  const m = s.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/)
  if (m) {
    const r = Math.round(parseFloat(m[1])).toString(16).padStart(2, '0')
    const g = Math.round(parseFloat(m[2])).toString(16).padStart(2, '0')
    const b = Math.round(parseFloat(m[3])).toString(16).padStart(2, '0')
    return `#${r}${g}${b}`
  }
  return '#000000'
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

// Close popover when clicking outside
function handleDocumentClick(event) {
  if (activePopover.value && !event.target.closest('.popover-container')) {
    closePopover()
  }
}

// Copy to clipboard
async function copyToClipboard(text, type) {
  try {
    await navigator.clipboard.writeText(text)
    copiedFeedback.value = type
    setTimeout(() => copiedFeedback.value = null, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

// Search highlighting
function highlightMatch(text, query) {
  if (!query) return text
  const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi')
  return text.replace(regex, '<mark class="search-highlight">$1</mark>')
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Tour functions
function startTour() {
  showTour.value = true
  tourStep.value = 0
}

function nextTourStep() {
  if (tourStep.value < tourSteps.length - 1) {
    tourStep.value++
  } else {
    endTour()
  }
}

function prevTourStep() {
  if (tourStep.value > 0) {
    tourStep.value--
  }
}

function endTour() {
  showTour.value = false
  tourStep.value = 0
}

// ── Sidebar Resize ─────────────────────────────────────────────────────────

function startResize(event) {
  isResizing.value = true
  document.body.style.cursor = 'col-resize'
  document.body.style.userSelect = 'none'
}

function stopResize() {
  isResizing.value = false
  document.body.style.cursor = ''
  document.body.style.userSelect = ''
}

function handleResize(event) {
  if (!isResizing.value) return

  const minWidth = 280  // Minimum to fit popover content
  const maxWidth = 500
  const newWidth = Math.max(minWidth, Math.min(maxWidth, event.clientX))
  sidebarWidth.value = newWidth
}

function updatePreviewTheme() {
  if (iframeRef.value?.contentWindow) {
    iframeRef.value.contentWindow.postMessage({
      type: 'update-theme',
      palette: currentPalette.value,
      size: currentSize.value
    }, '*')
  }
}

function setPalette(palette) {
  currentPalette.value = palette
  updatePreviewTheme()
}

function setSize(size) {
  currentSize.value = size
  updatePreviewTheme()
}

function toggleCompare() {
  compareMode.value = !compareMode.value
  if (iframeRef.value?.contentWindow) {
    // First, tell iframe to enable/disable compare mode layout
    iframeRef.value.contentWindow.postMessage({
      type: 'set-compare-mode',
      enabled: compareMode.value
    }, '*')

    // Wait for layout to settle, then update CSS
    setTimeout(() => {
      updateIframeStyles()
    }, 100)
  }
}

// ── iframe Communication ────────────────────────────────────────────────────

function buildCustomCSS() {
  const rootVars = []
  const lightVars = []
  const darkVars = []

  for (const [key, value] of Object.entries(customValues)) {
    const [scope, ...nameParts] = key.split(':')
    const name = nameParts.join(':') // Handle -- prefix
    if (scope === 'root') {
      rootVars.push(`  ${name}: ${value};`)
    } else if (scope === 'light') {
      lightVars.push(`  ${name}: ${value};`)
    } else if (scope === 'dark') {
      darkVars.push(`  ${name}: ${value};`)
    }
  }

  let css = ''

  if (rootVars.length) {
    rootVars.push('')
  } else {
    rootVars.push('  /* No custom variables set */')
    rootVars.push('')
  }

  css += `:root, :host {\n${rootVars.join('\n')}}\n`

  if (lightVars.length) {
    css += `[data-theme="light"],\n:root:not([data-theme="dark"]),\n:host(:not([data-theme="dark"])) {\n${lightVars.join('\n')}\n}\n\n`
  }
  if (darkVars.length) {
    css += `[data-theme="dark"] {\n${darkVars.join('\n')}\n}\n`
  }
  return css
}

function buildCompareModeCSS() {
  // In compare mode, only apply custom overrides inside .custom-mode.
  // .default-mode shows the natural theme (base + palette) without any overrides.

  const customVars = []

  // Get all variables from all groups
  const allVars = []
  variableGroups.forEach(group => {
    allVars.push(...group.vars)
  })

  allVars.forEach(v => {
    const customKey = getKey(v)
    const hasCustomValue = customValues[customKey]
    if (hasCustomValue) {
      customVars.push(`  ${v.name}: ${customValues[customKey]};`)
    }
  })

  if (!customVars.length) return ''

  return `.custom-mode {\n${customVars.join('\n')}\n}\n`
}

function updateIframeStyles() {
  if (!iframeRef.value?.contentWindow) return

  const css = compareMode.value
    ? buildCompareModeCSS()
    : buildCustomCSS()

  iframeRef.value.contentWindow.postMessage({
    type: 'update-custom-css',
    css: css,
    theme: currentTheme.value
  }, '*')
}

function highlightInPreview(v) {
  selectedVar.value = v?.name ?? null
  if (!iframeRef.value?.contentWindow) return
  iframeRef.value.contentWindow.postMessage({
    type: 'highlight-elements',
    selectors: v?.selectors ?? null,
    varName: v?.name ?? null
  }, '*')
}

function clearHighlight() {
  selectedVar.value = null
  if (!iframeRef.value?.contentWindow) return
  iframeRef.value.contentWindow.postMessage({
    type: 'highlight-elements',
    selectors: null,
    varName: null
  }, '*')
}

// ── Export ───────────────────────────────────────────────────────────────────

function exportCSS() {
  // const css = buildCustomCSS()
  // if (!css.trim()) {
  //   alert('No custom values to export. Modify some variables first!')
  //   return
  // }
  showExportModal.value = true
}

function closeExportModal() {
  showExportModal.value = false
}

function downloadCSS() {
  const css = buildCustomCSS()
  const header = `/* Semanticus CSS Custom Theme\n * Generated by Semanticus CSS Theme Builder\n * ${new Date().toISOString().split('T')[0]}\n */\n\n`
  const blob = new Blob([header + css], { type: 'text/css' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'semanticus.custom.css'
  a.click()
  URL.revokeObjectURL(url)
}

const exportSnippet = computed(() => {
  const version = __SEMANTICUS_VERSION__
  let result = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@${version}/dist/semanticus.css">\n`;
  if (currentPalette.value !== 'azure') {
    result += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@${version}/dist/semanticus.palette.${currentPalette.value}.css">\n`
  }
  if (currentSize.value !== 'default') {
    result += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@${version}/dist/semanticus.size.${currentSize.value}.css">\n`
  }
  result += `<link rel="stylesheet" href="/css/semanticus.custom.css">`

  return result;
})
const highlightedExportSnippet = computed(() => {
  return hljs.highlight(exportSnippet.value, { language: 'html' }).value;
})

const inlineSnippet = computed(() => {
  const css = buildCustomCSS()
  const version = __SEMANTICUS_VERSION__
  let result = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@${version}/dist/semanticus.css">\n`
  if (currentPalette.value !== 'azure') {
    result += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@${version}/dist/semanticus.palette.${currentPalette.value}.css">\n`
  }
  if (currentSize.value !== 'default') {
    result += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@${version}/dist/semanticus.size.${currentSize.value}.css">\n`
  }
  result += `<style>\n${css}</style>`

  return result;
})
const highlightedInlineSnippet = computed(() => {
  return hljs.highlight(inlineSnippet.value, { language: 'html' }).value;
})

// ── Lifecycle ───────────────────────────────────────────────────────────────

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick)
})

watch(currentTheme, () => {
  updateIframeStyles()
})

// Delay to allow the iframe content to fully initialize before sending styles
const IFRAME_INIT_DELAY_MS = 300

function onIframeLoad() {
  setTimeout(() => {
    updatePreviewTheme()
    updateIframeStyles()
  }, IFRAME_INIT_DELAY_MS)
}

// Get inline styles for preview box in popover
function getPreviewStyle(v) {
  const value = getCurrentValue(v) || getDefault(v)
  const styles = {}

  if (v.type === 'color') {
    if (v.name.includes('bg') || v.name.includes('background')) {
      styles.backgroundColor = value
    } else if (v.name.includes('text') || v.name.includes('color')) {
      styles.color = value
    } else if (v.name.includes('border')) {
      styles.borderColor = value
      styles.border = `2px solid ${value}`
    } else {
      styles.backgroundColor = value
    }
  }

  if (v.name === '--font-size') {
    styles.fontSize = value
  }
  if (v.name === '--line-height') {
    styles.lineHeight = value
  }
  if (v.name === '--border-radius') {
    styles.borderRadius = value
  }
  if (v.name === '--spacing') {
    styles.padding = value
  }

  return styles
}
</script>

<template>
  <component :is="'style'" v-html="cssStyles"></component>
  <div class="theme-builder">
    <!-- Toolbar -->
    <div class="builder-toolbar">
      <div class="toolbar-left">
        <button
          v-if="changedCount"
          class="change-badge"
          @click="resetAll"
          title="Reset all changes"
        >
          {{ changedCount }} changed
          <span class="change-badge-close">✕</span>
        </button>
      </div>

      <div class="toolbar-center">
        <div class="palette-picker">
          <span class="picker-label">Palette:</span>
          <select
            v-model="currentPalette"
            @change="setPalette(currentPalette)"
            class="picker-select"
          >
            <option
              v-for="palette in palettes"
              :key="palette.name"
              :value="palette.name"
            >
              {{ palette.label }}
            </option>
          </select>
          <span
            class="palette-color-dot"
            :style="{ backgroundColor: palettes.find(p => p.name === currentPalette)?.color }"
          ></span>
        </div>
        <div class="size-picker">
          <span class="picker-label">Size:</span>
          <select
            v-model="currentSize"
            @change="setSize(currentSize)"
            class="picker-select"
          >
            <option
              v-for="size in sizes"
              :key="size.name"
              :value="size.name"
            >
              {{ size.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="toolbar-right">
        <button class="toolbar-btn help-btn" @click="startTour" title="Start guided tour">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Help
        </button>
        <button
          class="toolbar-btn compare-btn"
          :class="{ active: compareMode }"
          @click="toggleCompare"
          title="Toggle before/after comparison"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="3" x2="12" y2="21"/><rect x="3" y="4" width="9" height="16" rx="1"/><rect x="12" y="4" width="9" height="16" rx="1"/></svg>
          Compare
        </button>
        <button class="toolbar-btn export-btn" @click="exportCSS" title="Export custom CSS">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Export
        </button>
      </div>
    </div>

    <div
      class="builder-body"
      :style="{ gridTemplateColumns: sidebarWidth + 'px auto 1fr' }"
      @mousemove="handleResize"
      @mouseup="stopResize"
      @mouseleave="stopResize"
    >
      <!-- Sidebar: Variable Editors -->
      <aside class="builder-sidebar">
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
              <span class="group-icon" v-html="groupIcons[group.label] || ''"></span>
              <span class="group-label">{{ group.label }}</span>
              <span class="group-count">{{ group.vars.length }}</span>
            </button>

            <div v-show="expandedGroups[group.label]" class="group-vars">
              <div
                v-for="v in group.vars"
                :key="v.name"
                :class="['var-row', { selected: selectedVar === v.name, changed: isChanged(v) }]"
                @mouseenter="highlightInPreview(v)"
                @mouseleave="clearHighlight"
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
                        <div class="popover-actions">
                          <button
                            type="button"
                            class="popover-copy-btn"
                            @click.stop="copyToClipboard(v.name, 'varName')"
                            title="Copy variable name"
                          >
                            <svg v-if="copiedFeedback !== 'varName'" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                            <span v-else class="copied-text">Copied!</span>
                          </button>
                          <button
                            type="button"
                            class="popover-close"
                            @click.stop="closePopover"
                          >✕</button>
                        </div>
                      </div>
                      <div class="popover-content">
                        <p class="popover-short-label" v-html="highlightMatch(v.label, searchQuery)"></p>
                        <p class="popover-desc" v-html="highlightMatch(v.desc, searchQuery)"></p>

                        <!-- Inline Preview Example -->
                        <div class="popover-preview">
                          <span class="preview-label">Preview:</span>
                          <div class="preview-box" :style="getPreviewStyle(v)">
                            <span v-if="v.selectors?.includes('h1')" class="preview-h1">Heading 1</span>
                            <span v-else-if="v.selectors?.includes('a')" class="preview-link">Link text</span>
                            <span v-else-if="v.selectors?.includes('button')" class="preview-btn">Button</span>
                            <span v-else-if="v.selectors?.includes('input')" class="preview-input">
                              <input type="text" value="Input" readonly>
                            </span>
                            <span v-else-if="v.type === 'color' && v.name.includes('bg')" class="preview-color-bg"></span>
                            <span v-else-if="v.type === 'color'" class="preview-text" :style="{ color: getCurrentValue(v) || getDefault(v) }">Aa</span>
                            <span v-else class="preview-generic">{{ v.label }}</span>
                          </div>
                        </div>

                        <div v-if="v.selectors" class="popover-affected">
                          <span class="affected-label">Affects:</span>
                          <code class="affected-tags">{{ v.selectors }}</code>
                        </div>
                        <div class="popover-default">
                          <span class="default-label">Default ({{ currentTheme }}):</span>
                          <code class="default-value">{{ getDefault(v) }}</code>
                        </div>
                        <div class="popover-copy-css">
                          <button
                            type="button"
                            class="copy-css-btn"
                            @click.stop="copyToClipboard(`${v.name}: ${getCurrentValue(v) || getDefault(v)};`, 'cssRule')"
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
                  <!-- Color input -->
                  <template v-if="v.type === 'color'">
                    <input
                      type="color"
                      class="color-picker"
                      :value="toHex(getCurrentValue(v) || getDefault(v))"
                      @input="setCurrentValue(v, $event.target.value)"
                    >
                    <input
                      type="text"
                      class="text-input color-text"
                      :id="'input-' + v.name"
                      :value="getCurrentValue(v) || getDefault(v)"
                      :placeholder="getDefault(v)"
                      @change="setCurrentValue(v, $event.target.value)"
                      @focus="highlightInPreview(v)"
                    >
                  </template>

                  <!-- Range input -->
                  <template v-else-if="v.type === 'range'">
                    <input
                      type="range"
                      class="range-input"
                      min="0"
                      max="1"
                      step="0.05"
                      :value="getCurrentValue(v) || getDefault(v)"
                      @input="setCurrentValue(v, $event.target.value)"
                    >
                    <span class="range-value">{{ getCurrentValue(v) || getDefault(v) }}</span>
                  </template>

                  <!-- Text input -->
                  <template v-else>
                    <input
                      type="text"
                      class="text-input"
                      :id="'input-' + v.name"
                      :value="getCurrentValue(v) || getDefault(v)"
                      :placeholder="getDefault(v)"
                      @change="setCurrentValue(v, $event.target.value)"
                      @focus="highlightInPreview(v)"
                    >
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Resize Handle -->
      <div
        class="resize-handle"
        :class="{ resizing: isResizing }"
        @mousedown="startResize"
        title="Drag to resize sidebar"
      ></div>

      <!-- Preview -->
      <main class="builder-preview">
        <div class="preview-container">
          <ClientOnly>
            <iframe
              ref="iframeRef"
              :srcdoc="iframeContent"
              class="preview-iframe"
              :class="{ 'compare-mode': compareMode }"
              title="Theme Preview"
              sandbox="allow-scripts allow-same-origin"
              @load="onIframeLoad"
            ></iframe>
            <template #fallback>
              <div class="preview-iframe preview-iframe-fallback">
                <div class="preview-loading">Loading theme preview...</div>
              </div>
            </template>
          </ClientOnly>
        </div>
      </main>
    </div>

    <!-- Tour Overlay -->
    <div v-if="showTour" class="tour-overlay" @click="endTour">
      <div class="tour-modal" @click.stop>
        <div class="tour-header">
          <span class="tour-step">Step {{ tourStep + 1 }} of {{ tourSteps.length }}</span>
          <button class="tour-close" @click="endTour">✕</button>
        </div>
        <div class="tour-content">
          <h3 class="tour-title">{{ tourSteps[tourStep].title }}</h3>
          <p class="tour-text">{{ tourSteps[tourStep].content }}</p>
        </div>
        <div class="tour-footer">
          <button
            class="tour-btn secondary"
            @click="prevTourStep"
            :disabled="tourStep === 0"
          >Previous</button>
          <button
            class="tour-btn primary"
            @click="nextTourStep"
          >{{ tourStep === tourSteps.length - 1 ? 'Finish' : 'Next' }}</button>
        </div>
      </div>
    </div>

    <!-- Export Modal -->
    <div v-if="showExportModal" class="export-overlay" @click="closeExportModal">
      <div class="export-modal" @click.stop>
        <div class="export-header">
          <h3 class="export-title">Export Your Theme</h3>
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
            <p class="export-description">Download the <strong>semanticus.custom.css</strong> to your <strong>stylesheets</strong> folder and include these lines in your HTML:</p>
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
            Download semanticus.custom.css
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.language-html {
  margin: 0 !important;
  border-radius: 0 !important;
  outline: none;
  cursor: text;
}

.theme-builder {
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg);
  height: calc(100vh - 150px);
}

/* ── Toolbar ── */
.builder-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  flex-wrap: nowrap;
}

.toolbar-left,
.toolbar-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.theme-toggle {
  display: flex;
  gap: 0.125rem;
  background: var(--vp-c-bg);
  padding: 0.125rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
}

.toggle-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.625rem;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  cursor: pointer;
  transition: all 0.15s;
}

.toggle-btn:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-mute);
}

.toggle-btn.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 500;
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

.toolbar-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.compare-btn,
.export-btn {
  min-width: 84px;
  justify-content: center;
}

.export-btn {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.export-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
  color: #fff;
}

/* ── Body Layout ── */
.builder-body {
  display: grid;
  grid-template-columns: min-content auto 1fr;
  min-height: 600px;
  max-height: 85vh;
  overflow: visible;
}

/* ── Resize Handle ── */
.resize-handle {
  width: 6px;
  background: transparent;
  cursor: col-resize;
  position: relative;
  z-index: 10;
  transition: background 0.15s;
  flex-shrink: 0;
}

.resize-handle:hover,
.resize-handle.resizing {
  background: var(--vp-c-brand-1);
}

.resize-handle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2px;
  height: 20px;
  background: var(--vp-c-divider);
  border-radius: 1px;
  opacity: 0;
  transition: opacity 0.15s;
}

.resize-handle:hover::before,
.resize-handle.resizing::before {
  opacity: 1;
  background: #fff;
}

/* ── Sidebar ── */
.builder-sidebar {
  overflow-y: auto;
  background: var(--vp-c-bg-soft);
  max-height: calc(100vh - 211px);
  flex-shrink: 0;
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

.var-row.selected {
  border-color: var(--vp-c-brand-1);
}

.var-row.changed {
  /* Subtle tint to indicate a customized variable */
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

.help-trigger svg {
  flex-shrink: 0;
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

.popover-label {
  font-size: 0.8125rem;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
}

.popover-desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.75rem 0;
  line-height: 1.5;
}

.popover-affected,
.popover-default {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.popover-default {
  margin-bottom: 0;
}

.affected-label,
.default-label {
  font-size: 0.6875rem;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.affected-tags,
.default-value {
  font-family: ui-monospace, SFMono-Regular, monospace;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  word-break: break-word;
}

.default-value {
  color: var(--vp-c-brand-1);
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

.color-picker {
  width: 32px;
  height: 28px;
  padding: 1px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  background: var(--vp-c-bg);
  flex-shrink: 0;
}

.color-picker::-webkit-color-swatch-wrapper {
  padding: 2px;
}

.color-picker::-webkit-color-swatch {
  border-radius: 2px;
  border: none;
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

.color-text {
  flex: 1;
}

.range-input {
  flex: 1;
  accent-color: var(--vp-c-brand-1);
}

.range-value {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-family: ui-monospace, monospace;
  min-width: 2rem;
  text-align: right;
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

/* ── Group Icon ── */
.group-icon {
  display: inline-flex;
  align-items: center;
  color: var(--vp-c-text-3);
  margin-right: 0.25rem;
}

.group-header:hover .group-icon {
  color: var(--vp-c-brand-1);
}

/* ── Toolbar Center ── */
.toolbar-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 0.75rem;
}

/* ── Palette Picker ── */
.palette-picker,
.size-picker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-size: 0.8125rem;
}

.picker-label {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.picker-select {
  background: transparent;
  border: none;
  color: var(--vp-c-text-1);
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  padding-right: 0.5rem;
}

.picker-select option {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.palette-color-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1px solid var(--vp-c-divider);
}

/* ── Compare Button ── */
.compare-btn.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

/* ── Popover Enhancements ── */
.popover-actions {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.popover-copy-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  font-size: 0.6875rem;
  transition: all 0.15s;
}

.popover-copy-btn:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.copied-text {
  color: var(--vp-c-success-1, #22c55e);
  font-weight: 600;
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

/* ── Popover Preview Box ── */
.popover-preview {
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
}

.preview-label {
  font-size: 0.6875rem;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.375rem;
  display: block;
}

.preview-box {
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0.5rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

.preview-text {
  font-size: 1.25rem;
  font-weight: 600;
}

.preview-h1 {
  font-size: 1.25rem;
  font-weight: 700;
}

.preview-link {
  text-decoration: underline;
}

.preview-btn {
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.preview-input input {
  font-size: 0.75rem;
  padding: 0.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 3px;
  width: 100%;
}

.preview-color-bg {
  width: 100%;
  height: 24px;
  border-radius: 3px;
}

.preview-generic {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

/* ── Copy CSS Button ── */
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

/* ── Toolbar Help Button ── */
.help-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
}

/* ── Tour Overlay ── */
.tour-overlay {
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

.tour-modal {
  background: var(--vp-c-bg);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 420px;
  width: 100%;
  overflow: hidden;
}

.tour-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.tour-step {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-3);
  font-weight: 600;
}

.tour-close {
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: var(--vp-c-text-3);
  font-size: 1rem;
  line-height: 1;
  border-radius: 4px;
}

.tour-close:hover {
  color: var(--vp-c-danger-1);
  background: var(--vp-c-danger-soft);
}

.tour-content {
  padding: 1.25rem;
}

.tour-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem 0;
}

.tour-text {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

.tour-footer {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
}

.tour-btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  border: none;
}

.tour-btn.secondary {
  background: transparent;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}

.tour-btn.secondary:hover:not(:disabled) {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.tour-btn.secondary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.tour-btn.primary {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.tour-btn.primary:hover {
  background: var(--vp-c-brand-2);
}

/* ── Export Modal ── */
.export-overlay {
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

.export-modal {
  background: var(--vp-c-bg);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 520px;
  width: 100%;
  overflow: hidden;
}

.export-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.export-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.export-close {
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  color: var(--vp-c-text-3);
  font-size: 1rem;
  line-height: 1;
  border-radius: 4px;
}

.export-close:hover {
  color: var(--vp-c-danger-1);
  background: var(--vp-c-danger-soft);
}

.export-content {
  padding: 1.25rem;
}

.export-description {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem 0;
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
  font-weight: 600;
}

.export-mode-label svg {
  flex-shrink: 0;
}

.export-code-block {
  position: relative;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
}

.export-code-block pre {
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

.export-footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
}

.export-btn-secondary {
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

.export-btn-secondary:hover {
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.export-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
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

.export-btn-primary:hover {
  background: var(--vp-c-brand-2);
}

/* ── Preview ── */
.builder-preview {
  overflow-y: auto;
  max-height: calc(100vh - 211px);
  position: relative;
  z-index: 1;
}

.preview-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.preview-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.preview-iframe.compare-mode {
  /* Handled by postMessage to iframe */
}

.preview-iframe-fallback {
  background: var(--vp-c-bg-soft, #f3f4f6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-loading {
  color: var(--vp-c-text-2, #6b7280);
  font-size: 0.875rem;
}

/* ── Responsive ── */
@media (max-width: 960px) {
  .builder-body {
    grid-template-columns: 1fr;
    max-height: none;
  }

  .builder-sidebar {
    border-right: none;
    border-bottom: 1px solid var(--vp-c-divider);
    max-height: 50vh;
  }
}

@media (max-width: 640px) {
  .builder-toolbar {
    padding: 0.5rem;
    flex-wrap: wrap;
  }

  .toolbar-center {
    order: 3;
    width: 100%;
    justify-content: center;
  }

  .toolbar-left,
  .toolbar-right {
    width: auto;
    justify-content: space-between;
  }

  .builder-body {
    grid-template-columns: 1fr;
  }

  .resize-handle {
    display: none;
  }
}
</style>
