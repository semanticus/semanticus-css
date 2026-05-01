---
title: sub
---

<script setup>
import { SubDemo } from "@demos/semantics/elements";
</script>

# &lt;sub&gt;

The `<sub>` element renders subscript text — positioned below the baseline with a smaller font size. Common uses include chemical formulas and footnote references.

## Basic Usage

<HtmlPreviewer :code="SubDemo.basic()" />

## Footnote References

<HtmlPreviewer :code="SubDemo.footnote()" />
