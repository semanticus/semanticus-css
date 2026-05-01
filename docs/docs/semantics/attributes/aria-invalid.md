---
title: [aria-invalid]
---

<script setup>
import { AriaInvalidDemo } from "@demos/semantics/attributes";
</script>

# [aria-invalid="true|false"]

The `aria-invalid` attribute communicates the validation state of a form control to assistive technologies.

Set it to `"true"` for an invalid field and `"false"` for a valid one.

Pair it with a helper message via `aria-describedby` to explain the error.

## Basic Usage

<HtmlPreviewer :code="AriaInvalidDemo.basic" />

Helper texts defined with `<small>` below the form element inherit the validation state color.

<HtmlPreviewer :code="AriaInvalidDemo.inputHelper" />

## Checkbox

<HtmlPreviewer :code="AriaInvalidDemo.checkbox" />

## Radio

<HtmlPreviewer :code="AriaInvalidDemo.radio" />

## Select

<HtmlPreviewer :code="AriaInvalidDemo.select" />

## Switch

<HtmlPreviewer :code="AriaInvalidDemo.switch_" />

## Textarea

<HtmlPreviewer :code="AriaInvalidDemo.textarea" />

Helper texts defined with `<small>` below the textarea inherit the validation state color.

<HtmlPreviewer :code="AriaInvalidDemo.textareaHelper" />
