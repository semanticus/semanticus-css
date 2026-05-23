---
title: header
---

<script setup>
import { HeaderDemo } from "@demos/semantics/elements";
</script>

# &lt;header&gt;

The `<header>` element represents introductory content for its nearest sectioning ancestor — typically containing a logo, site title, and primary navigation.

> **Important:** Assistive technologies implicitly add the `role="banner"`  it's best not to combine them with other roles like `role="region"` or `role="group"`.

## Basic Usage

<HtmlPreviewer :code="HeaderDemo.main()" />

## With Search, Dropdown, and Links

<HtmlPreviewer :code="HeaderDemo.withSearchDropdownAndLinks()" />
