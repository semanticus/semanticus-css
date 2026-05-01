---
title: dialog
---

<script setup>
import { DialogDemo } from "@demos/semantics/elements";
</script>

# &lt;dialog&gt;

The `<dialog>` element represents a modal or non-modal dialog. Semanticus provides full styling for dialog modals using the CSS-only `:target` technique — no JavaScript required for basic open/close behavior.

Use an `<a href="#dialog-id">` to open the dialog, and `<a href="#" rel="prev">` inside the dialog header to close it.

## Basic Usage

<HtmlPreviewer :code="DialogDemo.basic()" />

## With Form

<HtmlPreviewer :code="DialogDemo.withForm()" />
