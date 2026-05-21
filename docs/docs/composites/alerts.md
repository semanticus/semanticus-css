# Alerts

Alerts are used to provide feedback messages to users. They can be used to display success, error, warning, or informational messages.

Alerts can be displayed in various contexts, such as inline within a page or as a modal dialog.

## Inline alerts

Inline alerts are displayed within the content of a page and are typically used for non-critical messages that do not require immediate user interaction. These alerts are ideal for providing feedback messages within the flow of a page.

- Use `role="status"` with `aria-live="polite"` for success and informational messages.
- Use `role="alert"` for warnings and errors that require the user's attention.

<HtmlPreviewer :code="AlertsDemo.inlineAlerts()"/>

## Floating alerts

Also known as toast notifications, floating alerts are designed to appear temporarily and overlay the content of a page. They are typically used for transient messages that do not require immediate user interaction.

- Floating alerts should use `role="status"` or `role="alert"` with an `aria-live` region.
- They should not steal keyboard focus; screen readers will announce them automatically.
- Wrap multiple toasts in a container with `role="region"` and `aria-label="Notifications"`.

<HtmlPreviewer :code="AlertsDemo.floatingAlerts()"/>

## Dialog alerts

Dialog alerts are modal windows that require user interaction before they can be dismissed. They are often used for critical messages or actions that require confirmation from the user.

- Use `<dialog role="alertdialog">` for critical decisions.
- Provide `aria-labelledby` pointing to the dialog title and `aria-describedby` pointing to the message text.
- Ensure the dialog contains at least one focusable element (e.g., action buttons).
- The user must interact with the dialog to dismiss it; do not close on backdrop click.

> **Warning:** Be mindful that the role `role="alertdialog"`, tells the browser to trigger a system alert event, which immediately announces the contents to the user and ensures they focus on the prompt, so it's important to consider the use of this role versus simply using a less intrusive [Modal](/docs/composites/modal).

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 250px;&quot;&gt;
${DialogDemo.showDialogAlert()}
&lt;/div&gt;`" />

> **Remark:** When it comes these type of dialogs that interrupt the user’s workflow, **ARIA** dictates that the HTML element should have `aria-modal="true"` and `role="alertdialog"` attributes, but in the case of the `<dialog>` element, the browser automatically applies the `role="dialog"` so you only need to change the role to `alertdialog`.

<script setup>
import { AlertsDemo } from "@demos/composites";
import { DialogDemo } from "@demos/semantics";
</script>
