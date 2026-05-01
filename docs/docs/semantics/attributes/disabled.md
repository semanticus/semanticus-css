---
title: [disabled]
---

<script setup>
import { DisabledDemo } from "@demos/semantics/attributes";
</script>

# [disabled]

The `disabled` attribute prevents interaction with a form element and removes it from the keyboard tab order, communicated to assistive technologies as unavailable.

## Basic Usage

<HtmlPreviewer :code="DisabledDemo.basic" />

## Input

<HtmlPreviewer :code="DisabledDemo.input" />

### Range

<HtmlPreviewer :code="DisabledDemo.range" />

## Select

<HtmlPreviewer :code="DisabledDemo.select" />

## Switch

<HtmlPreviewer :code="DisabledDemo.switch_" />

## Textarea

<HtmlPreviewer :code="DisabledDemo.textarea" />
