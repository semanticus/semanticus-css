# Pagination

Pagination is a navigation pattern that allows users to move between pages of content.

- Use a `<nav>` element with an `aria-label` to identify the pagination region
- Wrap page controls in a `role="group"` for proper semantic grouping
- Use buttons when pagination triggers dynamic content updates without page reloads
- Use anchor links when pagination navigates to distinct URLs

## Basic Pagination

The simplest pagination pattern uses buttons within a group:

> **Note:** When a step isn't available yet but should be announced, use `aria-disabled="true"` instead of the native `disabled` attribute to keep the element focusable and discoverable by assistive technology users.
> Remember that `aria-disabled` does not block activation on its own, so you must also prevent activation/navigation in code (for example, in a JavaScript handler).
> In case you want to remove it from the tab order as well, add `tabindex="-1"`.

<HtmlPreviewer :code="NavDemo.buttonBasedPagination()" />

## Link-Based Pagination

For server-side rendering or distinct page URLs, use anchor elements with `role="button"`:

> **Note:** `disabled` is not a valid attribute for `<a>` elements, so in this case you really need to use `aria-disabled="true"` instead.

<HtmlPreviewer :code="NavDemo.linkBasedPagination()" />

## Accessibility Considerations

- Always include an `aria-label` on the `<nav>` element to identify the pagination region
- Use `aria-current="page"` to indicate the current page to assistive technologies
- Disable (don't hide) navigation buttons when they are unavailable (e.g., "Previous" on page 1)
- Ensure keyboard users can navigate between page controls using Tab/Shift+Tab
- Consider adding `aria-live` regions to announce page changes to screen reader users

## Related

- [&lt;a&gt;](/docs/semantics/elements/a) - Anchor element styling and active state semantics
- [&lt;button&gt;](/docs/semantics/elements/button) - Button element styling
- [&lt;nav&gt;](/docs/semantics/elements/nav) - Navigation element semantics
- [disabled](/docs/semantics/attributes/disabled) - Disabled state semantics
- [role="group"](/docs/semantics/attributes/role-group) - For grouping related controls

<script setup>
import { NavDemo } from "@demos/semantics";
</script>
