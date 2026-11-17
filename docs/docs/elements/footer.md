---
title: footer
---

# &lt;footer&gt;

The `<footer>` element represents the footer for its nearest sectioning ancestor — typically containing copyright info, links, or supplemental navigation.

## Basic Usage

In order to avoid unwanted extra spacing from its children, `<footer>` it sets their `margin-block` to `0`;

<HtmlPreviewer :code="FooterDemo.main()" />

You can also combine it with [.nav](/docs/classes/nav) class, to distribute its children across the horizontal axis.

<HtmlPreviewer :code="FooterDemo.bottomBar()" />

## As a form controls container

By combining an `<aside>` element with a `<nav>`, you can [vertically stack](/docs/elements/nav#vertical-navigation) items.

<HtmlPreviewer :code="FooterDemo.formControls()" />

## Accessibility

> **Important:** Assistive technologies implicitly add the `role="contentinfo"`, so it's best not to combine it with other roles like `role="region"` or `role="group"`.

<script setup>
import { FooterDemo } from "@demos/semantics/elements";
</script>