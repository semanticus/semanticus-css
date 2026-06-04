# Pane

`.pane` is a basic building block for creating structured content areas in your UI. It serves as a container that has `padding`, `margin-bottom` and a `background-color`.

Use it to group related content together, create sections within a page, or to highlight important information and extend it with different variants and modifiers to suit the needs of your application.

Check out the [.content-grid](/docs/components/content-grid#full-width) or [Examples](/examples/) pages for examples on how you can use panes in a layout.

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
