---
title: dialog
---

# &lt;dialog&gt;

The `<dialog>` element represents a modal or non-modal dialog.

See more about using `<dialog>` as a **modal** in the [Modal composite documentation](/docs/composites/modal).

> **Make sure:** To include `aria-labelledby` and `aria-describedby` attributes pointing to the modal's title and content for better accessibility.

## Basic Usage

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 200px;&quot;&gt;
${DialogDemo.main({ open: true })}
&lt;/div&gt;`" />

## With Close Button

Add a [Close Button](/docs/composites/buttons#close-button) with the utility class `.float-end` to position it on the right side of the dialog.

> **Note:** In case you are using the `no-utilities` bundle, `.float-end` won't be avaible, in which case using a `<header>`, as seen in the next section, is a good alternative to position the close button on the right side of the dialog.

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 150px;&quot;&gt;
${DialogDemo.withCloseButton({ open: true })}
&lt;/div&gt;`" />

## With Header and Footer

> **Note:** Inside `<dialog>`, the `<header>` will justify its content to the left and right and `<footer>` will justify its content to the right, allowing you to add a close button or other actions, without needing to use utility classes.

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 250px;&quot;&gt;
${DialogDemo.withHeaderAndFooter({ open: true })}
&lt;/div&gt;`" />

<script setup>
import { DialogDemo } from "@demos/semantics/elements";
</script>
