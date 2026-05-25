# Alerts

Alerts are implemented using the **ARIA** roles `role="status"` and `role="alert"`, which are designed to provide feedback to users.

> **Accessibility:** Since `role="alert"` disrupts the user’s workflow and is announced immediately by screen readers, it should only be used for critical messages like `We couldn't reserve your seat due to connection failure. Please check your internet connection.`, or time-sensitive information like `Your reserved seat will be released in 5 minutes.`.
>
> For typical feedback messages, like `Profile updated` or `Failed to save, please check for validation errors.`, it's recommended to use `role="status"`, since it allows screen readers to announce the message at the next available opportunity without interrupting the user.

## Inline alerts

As the name implies these messages are displayed within the content of a page, simply add `role="status"` or `role="alert"` to any HTML element in combination with **variant** classes to create an inline alert.

> **Note:** Alerts without content will be hidden, this way you can add the element to the DOM from the start and it will only be shown and announced when you update its content, without the need to worry about adding/removing it from the DOM.

<HtmlPreviewer :code="AlertsDemo.inlineAlertsExample()"/>

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

## Floating alerts

Also known as **Toasts**, these types of alerts are designed to appear temporarily and overlay the content of a page.

Add the `popover` attribute to the element, and set the `data-placement` attribute to specify where the toast should appear on the screen, and make use of the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API), for basic open/close behavior, follow these steps:

1. Give your HTML element a unique `id` attribute
2. Add the `popover` attribute plus the `role="status"` and `data-placement` attributes to specify where the toast should appear on the screen.
3. Create an opening button with `popovertarget="your-modal-id"` (alternatively, you can use JS to `document.querySelector('#your-modal-id').showPopover()`)
4. The toast will display at the designated position

<HtmlPreviewer :code="AlertsDemo.overviewShowToasts()" :codeCollapsed="true" />

## Dialog alerts

Dialog alerts are modal windows that require user interaction before they can be dismissed. They are often used for critical messages or actions that require confirmation from the user.

- Use `<dialog role="alertdialog">` for critical decisions.
- Provide `aria-labelledby` pointing to the dialog title and `aria-describedby` pointing to the message text.
- Ensure the dialog contains at least one focusable element (e.g., action buttons).
- The user must interact with the dialog to dismiss it; do not close on backdrop click.

> **Warning:** Be mindful that the role `role="alertdialog"` tells screen readers to treat the dialog as a high-priority alert, immediately interrupting the current reading to announce its contents, so it's important to consider the use of this role versus simply using a less intrusive [Modal](/docs/composites/modal).

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 250px;&quot;&gt;
${AlertsDemo.showDialogAlert()}
&lt;/div&gt;`" />

> **Remark:** When it comes to these types of dialogs that interrupt the user’s workflow, **ARIA** dictates that the HTML element should have `aria-modal="true"` and `role="alertdialog"` attributes, but in the case of the `<dialog>` element, the browser automatically applies the `role="dialog"` so you only need to change the role to `alertdialog`.

<script setup>
import { AlertsDemo } from "@demos/composites";
</script>
