---
title: fieldset
---

# &lt;fieldset&gt;

`<fieldset>` groups related form elements together and can optionally include a `<legend>` label.

## Basic Usage

<HtmlPreviewer :code="FieldsetDemo.main()" />

### Grouping Input a with Button

<HtmlPreviewer :code="FieldsetDemo.groupingInputWithAButton()" />

### Grouping Select with a Button

<HtmlPreviewer :code="FieldsetDemo.groupingSelectWithAButton()" />

### Grouping Dropdown with a Button

<HtmlPreviewer :code="FieldsetDemo.groupingDropdownWithAButton()" />

## Grouping Multiple Inputs

<HtmlPreviewer :code="FieldsetDemo.groupingTwoInputsWithAButton()" />

## Inside a Form

Inputs are `width: 100%` by default and match button sizes for consistent layouts. For label placement and helper text, see [&lt;label&gt;](/docs/semantics/elements/label).

<HtmlPreviewer :code="FieldsetDemo.insideForm()" />

## Disabled

Setting `disabled` on a `<fieldset>` disables all contained form elements.

<HtmlPreviewer :code="FieldsetDemo.disabled()" />

## As a section

<HtmlPreviewer :code="FieldsetDemo.section()" />

<script setup>
import { FieldsetDemo } from "@demos/semantics/elements";
</script>
