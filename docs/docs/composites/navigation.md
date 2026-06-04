# Navigation

Navigation is implemented using the `<nav>` element, as its fundamental building block but it's actually a combination of several elements working together.

**Semanticus CSS** adds some opiniated styling to `<nav>`, in order to reduce boilerplate code for common navigation patterns like **horizontal navs**, **breadcrumbs**, and **sidebars**.

Check out [Pagination](/docs/composites/pagination) for more examples of navigation patterns.

## Basic Usage

- `<nav>` is a flex container that, using `justify-content: space-between;`, to distribute its children across the horizontal axis;
- All direct children of `<nav>` will have their `margin-block` set to 0;
- In case of a single child, it will grow to fill the available space;

<HtmlPreviewer :code="NavDemo.main()" />

## Horizontal Navigation

- `<ul>` children will become a horizontal flex container also;
- `<li>` children will become unstyled and inlined;
- `<a>` children will lose their underline except on `:hover`.
- `<button>` and `<details>` (**Dropdowns**) children will automatically match the height and padding of links.

<HtmlPreviewer :code="NavDemo.horizontalHeaderNavigation({}, 'Acme Corp')" />

### Breadcrumbs

Breadcrumbs are implemented using a single `<ol>` element inside a `<nav>`, which is the semantic equivalent of a way to represent the current page's location within a navigational hierarchy,

Each breadcrumb item represented as an `<li>` element and the current page is typically indicated by adding the `aria-current="page"` attribute either to the `<a>` or corresponding `<li>` element.

> **Accessibility:** Don't forget to add `aria-label="Breadcrumbs"` to the `<nav>` element for better accessibility.

<HtmlPreviewer :code="NavDemo.breadcrumbs()" />

## Vertical Navigation

- `<nav>`, `<ul>` and `<ol>` elements get stacked vertically when inside a `<aside>`;
- When `<nav>` is a direct child of an `<aside>` it will stretch itself to fill the available height.

<HtmlPreviewer :code="NavDemo.sidebarExample()" />

## Search and Dropdown Example

<HtmlPreviewer :code="NavDemo.searchAndDropdownExample()" />

<script setup>
import { NavDemo } from "@demos/semantics/elements";
</script>
