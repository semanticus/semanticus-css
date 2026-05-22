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

Wrap title and a [Close Button](/docs/composites/buttons#close-button) inside a `<nav>`, which will justify the title to the left and the close button to the right.

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 150px;&quot;&gt;
${DialogDemo.withCloseButton({ open: true })}
&lt;/div&gt;`" />

## With Header and Footer

> **Note:** Inside `<dialog>`, the `<header>` will justify its content to the left and right and `<footer>` will justify its content to the right, saving you the need to wrap its content inside a `<nav>`.

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 250px;&quot;&gt;
${DialogDemo.withHeaderAndFooter({ open: true })}
&lt;/div&gt;`" />

<script setup>
import { DialogDemo } from "@demos/semantics/elements";
</script>
