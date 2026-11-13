---
title: .nav
---

# .nav

The `.nav` class applies the same styling and layout behavior as the [`<nav>` element](/docs/semantics/elements/nav) to another element. Use it on a `<header>` or `<footer>`, for example, to arrange branding, links, and actions without adding an extra wrapper.

## Basic Usage

Add `class="nav"` to the element you want to style:

<HtmlPreviewer :code="NavDemo.header()" />

The same class works on a footer:

<HtmlPreviewer :code="NavDemo.footer()" />

## Styling and Behavior

Like `<nav>`, `.nav`:

- Creates a flex container with centered items, spacing between children, and wrapping when needed.
- Distributes direct children with `justify-content: space-between`, removes their block margins, and lets a single child grow to fill the available space.
- Displays lists horizontally without list markers and removes link underlines except on hover.
- Adjusts button and form control sizing to fit the navigation layout.
- Applies the same breadcrumb styling when its only direct child is an `<ol>`.

See the [`<nav>` documentation](/docs/semantics/elements/nav) for navigation patterns and examples.

## Accessibility

The class changes presentation; it does not change the element's HTML semantics or add a navigation landmark. A `<header class="nav">` remains a header, and a `<footer class="nav">` remains a footer.

Use a native `<nav>` when the content should be exposed as a navigation landmark. You can place it inside a header or footer and give it an accessible label when needed to distinguish multiple navigation landmarks.

<script setup>
import { NavDemo } from "@demos/components";
</script>
