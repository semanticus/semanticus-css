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

Use a [Close Button](/docs/composites/buttons#close-button) inside a `<nav>`, which will justify its contents to the left and right, to create an alert message with a close button.

<HtmlPreviewer :code="RoleAlertDemo.withCloseButton()" />

## As Toast

Add the `popover` attribute to the element, and set the `data-placement` attribute to specify where the toast should appear on the screen, and make use of the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API), for basic open/close behavior, follow these steps:

1. Give your HTML element a unique `id` attribute
2. Add the `popover` attribute plus the `role="alert"` and `data-placement` attributes to specify where the toast should appear on the screen.
3. Create an opening button with `popovertarget="your-modal-id"` (alternatively, you can use JS to `document.querySelector('#your-modal-id').showPopover()`)
4. The toast will display at the designated position

<HtmlPreviewer :code="RoleAlertDemo.overviewShowToasts()" :codeCollapsed="true" />

## With title and description

<HtmlPreviewer :code="RoleAlertDemo.withHgroup()" />

## Intent Variants

To convey **intent** and **importance**, alert messages can be styled with different variants:

<HtmlPreviewer :code="RoleAlertDemo.intentVariants()" />

### Modifiers

`.ghost` creates transparent background alerts with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="RoleAlertDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates alerts with a more muted appearance, often used for less prominent notifications.

<HtmlPreviewer :code="RoleAlertDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { RoleAlertDemo } from '@demos/semantics';
import { SubtleDemo, GhostDemo, IntentDemo } from '@demos/variants';
</script>
