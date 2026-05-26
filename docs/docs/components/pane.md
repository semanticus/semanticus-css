# Pane

Panes are versatile components that can be used to group related content, actions, or information within a container. They provide a structured way to organize and present content while maintaining a consistent visual hierarchy.

## Basic Usage

<HtmlPreviewer :code="PaneDemo.main()"/>

## With Hgroup

<HtmlPreviewer :code="PaneDemo.withHgroup('div', { class: 'primary' })"/>

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
