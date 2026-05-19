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

<script setup>
import { SecondaryDemo } from "@demos/variants/intent";
</script>
