---
title: 'role="list"'
---

# [role="list"]

The `role="list"` is used to semantically indicate that a group of related items should be treated as a list, even if they are not implemented using traditional list elements like `<ul>` or `<ol>`.

Each item within the list should have the role of `listitem` to ensure proper semantics and accessibility.

**Semanticus CSS** will stylize elements with `role="list"` and `role="listitem"` the same way it does for `<ul>`, and `<li>` elements, so you can use it to create custom list structures while maintaining consistent styling.

> **Note:** When using `<ul>` or `<ol>`, don't worry about adding `role="list"` or `role="listitem"` to the elements, as these roles are implicit already.

## Basic Usage

<HtmlPreviewer :code="RoleListDemo.main()" />

## Card List

Card lists are implemented by adding the `.card` class to a `<div role="list">` or a `<ul>` element.

You can indicate that a certain item is active by using `aria-current="true"`.

<HtmlPreviewer :code="RoleListDemo.cardList('div', {}, { ariaCurrent: true })" />

### Intent Variants

To convey **intent** and **importance**, card lists can be styled with different variants:

<HtmlPreviewer :code="RoleListDemo.cardListIntentVariants()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background card lists with colored text and borders

<HtmlPreviewer :code="RoleListDemo.cardListIntentVariants('div', {}, 'ghost')" :codeCollapsed="true" />

`.subtle` creates card lists with a more muted appearance.

<HtmlPreviewer :code="RoleListDemo.cardListIntentVariants('div', {}, 'subtle')" :codeCollapsed="true" />

`.striped` creates card lists with alternating background colors for better readability.

<HtmlPreviewer :code="RoleListDemo.cardListIntentVariants('div', {}, 'subtle striped')" :codeCollapsed="true" />

### Variants applied individually to an item

You can also use **variant** classes on individual items to indicate their intent and importance.

<HtmlPreviewer :code="RoleListDemo.overviewCardListItemIntentVariants()" :codeCollapsed="true" />

<script setup>
import { RoleListDemo } from "@demos/semantics";
</script>
