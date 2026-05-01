---
title: ins
---

<script setup>
import { InsDemo } from "@demos/semantics/elements";
</script>

# &lt;ins&gt;

The `<ins>` element represents inserted text. Semanticus colors it with `--color-success-rgb` and removes the default underline, making additions visually distinct from deleted content.

## Basic Usage

<HtmlPreviewer :code="InsDemo.basic()" />

## Editorial

<HtmlPreviewer :code="InsDemo.editorial()" />
