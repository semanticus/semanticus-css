---
title: abbr
---

<script setup>
import { AbbrDemo } from "@demos/semantics/elements";
</script>

# &lt;abbr&gt;

The `<abbr>` element marks an abbreviation or acronym. When a `title` attribute is provided, Semanticus adds a dotted underline and a `help` cursor so users know they can hover for the full form.

## Basic Usage

<HtmlPreviewer :code="AbbrDemo.basic()" />
