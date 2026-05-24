# Card List

The `.card-list` class can be added to a `<ul>`, `<div>`, `<section>`, etc. to create a card containing list items. This component is ideal for displaying collections of related items, such as navigation links, options, or grouped content.

## Basic Usage

Through the use of `aria-current="true"` you can indicate the current active item in the list group.

<HtmlPreviewer :code="CardListDemo.main()" />

## Horizontal Stacking

Wrapping the list group in a `<nav>` element will cause the items to be distributed horizontally instead of vertically.

<HtmlPreviewer :code="CardListDemo.horizontalStack()" />

## Variants

### Intent Variants

To convey **intent** and **importance**, list groups can be styled with different variants:

<HtmlPreviewer :code="CardListDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.striped` creates list groups with alternating background colors for better readability.

<HtmlPreviewer :code="CardListDemo.stripedVariant()" />

`.ghost` creates transparent background list groups with colored text and borders

<HtmlPreviewer :code="CardListDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates list groups with a more muted appearance.

<HtmlPreviewer :code="CardListDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { CardListDemo } from "@demos/components";
</script>
