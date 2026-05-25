---
title: 'role="status"'
---

# [role="status"]

Adding `role="status"` to an element will stylize it as an **alert** message, for more examples on how you can combine this role with other attributes and elements to create different types of alerts, check out the [Alerts](/docs/composites/alerts) composite documentation.

> **Accessibility:** This role will let screen readers decide the best time to announce the message, so for typical feedback messages, like `Profile updated` or `Failed to save, please check for validation errors.`, this is the recommended role to use.

For critical messages like `We couldn't reserve your seat due to connection failure. Please check your internet connection.`, or time-sensitive information like `Your reserved seat will be released in 5 minutes.` you can consider using [role="alert"](/docs/semantics/attributes/role-alert) instead.

## Basic Usage

Simply add `role="status"` to any HTML element in combination with **variant** classes to create an inline alert message.

> **Note:** Elements without content will be hidden, this way you can add the element to the DOM from the start and it will only be shown and announced when you update its content, without the need to worry about adding/removing it from the DOM.

<HtmlPreviewer :code="RoleStatusDemo.overview()" />

## Intent Variants

To convey **intent** and **importance**, status messages can be styled with different variants:

<HtmlPreviewer :code="RoleStatusDemo.intentVariants()" :codeCollapsed="true" />

### Modifiers

`.ghost` creates transparent background alerts with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="RoleStatusDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates alerts with a more muted appearance, often used for less prominent notifications.

<HtmlPreviewer :code="RoleStatusDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { RoleStatusDemo } from '@demos/semantics';
import { SubtleDemo, GhostDemo, IntentDemo } from '@demos/variants';
</script>
