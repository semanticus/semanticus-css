# Warning Intent

The `.warning` class provides a visual style for links and buttons that indicate a warning or cautionary action. Use it to highlight actions that could have potential risks or require careful attention.

## Links

Apply `.warning` to `<a>` elements or elements with `[role="link"]` to indicate a warning action.

<HtmlPreviewer :code="WarningDemo.links()" />

## Buttons

Apply `.warning` to `<button>` elements or elements with `[role="button"]` for a warning action button.

<HtmlPreviewer :code="WarningDemo.buttons()" />

## Cards

Apply `.warning` to an element with `.card` for a warning action card.

<HtmlPreviewer :code="WarningDemo.cards()" />

## Modifiers

`.warning` can be modified with `.ghost` to create ghost buttons and cards, which have a transparent background and a border, making them less visually prominent while still maintaining the warning effect.

<HtmlPreviewer :code="GhostDemo.main({ class: 'warning' })" :codeCollapsed="true" />

`.warning` can be modified with `.subtle` to create cards with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.main({ class: 'warning' })" :codeCollapsed="true" />

<script setup>
import { GhostDemo, SubtleDemo } from "@demos/variants/modifiers";
import { WarningDemo } from "@demos/overviews/variants/intent";
</script>
