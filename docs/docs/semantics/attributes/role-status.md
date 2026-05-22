---
title: 'role="status"'
---

# [role="status"]

Adding `role="status"` to an element will stylize it as an **alert** component and make it accessible to screen readers as a status message.

> **Accessibility:** Whenever you need to provide non-critical announcements, like **success** and **info** messages, `role="status"` should be used.

## Basic Usage

<HtmlPreviewer :code="RoleStatusDemo.main('div', { 'aria-live': 'polite' })" />

## With Close Button

Use a [Close Button](/docs/composites/close-button) inside a `<nav>`, which will justify its contents to the left and right, to create a status message with a close button.

<HtmlPreviewer :code="RoleStatusDemo.withCloseButton()" />

## As Toast

Add the `popover` attribute to the element, and set the `data-placement` attribute to specify where the toast should appear on the screen.

<HtmlPreviewer :code="RoleStatusDemo.showToast('div', { class: 'success', 'data-placement': 'top-center' }, 'Item saved successfully!')" />

## With title and description

<HtmlPreviewer :code="RoleStatusDemo.withHgroup()" />

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
