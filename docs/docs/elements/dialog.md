---
title: dialog
---

# &lt;dialog&gt;

The `<dialog>` element represents a modal or non-modal dialog.

See more about using `<dialog>` as a **modal** in the [Modal composite documentation](/docs/composites/modal).

> **Make sure:** To include `aria-labelledby` and `aria-describedby` attributes pointing to the modal's title and content for better accessibility.

## Basic Usage

<HtmlPreviewer :code="DialogDemo.main({ open: true })" min-height="280" />

## With a Close Button, Header and Footer

By making use of the fact that the `<header>` element spaces its children, adding a [Close Button](/docs/composites/buttons#close-button) to it, display it side by side with the heading.

> **Note:** Inside a `<dialog>` the `<footer>` will justify its content to the end.

<HtmlPreviewer :code="DialogDemo.withHeaderAndFooter({ open: true })" min-height="350" />

<script setup>
import { DialogDemo } from "@demos/semantics/elements";
</script>
