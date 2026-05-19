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

<script setup>
import { WarningDemo } from "@demos/variants/intent";
</script>
