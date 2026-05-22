# Subtle Modifier

The `.subtle` class creates transparent background buttons with colored text and borders. This "outline" or "subtle" style is useful for secondary actions where you want minimal visual weight.

`.subtle` can be combined with **Intent Variants** like `.secondary`, `.success`, etc. for different color variations.

## Buttons

Apply `.subtle` to `<button>` elements:

<HtmlPreviewer :code="SubtleDemo.overviewButtons()" :codeCollapsed="true" />

## Input Buttons

Like `<input type="submit">` and `<input type="reset">`:

<HtmlPreviewer :code="SubtleDemo.overviewInputButtons()" :codeCollapsed="true" />

## Role Buttons

Any HTML element with `[role="button"]`:

<HtmlPreviewer :code="SubtleDemo.overviewRoleButtonsAndDropdowns()" :codeCollapsed="true" />

## Cards

`.subtle` can also be applied to other elements or components, such as cards, to create a transparent background with colored borders and text.

<HtmlPreviewer :code="SubtleDemo.overviewCards()" :codeCollapsed="true" />

<script setup>
import { SubtleDemo } from "@demos/variants";
</script>
