# Modal

Modals are implemented using the `<dialog>` element in combination with the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API), for basic open/close behavior.

1. Give your `<dialog>` a unique `id` attribute
2. Create an opening button with `command="show-modal" commandfor="your-modal-id"`
3. The modal will display with a backdrop and trap focus automatically
4. Close the modal by clicking a button with `command="close-modal"`
5. Alternatively, you can open the modal programmatically with `document.querySelector('#your-modal-id').showModal()`.

> **Make sure:** To include `aria-labelledby` and `aria-describedby` attributes pointing to the modal's title and content for better accessibility.

> **Side note:** When it comes to modals, **ARIA** dictates that the HTML element should have `aria-modal="true"` and `role="dialog"`, but the `<dialog>` element has these roles built-in, so you don't need to add them.

## Basic Modal

> **Note:** If a `<button rel="prev">` is present inside the `<dialog>`, it will be styled as a close icon.

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 200px;&quot;&gt;
${DialogDemo.showModal()}
&lt;/div&gt;`" />

## With Header and Footer

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 250px;&quot;&gt;
${DialogDemo.showModalWithHeaderAndFooter()}
&lt;/div&gt;`" />

<script setup>
import { DialogDemo } from "@demos/semantics/elements";
</script>
