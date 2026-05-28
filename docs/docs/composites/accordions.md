# Accordions

Accordions are implemented using the [&lt;details&gt;](/docs/semantics/elements/details) and `<summary>` elements, which provide a native way to create collapsible content sections with keyboard navigation and screen reader support without the need for JavaScript.

## Basic Usage

<HtmlPreviewer :code="AccordionsDemo.main()" />

## Entangled accordions

Set the same `name` attribute on multiple `<details>` elements to create an exclusive accordion where only one can be open at a time.

Use the `open` attribute to expand it by default.

<HtmlPreviewer :code="AccordionsDemo.entangledAccordions()" />

## FAQ Page Example

<HtmlPreviewer :code="AccordionsDemo.faqExample()" />

## As a Button

<HtmlPreviewer :code="AccordionsDemo.asButton()" />

### Intent Variants

To convey **intent** and **importance**, accordions can be styled with different variants:

<HtmlPreviewer :code="AccordionsDemo.asButtonIntentVariants()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background accordions with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="AccordionsDemo.asButtonGhostVariants()" :codeCollapsed="true" />

`.subtle` creates accordions with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="AccordionsDemo.asButtonSubtleVariants()" :codeCollapsed="true" />

<script setup>
import { AccordionsDemo } from "@demos/composites";
</script>
