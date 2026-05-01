---
title: progress
---

<script setup>
import { ProgressDemo } from "@demos/semantics/elements";
</script>

# &lt;progress&gt;

The `<progress>` element visually represents task completion.

Use the `value` and `max` attributes to set progress, or omit `value` for an indeterminate state.

Pair with a `<label>` to give it an accessible name for screen readers.

## Basic Usage

<HtmlPreviewer :code="ProgressDemo.basic()" />

## Indeterminate Progress

<HtmlPreviewer :code="ProgressDemo.indeterminate()" />

## Progress with Label

<HtmlPreviewer :code="ProgressDemo.withLabel()" />
