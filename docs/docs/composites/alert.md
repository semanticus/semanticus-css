# Alerts

Alerts are used to provide feedback messages to users.

They can be used to display success, error, warning, or informational messages and can be displayed in various contexts, such as inline within a page, as floating messages, or as dialog windows.

## Inline alerts

Inline alerts are displayed within the content of a page, simply add `role="status"` or `role="alert"` to any HTML element to create an inline alert. The choice between these two **ARIA** roles depends on the urgency and importance of the message being conveyed.

Please see [[role="status"]](/docs/semantics/attributes/role-status) and [[role="alert"]](/docs/semantics/attributes/role-alert) for more details on how to choose which ARIA role to use for your inline alerts and how to stylize them with **variants**, **close button** and other.

<HtmlPreviewer :code="AlertDemo.inlineAlerts()"/>

## Floating alerts

Also known as toast notifications, floating alerts are designed to appear temporarily and overlay the content of a page. Simply add `popover` attribute to any HTML element with `role="status"` or `role="alert"` to create a floating alert.

<HtmlPreviewer :code="AlertDemo.floatingAlerts()"/>

## Dialog alerts

Dialog alerts are modal windows that require user interaction before they can be dismissed. They are often used for critical messages or actions that require confirmation from the user.

- Use `<dialog role="alertdialog">` for critical decisions.
- Provide `aria-labelledby` pointing to the dialog title and `aria-describedby` pointing to the message text.
- Ensure the dialog contains at least one focusable element (e.g., action buttons).
- The user must interact with the dialog to dismiss it; do not close on backdrop click.

> **Warning:** Be mindful that the role `role="alertdialog"`, tells the browser to trigger a system alert event, which immediately announces the contents to the user and ensures they focus on the prompt, so it's important to consider the use of this role versus simply using a less intrusive [Modal](/docs/composites/modal).

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 250px;&quot;&gt;
${AlertDemo.showDialogAlert()}
&lt;/div&gt;`" />

> **Remark:** When it comes these type of dialogs that interrupt the user’s workflow, **ARIA** dictates that the HTML element should have `aria-modal="true"` and `role="alertdialog"` attributes, but in the case of the `<dialog>` element, the browser automatically applies the `role="dialog"` so you only need to change the role to `alertdialog`.

<script setup>
import { AlertDemo } from "@demos/composites";
</script>
