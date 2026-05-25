# Toasts

Toasts are implemented by using the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API) on an [Alert](/docs/composites/alerts) and setting the data attribute `data-placement` to one of the following values: `top-start`, `top-center`, `top-end`, `middle-start`, `middle-center`, `middle-end`, `bottom-start`, `bottom-center`, `bottom-end`.

For more details and examples, check out the [Alerts documentation](/docs/composites/alerts) since toasts are essentially floating alerts.

## Basic Usage

1. Give your HTML element a unique `id` attribute
2. Add the `popover` attribute plus the `role="status"` and `data-placement` (set with one of the values mentioned above)
3. Create an opening button with `popovertarget="your-modal-id"` (alternatively, you can use JS to `document.querySelector('#your-modal-id').showPopover()`)
4. Add a [Close Button](/docs/composites/buttons#close-button) with `popovertarget="your-modal-id"`

<HtmlPreviewer :code="ToastsDemo.showToast()" />

> **Note:** Keep in mind that like **alerts**, if the content (in this case the `<p>` element) is empty, the toast will be hidden. Try editing the code above to see how it behaves.

<script setup>
import { ToastsDemo } from "@demos/composites";
</script>
