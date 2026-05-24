# Panels

Are implemented by `.card` component that stylizes containers, ideal for grouping content in a visually distinct way.

## Basic Usage

<HtmlPreviewer :code="CardDemo.main()"/>

## Hero section

Combine it with **modifier variants** and **utility classes** to create various styles like a hero section.

<HtmlPreviewer :code="CardDemo.heroSection({ class: 'primary subtle' })"/>

## Variants

### Intent Variants

To convey **intent** and **importance**, panes can be styled with different variants:

<HtmlPreviewer :code="CardDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.subtle` creates panes with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="CardDemo.subtleVariants()" :codeCollapsed="true" />

`.ghost` creates transparent background panes with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="CardDemo.ghostVariants()" :codeCollapsed="true" />


<script setup>
import { CardDemo } from "@demos/components";
</script>
