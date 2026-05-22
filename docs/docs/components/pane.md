# Pane

Similar to `.card`, but without the **shadow**, **border** and **radius**. The `.pane` class creates a stylized container, ideal for grouping content in a visually distinct way.

## Basic Usage

<HtmlPreviewer :code="PaneDemo.main()"/>

## Hero section

Combine it with **modifier variants** and **utility classes** to create various styles like a hero section.

<HtmlPreviewer :code="PaneDemo.heroSection({ class: 'primary subtle' })"/>

## Variants

### Intent Variants

To convey **intent** and **importance**, panes can be styled with different variants:

<HtmlPreviewer :code="PaneDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.subtle` creates panes with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="PaneDemo.subtleVariants()" :codeCollapsed="true" />

`.ghost` creates transparent background panes with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="PaneDemo.ghostVariants()" :codeCollapsed="true" />


<script setup>
import { PaneDemo } from "@demos/components";
</script>
