---
title: progress
---

# &lt;progress&gt;

The `<progress>` element visually represents task completion.

Use the `value` and `max` attributes to set progress, or omit `value` for an indeterminate state.

Pair with a `<label>` to give it an accessible name for screen readers.

## Basic Usage

<HtmlPreviewer :code="ProgressDemo.main()" />

## Indeterminate Progress

<HtmlPreviewer :code="ProgressDemo.indeterminate()" />

## Progress with Label

<HtmlPreviewer :code="ProgressDemo.withLabel()" />

## Variants

### Intent Variants

To convey **intent** and **importance**, progress bars can be styled with different variants:

<HtmlPreviewer :code="ProgressDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.subtle` creates progress bars with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="ProgressDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { ProgressDemo } from "@demos/semantics/elements";
</script>
