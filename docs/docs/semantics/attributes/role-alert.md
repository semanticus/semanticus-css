---
title: 'role="alert"'
---

# [role="alert"]

Adding `role="alert"` to an element will stylize it as an **alert** component and make it accessible to screen readers as an alert message.

> **Accessibility:** Whenever you need to provide critical announcements, like **error** and **warning** messages, `role="alert"`, that require immediate attention, should be used.

- Please keep in mind that this role will make screen readers interrupt their current reading to announce the alert message, so it should be used only for important and time-sensitive information.

- For less sensitive information, consider using [[role="status"]](/docs/semantics/attributes/role-status) instead, which will wait until the user finishes their current reading before announcing the message.

## Basic Usage

> **Note:** `role="alert"` will hide the element if it doesn't contain any content, this way you add the element to the DOM from the start and it will only be announced when you update its content, without the need to worry about adding/removing it from the DOM.

<HtmlPreviewer :code="RoleAlertDemo.overview()" />

## With Close Button

When an element has two children (message and close button) `role="alert"` will set a two-column layout, where the first child will take up the remaining space, and the second will fit its content.

Since text alone doesn't count as a child element, if we want the message to take up the remaining space, we need to wrap it in an element (like `<p>`), and then we can add a [Close Button](/docs/composites/buttons#close-button) as the second child.

<HtmlPreviewer :code="RoleAlertDemo.overviewWithCloseButton()" />

> **Note:** Check out the [As Toast](/docs/semantics/attributes/role-alert#as-toast) section for an example on how to you can make the close button actually close the alert message.

## With an Icon and a Close Button

Similarly to the previous example, but with an [icon](/docs/components/icons) added to the left of the text.

In case of 3 children, the first and last will fit their content, and the middle one will take up the remaining space.

<HtmlPreviewer :code="RoleAlertDemo.overviewWithIconAndCloseButton()" />

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
