# Ghost Modifier

The `.ghost` class creates transparent background buttons with colored text and borders. This "outline" or "ghost" style is useful for secondary actions where you want minimal visual weight.

`.ghost` can be combined with **Intent Variants** like `.secondary`, `.success`, etc. for different color variations.

> [!NOTE] Modifier classes don't had behavior on their own.
> They modify the appearance of base variants like buttons, cards, etc. by adding transparency and colored borders/text.
>
> So in the case of `.card` for example, applying `.ghost` will not had the hover effect of a button, but will make the card background transparent and add colored borders and text.

## Buttons

Apply `.ghost` to `<button>` elements or elements with `[role="button"]`.

<HtmlPreviewer :code="GhostDemo.buttons()" :codeCollapsed="true" />

## Accordions

Apply `.ghost` to accordion `<summary>` elements with `role="button"` for a lighter expandable section style.

<HtmlPreviewer :code="GhostDemo.accordions()" :codeCollapsed="true" />

## Cards

`.ghost` can also be applied to other elements or components, such as cards, to create a transparent background with colored borders and text.

<HtmlPreviewer :code="GhostDemo.cards()" :codeCollapsed="true" />

<script setup>
import { GhostDemo } from "@demos/variants/modifiers";
</script>
