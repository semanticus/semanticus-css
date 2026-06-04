---
title: nav
---

# &lt;nav&gt;

**Semanticus CSS** adds opinionated styling to `<nav>` to reduce boilerplate for common navigation patterns like **horizontal navs**, **breadcrumbs**, and **sidebars**.

> **Accessibility:** Keep in mind this element has the implicit `role="navigation"`, which means screen readers expose it as a navigation landmark, allowing users to jump directly to or skip past the navigation, so it's best not to combine it with other roles like `role="group"` and `role="list"`.

## Basic Usage

- `<nav>` is a flex container that uses `justify-content: space-between` to distribute its children across the horizontal axis;
- All direct children of `<nav>` will have their `margin-block` set to 0;
- In case of a single child, it will grow to fill the available space;

<HtmlPreviewer :code="NavDemo.main()" />

## Horizontal Navigation

- `<ul>` children also become a horizontal flex container;
- `<li>` children will become unstyled and inlined;
- `<a>` children will lose their underline except on `:hover`.
- `<button>` and `<details>` (**Dropdowns**) children will automatically match the height and padding of links.

<HtmlPreviewer :code="NavDemo.horizontalHeaderNavigation({}, 'Acme Corp')" />

### Breadcrumbs

Breadcrumbs are implemented using a single `<ol>` element inside a `<nav>` — the semantic way to represent the current page's location within a navigational hierarchy.

Each breadcrumb item is represented as an `<li>` element, and the current page is typically indicated by adding `aria-current="page"` to the `<a>` or the corresponding `<li>` element.

> **Accessibility:** Don't forget to add `aria-label="Breadcrumbs"` to the `<nav>` element for better accessibility.

<HtmlPreviewer :code="NavDemo.breadcrumbs()" />

## Vertical Navigation

- `<nav>`, `<ul>` and `<ol>` elements get stacked vertically when inside an `<aside>`;
- When `<nav>` is a direct child of an `<aside>` it will stretch itself to fill the available height.

<HtmlPreviewer :code="NavDemo.sidebarExample()" />

## Button-Based Pagination

The simplest pagination pattern uses buttons within a group:

> **Note:** When a step isn't available yet but should be announced, use `aria-disabled="true"` instead of the native `disabled` attribute to keep the element focusable and discoverable by assistive technology users.
> Remember that `aria-disabled` does not block activation on its own, so you must also prevent activation/navigation in code (for example, in a JavaScript handler).
> In case you want to remove it from the tab order as well, add `tabindex="-1"`.

<HtmlPreviewer :code="PaginationDemo.buttons()" />

## Link-Based Pagination

For server-side rendering or distinct page URLs, use anchor elements with `role="button"`:

> **Note:** `disabled` is not a valid attribute for `<a>` elements, so in this case you really need to use `aria-disabled="true"` instead.

<HtmlPreviewer :code="PaginationDemo.links()" />

<script setup>
import { PaginationDemo } from "@demos/composites";
import { NavDemo } from "@demos/semantics/elements";
</script>
