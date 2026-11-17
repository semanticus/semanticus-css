# Pane

`.pane` is a basic building block for creating structured content areas in your UI.
It serves as a container that has `padding` and styles [&lt;header&gt;](/docs/elements/header) and [&lt;footer&gt;](/docs/elements/footer) as well as removes the `margin-top` of the first child `h1`, `h2`, `h3`, `h4`, `h5`, `h6` and `hgroup`.

Use it to group related content together, create sections within a page, or to highlight important information and extend it with different variants and modifiers to suit the needs of your application.

Check out the [.content-grid](/docs/classes/content-grid#full-width) or [Examples](/examples/) pages for examples on how you can use panes in a layout.

## Basic Usage

By default it has no background, so besides it's padding it doesn't add much visual weight.

<HtmlPreviewer :code="PaneDemo.main()"/>

Until you apply a variant or modifier that changes its background or border, the pane remains visually lightweight.

<HtmlPreviewer :code="PaneDemo.withHgroup('div', { class: 'secondary subtle' })"/>

## Pane with Header and Footer

Panes support `<header>` and `<footer>` child elements with distinct background styling.

<HtmlPreviewer :code="PaneDemo.withHeaderAndFooter('div', { class: 'success' })" />

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
