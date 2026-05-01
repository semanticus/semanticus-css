---
title: label
---

<script setup>
import { LabelDemo } from "@demos/semantics/elements";
</script>

# &lt;label&gt;

Labels associate text descriptions with form controls.

`<input>` can be nested inside a `<label>` or associated externally using `for`/`id`.

## Basic Usage

Use `for` on the label and a matching `id` on the input to associate them explicitly.

<HtmlPreviewer :code="LabelDemo.basic()" />

## Input inside

Wrapping an input inside a label implicitly associates them.

<HtmlPreviewer :code="LabelDemo.inputInside()" />

For helper text using `<small>`, see [&lt;small&gt;](/docs/semantics/small).
