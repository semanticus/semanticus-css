---
title: 'role="alert"'
---

# [role="alert"]

Adding `role="alert"` to an element will stylize it as an **alert** message, for more examples on how you can combine this role with other attributes and elements to create different types of alerts, check out the [Alerts](/docs/composites/alerts) composite documentation.

> **Accessibility:** This role will make screen readers interrupt their current reading to announce the alert message, so it should be used only for critical messages like `We couldn't reserve your seat due to connection failure. Please check your internet connection.`, or time-sensitive information like `Your reserved seat will be released in 5 minutes.`.

For typical feedback messages, like `Profile updated` or `Failed to save, please check for validation errors.` the recommended role is [role="status"](/docs/semantics/attributes/role-status).

## Basic Usage

Simply add `role="alert"` to any HTML element in combination with **variant** classes to create an inline alert message.

> **Note:** Elements without content will be hidden, this way you can add the element to the DOM from the start and it will only be shown and announced when you update its content, without the need to worry about adding/removing it from the DOM.

<HtmlPreviewer :code="RoleAlertDemo.overview()" />

## Intent Variants

To convey **intent** and **importance**, alert messages can be styled with different variants:

<HtmlPreviewer :code="RoleAlertDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background alerts with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="RoleAlertDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates alerts with a more muted appearance, often used for less prominent notifications.

<HtmlPreviewer :code="RoleAlertDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { RoleAlertDemo } from '@demos/semantics';
import { SubtleDemo, GhostDemo, IntentDemo } from '@demos/variants';
</script>
