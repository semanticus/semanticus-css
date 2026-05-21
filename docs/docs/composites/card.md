# Card

Cards are implemented using the `.card` class. This class can be applied to any semantic element like `<article>`, `<div>`, or `<section>`.

## Basic Usage

<HtmlPreviewer :code="CardDemo.main()" />

## Card with Header and Footer

Cards support `<header>` and `<footer>` child elements with distinct background styling.

<HtmlPreviewer :code="CardDemo.withHeaderAndFooter()" />

## Using with Different Elements

The `.card` class works on any semantic element. Choose the element that best matches your content's meaning:

<HtmlPreviewer :code="CardDemo.htmlElements()" />

## Variants

### Intent Variants

To convey **intent** and **importance**, cards can be styled with different variants:

<HtmlPreviewer :code="IntentDemo.cards()" :codeCollapsed="true" />

### Modifiers

`.subtle` creates cards with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.cards()" :codeCollapsed="true" />

`.ghost` creates transparent background cards with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="GhostDemo.cards()" :codeCollapsed="true" />

<script setup>
import { CardDemo } from "@demos/components";
import { GhostDemo, SubtleDemo } from "@demos/overviews/variants/modifiers";
import { IntentDemo } from '@demos/variants';
</script>
