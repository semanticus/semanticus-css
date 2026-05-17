# Primary Intent

The `.primary` class provides a visual style for links and buttons that indicate a primary action. Use it to highlight actions that are the main focus or most important.

## Links

Apply `.primary` to `<a>` elements or elements with `[role="link"]` to indicate a primary action.

<HtmlPreviewer :code="PrimaryDemo.links()" />

## Buttons

Apply `.primary` to `<button>` elements or elements with `[role="button"]` for a primary action button.

<HtmlPreviewer :code="PrimaryDemo.buttons()" />

## Cards

Apply `.primary` to `<div>` elements with `.card` for a primary action card.

<HtmlPreviewer :code="PrimaryDemo.cards()" />

<script setup>
import { PrimaryDemo } from "@demos/variants/intent";
</script>
