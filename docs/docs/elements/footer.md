---
title: footer
---

<script setup>
import { FooterDemo } from "@demos/semantics/elements";
</script>

# &lt;footer&gt;

The `<footer>` element represents the footer for its nearest sectioning ancestor — typically containing copyright info, links, or supplemental navigation.

**Semanticus CSS** adds opinionated styling to `<footer>` to reduce boilerplate for common navigation patterns.

## Basic Usage

- `<footer>` is a flex container that uses `justify-content: space-between` to distribute its children across the horizontal axis;
- All direct children of `<nav>` will have their `margin-block` set to 0;
- In case of a single child, it will grow to fill the available space;

<HtmlPreviewer :code="FooterDemo.main()" />

## Accessibility

> **Important:** Assistive technologies implicitly add the `role="contentinfo"`, so it's best not to combine it with other roles like `role="region"` or `role="group"`.
