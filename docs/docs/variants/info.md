# .info

The `.info` class provides a visual style for links and buttons that indicate an informational action. Use it to highlight actions that provide additional information or context.

## Links

Apply `.info` to `<a>` elements or elements with `[role="link"]` to indicate an informational action.

<HtmlPreviewer :code="InfoDemo.links()" />

## Buttons

Apply `.info` to `<button>` elements or elements with `[role="button"]` for a info action button.

<HtmlPreviewer :code="InfoDemo.buttons()" />

## Panes

Apply `.info` to `<div>` elements with `.pane` for a info action pane.

<HtmlPreviewer :code="InfoDemo.panes()" />

## Panels

Apply `.info` to `<div>` elements with `.panel` for a info action panel.

<HtmlPreviewer :code="InfoDemo.panels()" />

## Cards

Apply `.info` to `<div>` elements with `.card` for a info action card.

<HtmlPreviewer :code="InfoDemo.cards()" />

<script setup>
import { InfoDemo } from "@demos/variants";
</script>
