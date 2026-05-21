# Modal

Modals are implemented using the `<dialog>` element in combination with the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API), for basic open/close behavior, follow these steps:

1. Give your `<dialog>` a unique `id` attribute
2. Add a `aria-labelledby` attribute pointing to the dialog title id and `aria-describedby` pointing to the message text id.
3. Create an opening button with `command="show-modal" commandfor="your-modal-id"` (alternatively, you can use JS to `document.querySelector('#your-modal-id').showModal()`)
4. The modal will display with a backdrop and trap focus automatically
5. Close the modal through the use of a button with `command="close"` (alternatively, you can use JS to `document.querySelector('#your-modal-id').close()`)

Check out the [Dialog element documentation](/docs/semantics/elements/dialog) for more examples of how to structure your modal content.

## Basic Modal

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 200px;&quot;&gt;
${DialogDemo.showModal()}
&lt;/div&gt;`" />

> **Remark:** When it comes to modals, **ARIA** dictates that the HTML element should have `aria-modal="true"` and `role="dialog"` attributes, but in the case of the `<dialog>` element, the browser automatically applies the `role="dialog"` and if you open the dialog using the **Invoker Commands API** or the `.showModal()` method, it automatically applies `aria-modal="true"`.
>
> So you can be sure that if you follow the steps above you have all you need to create an accessible modal dialog.

<script setup>
import { DialogDemo } from "@demos/semantics/elements";
</script>
