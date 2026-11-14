# About

**Semanticus CSS** is inspired by the semantic and accessible foundations of **Pico CSS** and the flexibility of utility composition patterns popularized by **Bootstrap**.

It aims to address the friction that often appears shortly after installing **Pico CSS**, when you want to customize `spacing`, `layout`, `colors`, and other CSS properties. It does so by combining **Bootstrap**-style utilities adapted to the same **CSS variable system**.

## Mission

Enable authors to write clean, semantic HTML that looks great by default, guide them toward ARIA-centric patterns, and ensure core functionality works without JavaScript while allowing deliberate customization via a small, consistent set of utilities.

## Core principles

- **Semantic-first:** Semantic styling for real HTML elements and ARIA roles rather than relying on heavy class scaffolding.
- **Accessibility-focused:** Prefer ARIA patterns and semantic attributes over ad-hoc class-based components.
- **Minimalism:** Keep utility classes to a necessary minimum; add classes only for intentional overrides.
- **Predictable customization:** Centralize styling via CSS variables, assuring a consistent look for both semantic styles and atomic utilities.
- **Progressive enhancement:** Ensure base semantics work without JavaScript, and enhance behavior when needed.

## Why not just use Bootstrap?

> Or any other full-fledged CSS framework, for that matter.

**Semanticus CSS** is not appealing solely because of its small footprint. Its real value lies in its **semantic-first** and **accessibility-focused** styling approach, helping developers build beautiful interfaces while gradually guiding them toward accessibility best practices without overwhelming them with the complexities of **ARIA** patterns and implementation details.

### Size comparison

| Bundle | Gzip |
| --- | --- |
| {{bootstrapUtilitiesAndGrid.label}} | {{bootstrapUtilitiesAndGrid.gzipKB}} KB |
| {{semanticusUtilitiesAndGrid.label}} | {{semanticusUtilitiesAndGrid.gzipKB}} KB |
| {{bootstrapFullBundle.label}} | {{bootstrapFullBundle.gzipKB}} KB |
| {{semanticusFullBundle.label}} | {{semanticusFullBundle.gzipKB}} KB |

## Why not just use Pico CSS?

Sadly **Pico CSS** has not been actively maintained for a while, and it lacks a clear roadmap for future development.

Besides the convenience and added flexibility of utility classes, **Semanticus CSS** aims to uphold **Pico CSS**'s accessibility principles as part of the design.

It kept most of its accessibility features and styling while and updated existing ones using the latest web platform features and patterns, e.g.:

- **Tooltips** use the [ARIA: tooltip pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)
- **Dropdowns** use the [ARIA: menu pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- **Modals** use the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
- **Breadcrumbs** don't rely on the **i18n** `aria-label` property, for styling purposes, but instead use the native semantics of `<nav>` and `<ol>` elements, while still encouraging the use of `aria-label` for better accessibility.
- **Groups** are now prepared for `dir="rtl"`
- etc.

### Size Comparison

| Bundle | Gzip |
| --- | --- |
| {{picoFullBundle.label}} | {{picoFullBundle.gzipKB}} KB |
| {{semanticusNoUtilities.label}} | {{semanticusNoUtilities.gzipKB}} KB |

<script setup>
  import comparisonTable from "../comparison-table.json";
  const { picoFullBundle, semanticusNoUtilities, bootstrapUtilitiesAndGrid, semanticusUtilitiesAndGrid, bootstrapFullBundle, semanticusFullBundle } = comparisonTable.entries;
</script>
