# Success Intent

The `.success` class provides a visual style for links and buttons that indicate a successful or positive action. Use it to highlight actions that lead to a successful outcome.

## Links

Apply `.success` to `<a>` elements or elements with `[role="link"]` to indicate a successful action.

<HtmlPreviewer :code="SuccessDemo.overviewLinks()" />

## Buttons

Apply `.success` to `<button>` elements or elements with `[role="button"]` for a success action button.

<HtmlPreviewer :code="SuccessDemo.overviewButtons()" />

## Cards

Apply `.success` to an element with `.card` for a success action card.

<HtmlPreviewer :code="SuccessDemo.overviewCards()" :codeCollapsed="true" />

## Modifiers

`.success` can be modified with `.subtle` to create cards with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.overview({ class: 'success' })" :codeCollapsed="true" />

`.success` can be modified with `.ghost` to create ghost buttons and cards, which have a transparent background and a border, making them less visually prominent while still maintaining the success effect.

<HtmlPreviewer :code="GhostDemo.overview({ class: 'success' })" :codeCollapsed="true" />

<script setup>
import { GhostDemo, SubtleDemo, SuccessDemo } from '@demos/variants';
</script>
