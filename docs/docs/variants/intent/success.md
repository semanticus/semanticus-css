# Success Intent

The `.success` class provides a visual style for links and buttons that indicate a successful or positive action. Use it to highlight actions that lead to a successful outcome.

## Links

Apply `.success` to `<a>` elements or elements with `[role="link"]` to indicate a successful action.

<HtmlPreviewer :code="SuccessDemo.links()" />

## Buttons

Apply `.success` to `<button>` elements or elements with `[role="button"]` for a success action button.

<HtmlPreviewer :code="SuccessDemo.buttons()" />

## Cards

Apply `.success` to an element with `.card` for a success action card.

<HtmlPreviewer :code="SuccessDemo.cards()" />

## Modifiers

`.success` can be modified with `.subtle` to create cards with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.main({ class: 'success' })" :codeCollapsed="true" />

`.success` can be modified with `.ghost` to create ghost buttons and cards, which have a transparent background and a border, making them less visually prominent while still maintaining the success effect.

<HtmlPreviewer :code="GhostDemo.main({ class: 'success' })" :codeCollapsed="true" />

<script setup>
import { GhostDemo, SubtleDemo } from "@demos/variants/modifiers";
import { SuccessDemo } from "@demos/overviews/variants/intent";
</script>
