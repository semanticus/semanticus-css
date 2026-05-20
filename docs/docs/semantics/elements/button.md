---
title: button
---

# &lt;button&gt;

The `<button>` element is a native interactive control that is keyboard-accessible and focusable by default, requiring no additional ARIA.

On how to turn non-button elements into buttons, see [[role="button"]](/docs/semantics/attributes/role-button).

## Basic Usage

<HtmlPreviewer :code="ButtonDemo.main()" />

## Variants

### Intent Variants

To convey **intent** and **importance**, buttons can be styled with different variants. The default variant is `.primary`, which is used for the most important actions on a page, but there are also:

<HtmlPreviewer :code="IntentDemo.buttons()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background buttons with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="GhostDemo.buttons()" :codeCollapsed="true" />

`.subtle` creates buttons with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="SubtleDemo.buttons()" :codeCollapsed="true" />

<script setup>
import { ButtonDemo } from "@demos/semantics/elements";
import { GhostDemo, SubtleDemo } from "@demos/overviews/variants/modifiers";
import { IntentDemo } from '@demos/overviews/variants';
</script>
