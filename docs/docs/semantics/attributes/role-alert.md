---
title: 'role="alert"'
---

# [role="alert"]

Adding `role="alert"` to an element will stylize it as an **alert** component and make it accessible to screen readers as an alert message.

> **Accessibility:** Whenever you need to provide critical announcements, like **error** and **warning** messages, `role="alert"`, that require immediate attention, should be used.

- Please keep in mind that this role will make screen readers interrupt their current reading to announce the alert message, so it should be used only for important and time-sensitive information.

- For less sensitive information, consider using [[role="status"]](/docs/semantics/attributes/role-status) instead, which will wait until the user finishes their current reading before announcing the message.

## Basic Usage

<HtmlPreviewer :code="RoleAlertDemo.main('div', { 'aria-live': 'polite' })" />

## With Close Button

Use a [Close Button](/docs/composites/close-button) inside a `<nav>`, which will justify its contents to the left and right, to create an alert message with a close button.

<HtmlPreviewer :code="RoleAlertDemo.withCloseButton()" />

## With title and description

<HtmlPreviewer :code="RoleAlertDemo.withHgroup()" />

## Intent Variants

To convey **intent** and **importance**, alert messages can be styled with different variants:

<HtmlPreviewer :code="RoleAlertDemo.intentVariants()" />

### Modifiers

`.ghost` creates transparent background buttons with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="RoleAlertDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates buttons with a more muted appearance, often used for less prominent actions.

<HtmlPreviewer :code="RoleAlertDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { RoleAlertDemo } from '@demos/semantics';
import { SubtleDemo, GhostDemo, IntentDemo } from '@demos/variants';
</script>
