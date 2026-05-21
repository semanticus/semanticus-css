---
title: textarea
---

# &lt;textarea&gt;

The `<textarea>` element is a multi-line plain-text input for free-form entry. Use the `rows` attribute to control default height. Always pair with a `<label>` or `aria-label` to provide an accessible name for screen readers.

## Basic Usage

<HtmlPreviewer :code="TextareaDemo.main({ placeholder: 'Enter your message' })" />

## With Rows

<HtmlPreviewer :code="TextareaDemo.withRows()" />

## With Label

Always pair textareas with a `<label>` or `aria-label` so screen readers can identify the field.

<HtmlPreviewer :code="TextareaDemo.withLabel()" />

## With Helper Text

Helper text provides additional context about the textarea, such as instructions or character limits.

Use `<small>` element associated with a form control via `aria-describedby` to associate the helper text with the input for screen readers.

<HtmlPreviewer :code="TextareaDemo.withHelperText()" />

## Validation States

Just like any form elements, validation states are provided with `aria-invalid`. See more at [[aria-invalid]](/docs/semantics/attributes/aria-invalid)

> **Note:** The `<small>` element automatically inherits the validation state colors.

<HtmlPreviewer :code="TextareaDemo.validationStatesWithTextHelper()" />

<script setup>
import { TextareaDemo } from "@demos/semantics/elements";
</script>
