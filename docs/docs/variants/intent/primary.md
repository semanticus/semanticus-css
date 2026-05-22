# Primary Intent

The `.primary` class provides a visual style for links and buttons that indicate a primary action. Use it to highlight actions that are the main focus or most important.

## Links

Apply `.primary` to `<a>` elements or elements with `[role="link"]` to indicate a primary action.

<HtmlPreviewer :code="PrimaryDemo.overviewLinks()" />

## Buttons

Apply `.primary` to `<button>` elements or elements with `[role="button"]` for a primary action button.

<HtmlPreviewer :code="PrimaryDemo.overviewButtons()" />

## Cards

Apply `.primary` to an element with `.card` for a primary action card.

<HtmlPreviewer :code="PrimaryDemo.overviewCards()" :codeCollapsed="true" />

## Modifiers

`.primary` can be modified with `.subtle` to create cards with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.overview({ class: 'primary' })" :codeCollapsed="true" />

`.primary` can be modified with `.ghost` to create ghost buttons and cards, which have a transparent background and a border, making them less visually prominent while still maintaining the primary effect.

<HtmlPreviewer :code="GhostDemo.overview({ class: 'primary' })" :codeCollapsed="true" />

<script setup>
import { GhostDemo, SubtleDemo, PrimaryDemo } from '@demos/variants';
</script>
