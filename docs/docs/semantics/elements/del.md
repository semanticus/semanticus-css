---
title: del
---

<script setup>
import { DelDemo } from "@demos/semantics/elements";
</script>

# &lt;del&gt;

The `<del>` element represents deleted text. Semanticus colors it with `--color-danger-rgb` to make removals visually clear — useful for showing editorial changes or price reductions.

## Basic Usage

<HtmlPreviewer :code="DelDemo.basic()" />

## Editorial Change

<HtmlPreviewer :code="DelDemo.editorial()" />
