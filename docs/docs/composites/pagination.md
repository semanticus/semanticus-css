---
title: Pagination
---

<script setup>
const basicExample = `<nav aria-label="Pagination">
  <div role="group">
    <button disabled>Previous</button>
    <button>1</button>
    <button aria-current="page">2</button>
    <button>3</button>
    <button>Next</button>
  </div>
</nav>
`;

const anchorsExample = `<nav aria-label="Pagination">
  <div role="group">
    <a href="#" role="button" disabled>Previous</a>
    <a href="#page-1" role="button">1</a>
    <a href="#page-2" role="button" aria-current="page">2</a>
    <a href="#page-3" role="button">3</a>
    <a href="#page-3" role="button">Next</a>
  </div>
</nav>
`;
</script>

# Pagination

Pagination is a navigation pattern that allows users to move between pages of content.

- Use a `<nav>` element with an `aria-label` to identify the pagination region
- Wrap page controls in a `role="group"` for proper semantic grouping
- Use buttons when pagination triggers dynamic content updates without page reloads
- Use anchor links when pagination navigates to distinct URLs

## Basic Pagination

The simplest pagination pattern uses buttons within a group:

<HtmlPreviewer :code="basicExample" />

## Link-Based Pagination

For server-side rendering or distinct page URLs, use anchor elements with `role="button"`:

<HtmlPreviewer :code="anchorsExample" />

## Accessibility Considerations

- Always include an `aria-label` on the `<nav>` element to identify the pagination region
- Use `aria-current="page"` to indicate the current page to assistive technologies
- Disable (don't hide) navigation buttons when they are unavailable (e.g., "Previous" on page 1)
- Ensure keyboard users can navigate between page controls using Tab/Shift+Tab
- Consider adding `aria-live` regions to announce page changes to screen reader users

## Related

- [&lt;a&gt;](/docs/semantics/a) - Anchor element styling and active state semantics
- [&lt;button&gt;](/docs/semantics/button) - Button element styling
- [&lt;nav&gt;](/docs/semantics/nav) - Navigation element semantics
- [disabled](/docs/semantics/disabled) - Disabled state semantics
- [role="group"](/docs/semantics/role-group) - For grouping related controls
