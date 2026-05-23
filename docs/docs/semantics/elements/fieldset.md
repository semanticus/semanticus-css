---
title: fieldset
---

# &lt;fieldset&gt;

`<fieldset>` groups related form elements together and can optionally include a `<legend>` label.

You can also combine it with `[role="group"]` and `[role="search"]`, to make use of the **ARIA** roles while adding a group styling it.

## With a Form Input

<HtmlPreviewer :code="FieldsetDemo.formInput()" />

## Input Search Group

For more search examples see [Search](/docs/composites/search) documentation.

<HtmlPreviewer :code="FieldsetDemo.searchInputButton()" />

## Input Button Group

<HtmlPreviewer :code="FieldsetDemo.groupInputButton()" />

## Select Button Group

<HtmlPreviewer :code="FieldsetDemo.groupSelectButton()" />

## Dropdown Button Group

<HtmlPreviewer :code="FieldsetDemo.groupDropdownButton()" />

## Multiple Inputs Group

<HtmlPreviewer :code="FieldsetDemo.groupMultipleInputs()" />

## Form Example

Inputs are `width: 100%` by default and match button sizes for consistent layouts. For label placement and helper text, see [&lt;label&gt;](/docs/semantics/elements/label).

<HtmlPreviewer :code="FieldsetDemo.formExample()" />

## Disabled

Setting `disabled` on a `<fieldset>` disables all contained form elements.

<HtmlPreviewer :code="FieldsetDemo.disabled()" />

## As a section

<HtmlPreviewer :code="FieldsetDemo.section()" />

<script setup>
import { FieldsetDemo } from "@demos/semantics/elements";
</script>
