---
title: select
---

<script setup>
import { SelectDemo } from "@demos/semantics/elements";
</script>

# &lt;select&gt;

The `<select>` element creates a dropdown list of `<option>` items. Use the `multiple` attribute to allow multi-selection and `size` to show multiple rows. Always pair with a `<label>` to provide an accessible name.

## Basic Usage

<HtmlPreviewer :code="SelectDemo.basic()" />

## Select Multiple

<HtmlPreviewer :code="SelectDemo.multipleSelect()" />

## With Optgroup

<HtmlPreviewer :code="SelectDemo.withOptgroup()" />

## Dropdown

The dropdown component allows you to build a custom select with the same style as the native select.
See [Dropdown](/variants/components/dropdown).

<HtmlPreviewer :code="SelectDemo.dropdown()" />

