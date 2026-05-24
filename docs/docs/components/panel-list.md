# Panel List

The `.panel-list` class can be added to a `<ul>`, `<div>`, `<section>`, etc. to create a panel containing list items. This component is ideal for displaying collections of related items, such as navigation links, options, or grouped content.

## Basic Usage

Through the use of `aria-current="true"` you can indicate the current active item in the list group.

<HtmlPreviewer :code="PanelListDemo.main()" />

## Horizontal Stacking

Wrapping the list group in a `<nav>` element will cause the items to be distributed horizontally instead of vertically.

<HtmlPreviewer :code="PanelListDemo.horizontalStack()" />

## Variants

### Intent Variants

To convey **intent** and **importance**, list groups can be styled with different variants:

<HtmlPreviewer :code="PanelListDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.striped` creates list groups with alternating background colors for better readability.

<HtmlPreviewer :code="PanelListDemo.stripedVariant()" />

`.ghost` creates transparent background list groups with colored text and borders

<HtmlPreviewer :code="PanelListDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates list groups with a more muted appearance.

<HtmlPreviewer :code="PanelListDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { PanelListDemo } from "@demos/components";
</script>
