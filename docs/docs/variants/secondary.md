# .secondary

The `.secondary` class provides a lower-emphasis visual style for links and buttons. Use it to indicate an alternative or less prominent action in a group of controls.

## Links

Apply `.secondary` to `<a>` elements or elements with `[role="link"]` to de-emphasize them.

<HtmlPreviewer :code="SecondaryDemo.links()" />

## Buttons

Apply `.secondary` to `<button>` elements or elements with `[role="button"]` for a secondary action button.

<HtmlPreviewer :code="SecondaryDemo.buttons()" />

## Panes

Apply `.secondary` to `<div>` elements with `.pane` for a secondary action pane.

<HtmlPreviewer :code="SecondaryDemo.panes()" />

## Panels

Apply `.secondary` to `<div>` elements with `.panel` for a secondary action panel.

<HtmlPreviewer :code="SecondaryDemo.panels()" />

## Cards

Apply `.secondary` to `<div>` elements with `.card` for a secondary action card.

<HtmlPreviewer :code="SecondaryDemo.cards()" />

<script setup>
import { SecondaryDemo } from "@demos/variants";
</script>
