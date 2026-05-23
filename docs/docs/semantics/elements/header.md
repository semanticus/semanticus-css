---
title: header
---

<script setup>
import { HeaderDemo } from "@demos/semantics/elements";
</script>

# &lt;header&gt;

The `<header>` element represents introductory content for its nearest sectioning ancestor — typically containing a logo, site title, and primary navigation.

> **Important:** Assistive technologies implicitly add the `role="banner"` so, don't combine it with `role="group"` or any other roles like `role="region"` that would override the banner landmark semantics.

## Basic Usage

<HtmlPreviewer :code="HeaderDemo.main()" />

## With Search, Dropdown, and Links

<HtmlPreviewer :code="HeaderDemo.withSearchDropdownAndLinks()" />
