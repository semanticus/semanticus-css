# Modal

Modals are implemented using the [&lt;dialog&gt;](/docs/elements/dialog) element, in combination the component class [.card](/docs/classes/card), and using with the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API), for basic open/close behavior with zero javascript.

1. Give your `<dialog>` a unique `id` attribute and the `.card` css class;
2. Add a `aria-labelledby` attribute pointing to the dialog title id and `aria-describedby` pointing to the message text id;
3. Create an opening button with `command="show-modal" commandfor="your-modal-id"` (alternatively, you can use JS to `document.querySelector('#your-modal-id').showModal()`);
4. The modal will display with a backdrop and trap focus automatically;
5. Close the modal through the use of a button with `command="close"` (alternatively, you can use JS to `document.querySelector('#your-modal-id').close()`).

## Basic Modal

By using the [.card](/docs/classes/card) class, you can then add [&lt;header&gt;](/docs/elements/header) and [&lt;footer&gt;](/docs/elements/footer) elements to it, to achieve a the typical look and feel of a full fledged modal.

<HtmlPreviewer :code="DialogDemo.showModalCardWithHeaderAndFooter()" min-height="380" />

> **Accessibility:** When it comes to modals, **ARIA** dictates that the HTML element should have `aria-modal="true"` and `role="dialog"` attributes, but in the case of the `<dialog>` element, the browser automatically applies the `role="dialog"` and if you open the dialog using the **Invoker Commands API** or the `.showModal()` method, it automatically applies `aria-modal="true"`.
>
> So if you follow the steps above you have all you need in order to create an accessible modal dialog.

## Dialog alerts

Dialog alerts are modal windows that require user interaction before they can be dismissed. They are often used for critical messages or actions that require confirmation from the user.

- Use `<dialog role="alertdialog">` for critical decisions.
- Provide `aria-labelledby` pointing to the dialog title and `aria-describedby` pointing to the message text.
- Ensure the dialog contains at least one focusable element (e.g., action buttons).
- The user must interact with the dialog to dismiss it; do not close on backdrop click.

> **Warning:** Be mindful that the role `role="alertdialog"` tells screen readers to treat the dialog as a high-priority alert, immediately interrupting the current reading to announce its contents, consider only using it for critial messages.

> **Note:** Be sure to use the `.card` if you want to stylize the `<header>` or `<footer>` elements.

<HtmlPreviewer :code="DialogDemo.showDialogCardAlert()" min-height="250" />

> **Accessibility:** When it comes to these types of dialogs that interrupt the user’s workflow, **ARIA** dictates that the HTML element should have `aria-modal="true"` and `role="alertdialog"` attributes, but in the case of the `<dialog>` element, the browser automatically applies the `role="dialog"` so you only need to change the role to `alertdialog`.

<script setup>
import { DialogDemo } from "@demos/semantics/elements";
</script>
