# Alerts

Alerts are implemented using the **ARIA** roles `role="status"` and `role="alert"`, which are designed to provide feedback to users.

> **Accessibility:** Since `role="alert"` disrupts the user’s workflow and is announced immediately by screen readers, it should only be used for critical messages like `We couldn't reserve your seat due to connection failure. Please check your internet connection.`, or time-sensitive information like `Your reserved seat will be released in 5 minutes.`.
>
> For typical feedback messages, like `Profile updated` or `Failed to save, please check for validation errors.`, it's recommended to use `role="status"`, since it allows screen readers to announce the message at the next available opportunity without interrupting the user.

Check the [Toasts](/docs/composites/toasts) page for instructions on how to create **floating alerts**, and the [Modal](/docs/composites/modal#dialog-alerts) page, for **dialog alerts**.

## Basic Usage

Simply add `role="status"` or `role="alert"` to any HTML element in combination with **variant** classes to create an alert message.

Check out the [[role="status"]](/docs/semantics/attributes/role-status#intent-variants) documentation page for all the different variants and modifier combinations.

> **Note:** Alerts without content will be hidden, this way you can add the element to the DOM from the start and it will only be shown and announced when you update its content, without the need to worry about adding/removing it from the DOM.

<HtmlPreviewer :code="AlertsDemo.overview()"/>

## With title and description

<HtmlPreviewer :code="AlertsDemo.withHgroupExample()" />

## With Close Button

When an element has two children (message and close button) `role="status|alert"` will set a two-column layout, where the first child will take up the remaining space, and the second will fit its content.

Since text alone doesn't count as a child element, we need to wrap it in an element (like `<p>`) followed by a [Close Button](/docs/composites/buttons#close-button), this will cause the text to take up the remaining space and push the button to the end.

<HtmlPreviewer :code="AlertsDemo.withCloseButtonExample()" />

## With an Icon or Close Button

When an element contains 3 children, `role="status|alert"` will set a three-column layout, where the first and last children will fit their content, and the middle one will take up the remaining space.

In case you want to add an icon to the left and no close button on the right, since two children will cause the first element to strech, we need to add an empty element as the last child with `aria-hidden="true"` to make sure it is ignored by assistive technologies, this way the first child (icon) and the last child (empty element) will fit their content, and the middle one (message) will take up the remaining space.

Check out [.icon-*](/docs/components/icons) components area for more icons.

<HtmlPreviewer :code="AlertsDemo.withIconAndOrCloseButtonExample()" />

## Little bit of everything

References: [Icons](/docs/components/icons), [Close Button](/docs/composites/buttons#close-button), [Danger Intent](/docs/variants/intent/danger), [Ghost Modifier](/docs/variants/modifiers/ghost), [Font Size Utility Classes](/docs/utilities/typography#font-size)

<HtmlPreviewer :code="AlertsDemo.littleBitOfEverything()" />

<script setup>
import { AlertsDemo } from "@demos/composites";
</script>
