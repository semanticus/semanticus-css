# Secondary Intent

The `.secondary` class provides a lower-emphasis visual style for links and buttons. Use it to indicate an alternative or less prominent action in a group of controls.

## Links

Apply `.secondary` to `<a>` elements or elements with `[role="link"]` to de-emphasize them.

<HtmlPreviewer :code="SecondaryDemo.links()" />

## Buttons

Apply `.secondary` to `<button>` elements or elements with `[role="button"]` for a secondary action button.

<HtmlPreviewer :code="SecondaryDemo.buttons()" />

## Cards

Apply `.secondary` to an element with `.card` for a secondary action card.

<HtmlPreviewer :code="SecondaryDemo.cards()" />

## Modifiers

`.secondary` can be modified with `.ghost` to create ghost buttons and cards, which have a transparent background and a border, making them less visually prominent while still maintaining the secondary effect.

<HtmlPreviewer :code="GhostDemo.main({ class: 'secondary' })" :codeCollapsed="true" />

`.secondary` can be modified with `.subtle` to create cards with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.main({ class: 'secondary' })" :codeCollapsed="true" />

<script setup>
import { GhostDemo, SubtleDemo } from "@demos/variants/modifiers";
import { SecondaryDemo } from "@demos/overviews/variants/intent";
</script>
