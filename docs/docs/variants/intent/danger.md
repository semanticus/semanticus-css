# Danger Intent

The `.danger` class provides a visual style for links and buttons that indicate a dangerous or negative action. Use it to highlight actions that could have harmful consequences.

## Links

Apply `.danger` to `<a>` elements or elements with `[role="link"]` to indicate a dangerous action.

<HtmlPreviewer :code="DangerDemo.links()" />

## Buttons

Apply `.danger` to `<button>` elements or elements with `[role="button"]` for a danger action button.

<HtmlPreviewer :code="DangerDemo.buttons()" />

## Cards

Apply `.danger` to an element with `.card` for a danger action card.

<HtmlPreviewer :code="DangerDemo.cards()" />

## Modifiers

`.danger` can be modified with `.ghost` to create ghost buttons and cards, which have a transparent background and a border, making them less visually prominent while still maintaining the danger effect.

<HtmlPreviewer :code="GhostDemo.main({ class: 'danger' })" :codeCollapsed="true" />

`.danger` can be modified with `.subtle` to create cards with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.main({ class: 'danger' })" :codeCollapsed="true" />

<script setup>
import { GhostDemo, SubtleDemo } from "@demos/variants/modifiers";
import { DangerDemo } from "@demos/overviews/variants/intent";
</script>
