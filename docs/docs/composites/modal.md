---
title: Modal
---

<script setup>
import { ModalDemo } from "@demos/composites";
</script>

# Modal

Modals are implemented using the `<dialog>` element in combination with the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API), for basic open/close behavior.

1. Give your `<dialog>` a unique `id` attribute
2. Create an opening button with `command="show-modal" commandfor="your-modal-id"`
3. The modal will display with a backdrop and trap focus automatically
4. Close the modal by clicking a button with `command="close-modal"`

## Basic Modal

Inside the `<dialog>`, if a `<button rel="prev">` is present, it will be styled as a close icon.

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 200px;&quot;&gt;
${ModalDemo.main({ open: true })}
&lt;/div&gt;`" />

## With Header and Footer

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 250px;&quot;&gt;
${ModalDemo.withHeaderAndFooter({ open: true })}
&lt;/div&gt;`" />

## Reference

The `<dialog>` element is a native modal and non-modal dialog container. Set the `open` attribute to make it visible. When opened programmatically with `.showModal()`, it traps focus and exposes built-in accessibility roles for screen readers.
