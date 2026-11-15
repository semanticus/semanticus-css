---
title: header
---

<script setup>
import { HeaderDemo } from "@demos/semantics/elements";
</script>

# &lt;header&gt;

The `<header>` element represents introductory content for its nearest sectioning ancestor — typically containing a logo, site title, and primary navigation.

**Semanticus CSS** adds opinionated styling to `<header>` to reduce boilerplate for common navigation patterns.

## Basic Usage

- `<header>` is a flex container that uses `justify-content: space-between` to distribute its children across the horizontal axis;
- All direct children of `<nav>` will have their `margin-block` set to 0;
- In case of a single child, it will grow to fill the available space;

<HtmlPreviewer :code="HeaderDemo.main()" />

## With search and navigation

<HtmlPreviewer :code="HeaderDemo.withSearchAndNavigationExample()" />

## Accessibility

> **Important:** Assistive technologies implicitly add the `role="banner"`, so it's best not to combine it with other roles like `role="region"` or `role="group"`.
