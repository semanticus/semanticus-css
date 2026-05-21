# Ghost Modifier

The `.ghost` class creates transparent background buttons with colored text and borders. This "outline" or "ghost" style is useful for secondary actions where you want minimal visual weight.

`.ghost` can be combined with **Intent Variants** like `.secondary`, `.success`, etc. for different color variations.

## Buttons

Apply `.ghost` to `<button>` elements:

<HtmlPreviewer :code="GhostDemo.buttons()" :codeCollapsed="true" />

## Input Buttons

Like `<input type="submit">` and `<input type="reset">`:

<HtmlPreviewer :code="GhostDemo.inputButtons()" :codeCollapsed="true" />

## Role Buttons

Any HTML element with `[role="button"]`:

<HtmlPreviewer :code="GhostDemo.roleButtonsAndDropdowns()" :codeCollapsed="true" />

## Cards

`.ghost` can also be applied to other elements or components, such as cards, to create a transparent background with colored borders and text.

<HtmlPreviewer :code="GhostDemo.cards()" :codeCollapsed="true" />

<script setup>
import { GhostDemo } from "@demos/overviews/variants/modifiers";
</script>
