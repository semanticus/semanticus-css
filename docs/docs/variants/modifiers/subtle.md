# Subtle Modifier

The `.subtle` class creates transparent background buttons with colored text and borders. This "outline" or "subtle" style is useful for secondary actions where you want minimal visual weight.

`.subtle` can be combined with **Intent Variants** like `.secondary`, `.success`, etc. for different color variations.

## Buttons

Apply `.subtle` to `<button>` elements or elements with `[role="button"]`.

<HtmlPreviewer :code="SubtleDemo.buttons()" :codeCollapsed="true" />

## Accordions

Apply `.subtle` to accordion `<summary>` elements with `role="button"` for a lighter expandable section style.

<HtmlPreviewer :code="SubtleDemo.accordions()" :codeCollapsed="true" />

## Cards

`.subtle` can also be applied to other elements or components, such as cards, to create a transparent background with colored borders and text.

<HtmlPreviewer :code="SubtleDemo.cards()" :codeCollapsed="true" />

<script setup>
import { SubtleDemo } from "@demos/variants/modifiers";
</script>
