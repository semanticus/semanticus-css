---
title: select
---

# &lt;select&gt;

The `<select>` element creates a dropdown list of `<option>` items. Use the `multiple` attribute to allow multi-selection and `size` to show multiple rows. Always pair with a `<label>` to provide an accessible name.

## Basic Usage

<HtmlPreviewer :code="SelectDemo.main()" />

## Select Multiple

<HtmlPreviewer :code="SelectDemo.multipleSelect()" />

## With Optgroup

<HtmlPreviewer :code="SelectDemo.withOptgroup()" />

## With Label

Always pair selects with a `<label>` or `aria-label` so screen readers can identify the field.

<HtmlPreviewer :code="SelectDemo.withLabel()" />

## With Helper Text

Helper text provides additional context about the select, such as instructions or character limits.

Use `<small>` element associated with a form control via `aria-describedby` to associate the helper text with the input for screen readers.

<HtmlPreviewer :code="SelectDemo.withHelperText()" />

## Validation States

Just like any form elements, validation states are provided with `aria-invalid`. See more at [[aria-invalid]](/docs/semantics/attributes/aria-invalid)

<HtmlPreviewer :code="SelectDemo.validationStatesWithTextHelper()" />

::: info
The `<small>` element automatically inherits the validation state colors.
:::

<script setup>
import { SelectDemo } from "@demos/semantics/elements";
</script>
