# About

**Semanticus CSS** is inspired by the semantic and accessible foundations of **Pico CSS** and the flexibility of utility composition patterns popularized by **Bootstrap**.

It aims to address the friction that often appears shortly after installing **Pico CSS**, when you want to customize `spacing`, `layout`, `colors`, and other CSS properties. It does so by combining **Bootstrap**-style utilities adapted to the same **CSS variable system**.

## Why not just use Bootstrap?

Or any other full-fledged CSS framework, for that matter.

**Semanticus CSS** is not appealing solely because of its small footprint. Its real value lies in its **semantic-first** and **accessibility-focused** styling approach, helping developers build beautiful interfaces while gradually guiding them toward accessibility best practices without overwhelming them with the complexities of **ARIA** patterns and implementation details.

### Size Comparison

| Bundle | Gzip |
| --- | --- |
| {{bootstrapUtilitiesAndGrid.label}} | {{bootstrapUtilitiesAndGrid.gzipKB}} KB |
| {{semanticusUtilitiesAndGrid.label}} | {{semanticusUtilitiesAndGrid.gzipKB}} KB |
| {{bootstrapFullBundle.label}} | {{bootstrapFullBundle.gzipKB}} KB |
| {{semanticusFullBundle.label}} | {{semanticusFullBundle.gzipKB}} KB |

## Why not just use Pico CSS?

Sadly **Pico CSS** has not been actively maintained for a while, and it lacks a clear roadmap for future development.

Besides the convenience and added flexibility of utility classes, **Semanticus CSS** aims to uphold **Pico CSS**'s accessibility principles as part of the design.

For instance, it kept the following accessibility features:

- A **loading** region can be expressed with `aria-busy="true"`
- **Validation** can be expressed with `aria-invalid`
- **Disabled** controls remain native disabled controls

And updated existing ones using the latest web platform features and patterns, e.g.:

- **Tooltips** use the [ARIA: tooltip pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)
- **Dropdowns** use the [ARIA: menu pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- **Modals** use the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
- **Breadcrumbs** don't rely on an the **i18n** `aria-label` property, but instead use the native semantics of `<nav>` and `<ol>` elements.

### Size Comparison

| Bundle | Gzip |
| --- | --- |
| {{picoSemantics.label}} | {{picoSemantics.gzipKB}} KB |
| {{semanticusSemantics.label}} | {{semanticusSemantics.gzipKB}} KB |
| {{picoFullBundle.label}} | {{picoFullBundle.gzipKB}} KB |
| {{semanticusNoUtilities.label}} | {{semanticusNoUtilities.gzipKB}} KB |

<script setup>
  import comparisonTable from "../comparison-table.json";
  const { picoSemantics, picoFullBundle, semanticusSemantics, semanticusNoUtilities, semanticusUtilitiesAndGrid, semanticusFullBundle, bootstrapUtilitiesAndGrid, bootstrapFullBundle } = comparisonTable.entries;
</script>
