# Subtle Modifier

The `.subtle` class creates elements with a muted, reduced-opacity background and softened colors. This style is useful for secondary actions where you want a subdued but still contextually colored appearance.

`.subtle` can be combined with **Intent Variants** like `.secondary`, `.success`, etc. for different color variations.

## Buttons

Apply `.subtle` to `<button>` elements:

<HtmlPreviewer :code="ButtonDemo.subtleVariants()" :codeCollapsed="true" />

## Input Buttons

Like `<input type="submit">` and `<input type="reset">`:

<HtmlPreviewer :code="SubtleDemo.overviewInputButtons()" :codeCollapsed="true" />

## Role Buttons

Any HTML element with `[role="button"]`:

<HtmlPreviewer :code="SubtleDemo.overviewRoleButtonsAndDropdowns()" :codeCollapsed="true" />

## Cards

`.subtle` can also be applied to other elements or components, such as cards, to create a transparent background with colored borders and text.

<HtmlPreviewer :code="CardDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { CardDemo } from "@demos/components";
import { ButtonDemo } from "@demos/semantics";
import { SubtleDemo } from "@demos/variants";
</script>
