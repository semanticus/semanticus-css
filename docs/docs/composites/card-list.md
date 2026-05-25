# Card List

Card lists are implemented by adding the `.card` class to a `<div>` in combination with `[role="list"]`, for vertical stacking or `[role="group"]` for horizontal stacking.

You can indicate that a certain item is active by using `aria-current="true"`.

## Vertical Stacking

In this particular case, since `<ul>` has an implicit role of `list`, you can simply add the `.card` class to the `<ul>` element to create a vertical card list.

<HtmlPreviewer :code="CardListDemo.overview()" />

## Horizontal Stacking

Use `[role="group"]` to indicate that the card list items are part of a related set and should be displayed horizontally.

> **Warning:** Avoid using `[role="group"]` with `<ul>` or `<ol>` elements, as it can interfere with assistive technologies' ability to interpret the list structure correctly. Instead, use a `<div>` or `<section>` with the `.card` class and apply `[role="group"]` to that container.

> **Note:** If what you need is a list of links and buttons, wrap it in a `<nav>` element to preserve the navigation landmark for assistive technologies, see [Pagination](/docs/composites/pagination) for an example.

<HtmlPreviewer :code="CardListDemo.overviewHorizontalStack()" />

## Variants

### Intent Variants

To convey **intent** and **importance**, card lists can be styled with different variants:

<HtmlPreviewer :code="CardListDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.striped` creates card lists with alternating background colors for better readability.

<HtmlPreviewer :code="CardListDemo.stripedVariant()" />

`.ghost` creates transparent background card lists with colored text and borders

<HtmlPreviewer :code="CardListDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates card lists with a more muted appearance.

<HtmlPreviewer :code="CardListDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { CardListDemo } from "@demos/composites";
</script>
