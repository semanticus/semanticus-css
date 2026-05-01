---
title: fieldset
---

<script setup>
import { FieldsetDemo } from "@demos/semantics/elements";
</script>

# &lt;fieldset&gt;

`<fieldset>` groups related form elements together and can optionally include a `<legend>` label.

## Basic Usage

<HtmlPreviewer :code="FieldsetDemo.basic()" />

## Inside a Form

Inputs are `width: 100%` by default and match button sizes for consistent layouts. For label placement and helper text, see [&lt;label&gt;](/docs/semantics/label).

<HtmlPreviewer :code="FieldsetDemo.insideForm()" />

## Disabled

Setting `disabled` on a `<fieldset>` disables all contained form elements.

<HtmlPreviewer :code="FieldsetDemo.disabled()" />

## As a section

<HtmlPreviewer :code="FieldsetDemo.section()" />

## Usage with Group

Use `role="group"` inside a fieldset for inline input+button combinations. See [[role="group"]](/docs/semantics/role-group).

<HtmlPreviewer :code="FieldsetDemo.withGroup()" />

