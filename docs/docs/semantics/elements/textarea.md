---
title: textarea
---

<script setup>
import { TextareaDemo } from "@demos/semantics/elements";
</script>

# &lt;textarea&gt;

The `<textarea>` element is a multi-line plain-text input for free-form entry. Use the `rows` attribute to control default height. Always pair with a `<label>` or `aria-label` to provide an accessible name for screen readers.

## Basic Usage

<HtmlPreviewer :code="TextareaDemo.basic()" />

## With Label

<HtmlPreviewer :code="TextareaDemo.withLabel()" />

## With Rows

<HtmlPreviewer :code="TextareaDemo.withRows()" />

