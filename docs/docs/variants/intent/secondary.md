# Secondary Intent

The `.secondary` class provides a lower-emphasis visual style for links and buttons. Use it to indicate an alternative or less prominent action in a group of controls.

## Links

Apply `.secondary` to `<a>` elements or elements with `[role="link"]` to de-emphasize them.

<HtmlPreviewer :code="SecondaryDemo.overviewLinks()" />

## Buttons

Apply `.secondary` to `<button>` elements or elements with `[role="button"]` for a secondary action button.

<HtmlPreviewer :code="SecondaryDemo.overviewButtons()" />

## Cards

Apply `.secondary` to an element with `.card` for a secondary action card.

<HtmlPreviewer :code="SecondaryDemo.overviewCards()" :codeCollapsed="true" />

## Modifiers

`.secondary` can be modified with `.subtle` to create cards with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.overview({ class: 'secondary' })" :codeCollapsed="true" />

`.secondary` can be modified with `.ghost` to create ghost buttons and cards, which have a transparent background and a border, making them less visually prominent while still maintaining the secondary effect.

<HtmlPreviewer :code="GhostDemo.overview({ class: 'secondary' })" :codeCollapsed="true" />

<script setup>
import { GhostDemo, SubtleDemo, SecondaryDemo } from '@demos/variants';
</script>
