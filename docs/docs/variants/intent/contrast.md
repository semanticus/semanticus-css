# Contrast Intent

The `.contrast` class provides a high-contrast visual style for links, buttons, and accordion elements. Use it to draw attention or indicate primary actions in high-visibility contexts.

## Links

Apply `.contrast` to `<a>` elements or elements with `[role="link"]` to de-emphasize them.

<HtmlPreviewer :code="ContrastDemo.links()" />

## Buttons

Apply `.contrast` to `<button>` elements or elements with `[role="button"]` for a contrast action button.

<HtmlPreviewer :code="ContrastDemo.buttons()" />

## Cards

Apply `.contrast` to an element with `.card` for a contrast action card.

<HtmlPreviewer :code="ContrastDemo.cards()" :codeCollapsed="true" />

## Modifiers

`.contrast` can be modified with `.subtle` to create cards with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.main({ class: 'contrast' })" :codeCollapsed="true" />

`.contrast` can be modified with `.ghost` to create ghost buttons and cards, which have a transparent background and a border, making them less visually prominent while still maintaining the contrast effect.

<HtmlPreviewer :code="GhostDemo.main({ class: 'contrast' })" :codeCollapsed="true" />

<script setup>
import { GhostDemo, SubtleDemo } from "@demos/variants/modifiers";
import { ContrastDemo } from "@demos/overviews/variants/intent";
</script>
