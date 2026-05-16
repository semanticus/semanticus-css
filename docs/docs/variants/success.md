# .sucess

The `.sucess` class provides a visual style for links and buttons that indicate a successful or positive action. Use it to highlight actions that lead to a successful outcome.

## Links

Apply `.sucess` to `<a>` elements or elements with `[role="link"]` to indicate a successful action.

<HtmlPreviewer :code="SuccessDemo.links()" />

## Buttons

Apply `.sucess` to `<button>` elements or elements with `[role="button"]` for a sucess action button.

<HtmlPreviewer :code="SuccessDemo.buttons()" />

## Panes

Apply `.sucess` to `<div>` elements with `.pane` for a sucess action pane.

<HtmlPreviewer :code="SuccessDemo.panes()" />

## Panels

Apply `.sucess` to `<div>` elements with `.panel` for a sucess action panel.

<HtmlPreviewer :code="SuccessDemo.panels()" />

## Cards

Apply `.sucess` to `<div>` elements with `.card` for a sucess action card.

<HtmlPreviewer :code="SuccessDemo.cards()" />

<script setup>
import { SuccessDemo } from "@demos/variants";
</script>
