# Subtle Modifier

The `.subtle` class creates transparent background buttons with colored text and borders. This "outline" or "subtle" style is useful for secondary actions where you want minimal visual weight.

`.subtle` can be combined with **Intent Variants** like `.secondary`, `.success`, etc. for different color variations.

## Buttons

Apply `.subtle` to `<button>` elements:

<HtmlPreviewer :code="SubtleDemo.buttons()" :codeCollapsed="true" />

## Input Buttons

Like `<input type="submit">` and `<input type="reset">`:

<HtmlPreviewer :code="SubtleDemo.inputButtons()" :codeCollapsed="true" />

## Role Buttons

Any HTML element with `[role="button"]`:

<HtmlPreviewer :code="SubtleDemo.roleButtonsAndDropdowns()" :codeCollapsed="true" />

## Cards

`.subtle` can also be applied to other elements or components, such as cards, to create a transparent background with colored borders and text.

<HtmlPreviewer :code="SubtleDemo.cards()" :codeCollapsed="true" />

<script setup>
import { SubtleDemo } from "@demos/overviews/variants/modifiers";
</script>
