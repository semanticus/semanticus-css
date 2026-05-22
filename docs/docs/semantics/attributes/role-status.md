---
title: 'role="status"'
---

# [role="status"]

Adding `role="status"` to an element will stylize it as an **alert** component and make it accessible to screen readers as a status message.

> **Accessibility:** Whenever you need to provide non-critical announcements, like **success** and **info** messages, `role="status"` should be used.
>
> Also, consider adding `aria-live="polite"` which ensures that screen readers will wait until the user finishes whatever they are currently reading before announcing the status message.

## Basic Usage

<HtmlPreviewer :code="RoleStatusDemo.main('div', { 'aria-live': 'polite' })" />

## With Close Button

<HtmlPreviewer :code="RoleStatusDemo.withCloseButton('div', { 'aria-live': 'polite' })" />

## Intent Variants

To convey **intent** and **importance**, status messages can be styled with different variants:

<HtmlPreviewer :code="RoleStatusDemo.intentVariants()" />

### Modifiers

`.ghost` creates transparent background buttons with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="RoleStatusDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates buttons with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="RoleStatusDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { RoleStatusDemo } from '@demos/semantics';
import { SubtleDemo, GhostDemo, IntentDemo } from '@demos/variants';
</script>
