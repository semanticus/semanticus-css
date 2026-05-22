# Info Intent

The `.info` class provides a visual style for links and buttons that indicate an informational action. Use it to highlight actions that provide additional information or context.

## Links

Apply `.info` to `<a>` elements or elements with `[role="link"]` to indicate an informational action.

<HtmlPreviewer :code="InfoDemo.overviewLinks()" />

## Buttons

Apply `.info` to `<button>` elements or elements with `[role="button"]` for an info action button.

<HtmlPreviewer :code="InfoDemo.overviewButtons()" />

## Cards

Apply `.info` to an element with `.card` for an info action card.

<HtmlPreviewer :code="InfoDemo.overviewCards()" :codeCollapsed="true" />

## Modifiers

`.info` can be modified with `.subtle` to create cards with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.overview({ class: 'info' })" :codeCollapsed="true" />

`.info` can be modified with `.ghost` to create ghost buttons and cards, which have a transparent background and a border, making them less visually prominent while still maintaining the info effect.

<HtmlPreviewer :code="GhostDemo.overview({ class: 'info' })" :codeCollapsed="true" />


<script setup>
import { GhostDemo, SubtleDemo, InfoDemo } from '@demos/variants';
</script>
