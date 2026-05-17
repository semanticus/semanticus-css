# Danger Intent

The `.danger` class provides a visual style for links and buttons that indicate a dangerous or negative action. Use it to highlight actions that could have harmful consequences.

## Links

Apply `.danger` to `<a>` elements or elements with `[role="link"]` to indicate a dangerous action.

<HtmlPreviewer :code="DangerDemo.links()" />

## Buttons

Apply `.danger` to `<button>` elements or elements with `[role="button"]` for a danger action button.

<HtmlPreviewer :code="DangerDemo.buttons()" />

## Cards

Apply `.danger` to `<div>` elements with `.card` for a danger action card.

<HtmlPreviewer :code="DangerDemo.cards()" />

<script setup>
import { DangerDemo } from "@demos/variants/intent";
</script>
