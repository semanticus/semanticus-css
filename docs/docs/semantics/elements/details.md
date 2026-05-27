---
title: details
---

# &lt;details&gt;

The `<details>` element creates a native disclosure widget aka **accordion** — a collapsible section that users can open and close without JavaScript. Its `<summary>` child acts as the visible label and toggle control.

`<details>` is also used as a building block for **dropdowns**, which are described in the [Dropdown section](/docs/composites/dropdown) below.

## Basic Usage

<HtmlPreviewer :code="DetailsDemo.main()" />

## Entangled accordions

Set the same `name` attribute on multiple `<details>` elements to create an exclusive accordion where only one can be open at a time.

Use the `open` attribute to expand it by default.

<HtmlPreviewer :code="DetailsDemo.entangledAccordions()" />

## FAQ Page Example

<HtmlPreviewer :code="DetailsDemo.faqExample()" />

## As a Button

<HtmlPreviewer :code="DetailsDemo.asButton()" />

### Intent Variants

To convey **intent** and **importance**, accordions can be styled with different variants:

<HtmlPreviewer :code="DetailsDemo.asButtonIntentVariants()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background accordions with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="DetailsDemo.asButtonGhostVariants()" :codeCollapsed="true" />

`.subtle` creates accordions with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="DetailsDemo.asButtonSubtleVariants()" :codeCollapsed="true" />

<script setup>
import { DetailsDemo } from "@demos/semantics/elements";
</script>
