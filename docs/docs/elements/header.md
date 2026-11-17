---
title: header
---

# &lt;header&gt;

The `<header>` element represents introductory content for its nearest sectioning ancestor — typically containing a logo, site title, and primary navigation.

## Basic Usage

By default `<header>` has a `margin-bottom` and a `padding-block` of its own, so in order to avoid unwanted extra spacing, it will also set its direct children `margin-block` to `0`;

<HtmlPreviewer :code="HeaderDemo.main()" />

You can also combine it with [.nav](/docs/classes/nav) class, to distribute its children across the horizontal axis.

<HtmlPreviewer :code="HeaderDemo.pageTitleAndControls()" />

## As a topbar

<HtmlPreviewer :code="HeaderDemo.topBar()" />

## With search and navigation

<HtmlPreviewer :code="HeaderDemo.withSearchAndNavigation()" />

## Accessibility

> **Important:** Assistive technologies implicitly add the `role="banner"`, so it's best not to combine it with other roles like `role="region"` or `role="group"`.

<script setup>
import { HeaderDemo } from "@demos/semantics/elements";
</script>
