---
title: header
---

<script setup>
import { HeaderDemo } from "@demos/semantics/elements";
</script>

# &lt;header&gt;

The `<header>` element represents introductory content for its nearest sectioning ancestor — typically containing a logo, site title, and primary navigation.

## Basic Usage

<HtmlPreviewer :code="HeaderDemo.basic()" />

## With Search, Dropdown, and Links

<HtmlPreviewer :code="HeaderDemo.withSearchDropdownAndLinks()" />
