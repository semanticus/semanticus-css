# Card

Cards are implemented using the `.card` class, which extends the [.pane](/docs/classes/pane) class, by adding background, border-radius, and just like `.pane`, it styles [&lt;header&gt;](/docs/elements/header) and [&lt;footer&gt;](/docs/elements/footer) as well as removes the `margin-top` of the first child `h1`, `h2`, `h3`, `h4`, `h5`, `h6` and `hgroup`.

## Basic Usage

<HtmlPreviewer :code="CardDemo.main()" />

## Card with Header and Footer

Cards support `<header>` and `<footer>` child elements with distinct background styling.

<HtmlPreviewer :code="CardDemo.withHeaderAndFooter()" />

## Variants

### Intent Variants

To convey **intent** and **importance**, cards can be styled with different variants:

<HtmlPreviewer :code="CardDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.subtle` creates cards with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="CardDemo.subtleVariants()" :codeCollapsed="true" />

`.ghost` creates transparent background cards with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="CardDemo.ghostVariants()" :codeCollapsed="true" />

<script setup>
import { CardDemo } from "@demos/components";
</script>
