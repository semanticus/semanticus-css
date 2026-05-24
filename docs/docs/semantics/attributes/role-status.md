---
title: 'role="status"'
---

# [role="status"]

Adding `role="status"` to an element will stylize it as an **alert** component and make it accessible to screen readers as a status message.

> **Accessibility:** Whenever you need to provide non-critical announcements, like **success** and **info** messages, `role="status"` should be used.

## Basic Usage

<HtmlPreviewer :code="RoleStatusDemo.main()" />

## With Close Button

`role="status"` will stretch the first child and let the second child fit its content, so in order for the text to take up the remaining space we need to wrap it in an element (like `<p>`), and then we can add a [Close Button](/docs/composites/buttons#close-button) as the second child.

<HtmlPreviewer :code="RoleStatusDemo.withCloseButton()" />

## With an Icon and a Close Button

Similarly to the previous example, but with an [icon](/docs/components/icons) added to the left of the text.

In case of 3 children, the first and last will fit their content, and the middle one will take up the remaining space.

<HtmlPreviewer :code="RoleStatusDemo.withIconAndCloseButton()" />

## As Toast

Add the `popover` attribute to the element, and set the `data-placement` attribute to specify where the toast should appear on the screen, and make use of the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API), for basic open/close behavior, follow these steps:

1. Give your HTML element a unique `id` attribute
2. Add the `popover` attribute plus the `role="status"` and `data-placement` attributes to specify where the toast should appear on the screen.
3. Create an opening button with `popovertarget="your-modal-id"` (alternatively, you can use JS to `document.querySelector('#your-modal-id').showPopover()`)
4. The toast will display at the designated position

<HtmlPreviewer :code="RoleStatusDemo.overviewShowToasts()" :codeCollapsed="true" />

## With title and description

<HtmlPreviewer :code="RoleStatusDemo.withHgroup()" />

## Intent Variants

To convey **intent** and **importance**, status messages can be styled with different variants:

<HtmlPreviewer :code="RoleStatusDemo.intentVariants()" />

### Modifiers

`.ghost` creates transparent background alerts with colored text and borders, useful for secondary actions where you want minimal visual weight.

<HtmlPreviewer :code="RoleStatusDemo.ghostVariants()" :codeCollapsed="true" />

`.subtle` creates alerts with a more muted appearance, often used for less prominent notifications.

<HtmlPreviewer :code="RoleStatusDemo.subtleVariants()" :codeCollapsed="true" />

<script setup>
import { RoleStatusDemo } from '@demos/semantics';
import { SubtleDemo, GhostDemo, IntentDemo } from '@demos/variants';
</script>
