# List Group

List groups are built with `<ul>` and `<li>` elements, and by adding `role="group"` to the `<ul>`, you can create a list group that is accessible and semantically correct.

## Basic Usage

Through the use of `aria-current="true"` you can indicate the current active item in the list group.

<HtmlPreviewer :code="ListGroupDemo.main()" />

## Variants

### Intent Variants

To convey **intent** and **importance**, list groups can be styled with different variants:

<HtmlPreviewer :code="ListGroupDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background list groups with colored text and borders

<HtmlPreviewer :code="ListGroupDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates list groups with a more muted appearance.

<HtmlPreviewer :code="ListGroupDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { ListGroupDemo } from "@demos/composites";
</script>
