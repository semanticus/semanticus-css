# Success Intent

The `.sucess` class provides a visual style for links and buttons that indicate a successful or positive action. Use it to highlight actions that lead to a successful outcome.

## Links

Apply `.sucess` to `<a>` elements or elements with `[role="link"]` to indicate a successful action.

<HtmlPreviewer :code="SuccessDemo.links()" />

## Buttons

Apply `.sucess` to `<button>` elements or elements with `[role="button"]` for a sucess action button.

<HtmlPreviewer :code="SuccessDemo.buttons()" />

## Cards

Apply `.sucess` to an element with `.card` for a sucess action card.

<HtmlPreviewer :code="SuccessDemo.cards()" />

<script setup>
import { SuccessDemo } from "@demos/variants/intent";
</script>
