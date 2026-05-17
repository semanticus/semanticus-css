# Contrast Intent

The `.contrast` class provides a high-contrast visual style for links, buttons, and accordion elements. Use it to draw attention or indicate primary actions in high-visibility contexts.

## Links

Apply `.contrast` to `<a>` elements or elements with `[role="link"]` to de-emphasize them.

<HtmlPreviewer :code="ContrastDemo.links()" />

## Buttons

Apply `.contrast` to `<button>` elements or elements with `[role="button"]` for a contrast action button.

<HtmlPreviewer :code="ContrastDemo.buttons()" />

## Cards

Apply `.contrast` to `<div>` elements with `.card` for a contrast action card.

<HtmlPreviewer :code="ContrastDemo.cards()" />

<script setup>
import { ContrastDemo } from "@demos/variants/intent";
</script>
