---
title: ul
---

# &lt;ul&gt;

The `<ul>` element is used as a building block for composites like [Card List](/docs/composites/card-list), and others.

> **Important:** Assistive technologies implicitly add the `role="list"` to the `<ul>` element, so unless the list is inside some kind of application widget, like a menu, it's best not to combine them with other roles like `role="group"`.

## Basic Usage

<HtmlPreviewer :code="UlDemo.main()" />

## Card List

Card lists are implemented by adding the `.card` class to a `<div role="list">` or a `<ul>` element.

You can indicate that a certain item is active by using `aria-current="true"`.

<HtmlPreviewer :code="UlDemo.cardList()" />

### Intent Variants

To convey **intent** and **importance**, card lists can be styled with different variants:

<HtmlPreviewer :code="UlDemo.cardListIntentVariants()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background card lists with colored text and borders

<HtmlPreviewer :code="UlDemo.cardListIntentVariants('div', {}, 'ghost')" :codeCollapsed="true" />

`.subtle` creates card lists with a more muted appearance.

<HtmlPreviewer :code="UlDemo.cardListIntentVariants('div', {}, 'subtle')" :codeCollapsed="true" />

`.striped` creates card lists with alternating background colors for better readability.

<HtmlPreviewer :code="UlDemo.cardListIntentVariants('div', {}, 'subtle striped')" :codeCollapsed="true" />

### Variants applied individually to an item

You can also use **variant** classes on individual items to indicate their intent and importance.

<HtmlPreviewer :code="UlDemo.overviewCardListItemIntentVariants()" :codeCollapsed="true" />

<script setup>
import { UlDemo } from "@demos/semantics";
</script>
