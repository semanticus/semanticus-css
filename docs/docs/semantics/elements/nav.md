---
title: nav
---

# &lt;nav&gt;

The `<nav>` element is a landmark that identifies a region of navigation links.

Screen readers expose it as a navigation landmark, allowing users to jump directly to or skip past the navigation.

> **Important:** Assistive technologies implicitly add the `role="navigation"`, so it's best not to combine it with other roles like `role="group"`.

## Basic Usage

<HtmlPreviewer :code="NavDemo.main()" />

`<ul>` are automatically distributed horizontally.

`<li>` are unstyled and inlined.

`<a>` are underlined only on `:hover`.

You can use `<button>` inside `<li>`. Button sizes automatically match link size and margin.

## Breadcrumbs

Breadcrumb navigation allows users to keep track of their location within the website.

<HtmlPreviewer :code="NavDemo.breadcrumbs()" />

## Vertical stacking

Navs get stacked vertically when inside a `<aside>`.

<HtmlPreviewer :code="NavDemo.verticalInAside()" />

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
