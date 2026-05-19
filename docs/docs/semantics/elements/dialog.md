---
title: dialog
---

<script setup>
import { DialogDemo } from "@demos/semantics/elements";
</script>

# &lt;dialog&gt;

The `<dialog>` element represents a modal or non-modal dialog.

See more about using `<dialog>` as a **modal** in the [Modal composite documentation](/docs/composites/modal).

## Basic Usage

Inside the `<dialog>`, if a `<button rel="prev">` is present, it will be styled as a close icon.

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 200px;&quot;&gt;
${DialogDemo.main({ open: true })}
&lt;/div&gt;`" />

## With Header and Footer

<HtmlPreviewer :code="`&lt;div style=&quot;min-height: 250px;&quot;&gt;
${DialogDemo.withHeaderAndFooter({ open: true })}
&lt;/div&gt;`" />
