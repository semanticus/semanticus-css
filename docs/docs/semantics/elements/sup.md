---
title: sup
---

<script setup>
import { SupDemo } from "@demos/semantics/elements";
</script>

# &lt;sup&gt;

The `<sup>` element renders superscript text — positioned above the baseline with a smaller font size. Common uses include mathematical exponents and footnote references.

## Basic Usage

<HtmlPreviewer :code="SupDemo.basic()" />

## Footnote References

<HtmlPreviewer :code="SupDemo.footnote()" />
