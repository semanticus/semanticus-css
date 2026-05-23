# List Group

List groups are implemented by combining `<ul>` with the `.panel` component class. This creates a vertical list of items that can be used for navigation, selection, or displaying related content.

## Basic Usage

Through the use of `aria-current="true"` you can indicate the current active item in the list group.

<HtmlPreviewer :code="ListGroupDemo.main()" />

## Horizontal Stacking

Wrapping the list group in a `<nav>` element will cause the items to be distributed horizontally instead of vertically.

<HtmlPreviewer :code="ListGroupDemo.horizontalStack()" />

## Variants

### Intent Variants

To convey **intent** and **importance**, list groups can be styled with different variants:

<HtmlPreviewer :code="ListGroupDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.striped` creates list groups with alternating background colors for better readability.

<HtmlPreviewer :code="ListGroupDemo.stripedVariant()" />

`.ghost` creates transparent background list groups with colored text and borders

<HtmlPreviewer :code="ListGroupDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates list groups with a more muted appearance.

<HtmlPreviewer :code="ListGroupDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { ListGroupDemo } from "@demos/composites";
</script>
