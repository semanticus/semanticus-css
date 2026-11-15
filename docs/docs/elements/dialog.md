---
title: dialog
---

# &lt;dialog&gt;

The `<dialog>` element represents a modal or non-modal dialog.

**Semanticus CSS** adds some basic styling to the `<dialog>` element but keeps it to a minimum so you can have the freedom to costumize it or simply combine it with the `.card` component.

See more other examples at [Modal composite documentation](/docs/composites/modal).

## Basic Usage

Plain and simple look, overwriting the browser's default style.

<HtmlPreviewer :code="DialogDemo.main({ open: true })" min-height="280" />

## As a card with a header and footer

Combiniting it with the `.card` component, makes the `<dialog>` look and feel like a typical modal from any other frontend framework.

<HtmlPreviewer :code="DialogDemo.cardWithHeaderAndFooter({ open: true })" min-height="380" />

## Accessibility

> **Make sure:** To include `aria-labelledby` and `aria-describedby` attributes pointing to the modal's title and content for better accessibility.

<script setup>
import { DialogDemo } from "@demos/semantics/elements";
</script>
