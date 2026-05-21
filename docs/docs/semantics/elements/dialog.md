---
title: dialog
---

# &lt;dialog&gt;

The `<dialog>` element represents a modal or non-modal dialog.

See more about using `<dialog>` as a **modal** in the [Modal composite documentation](/docs/composites/modal).

> **Make sure:** To include `aria-labelledby` and `aria-describedby` attributes pointing to the modal's title and content for better accessibility.

## Basic Usage

> **Note:** If a `<button class="close">` is present inside the `<dialog>`, it will be styled as a close icon.

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 200px;&quot;&gt;
${DialogDemo.main({ open: true })}
&lt;/div&gt;`" />

## With Header and Footer

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 250px;&quot;&gt;
${DialogDemo.withHeaderAndFooter({ open: true })}
&lt;/div&gt;`" />

<script setup>
import { DialogDemo } from "@demos/semantics/elements";
</script>
