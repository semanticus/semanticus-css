---
title: blockquote
---

<script setup>
import { BlockquoteDemo } from "@demos/semantics/elements";
</script>

# &lt;blockquote&gt;

The `<blockquote>` element indicates that the enclosed text is an extended quotation. Semanticus styles it with a left border accent.

## Basic Usage

<HtmlPreviewer :code="BlockquoteDemo.basic()" />

## With Attribution

Use a `<footer>` inside the blockquote for attribution, with `<cite>` for the source.

<HtmlPreviewer :code="BlockquoteDemo.withAttribution()" />
