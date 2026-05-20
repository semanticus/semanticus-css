---
title: a
---

# &lt;a&gt;

The `aria-current="page"` attribute tells assistive technologies which link represents the current page.

<HtmlPreviewer :code="`${ADemo.main()}\n<hr>\n${ADemo.active()}`" />

## Intent Variants

To convey **intent** and **importance**, links can be styled with different variants. The default variant is `.primary`, which is used for the most important actions on a page, but there are also:

<HtmlPreviewer :code="IntentDemo.anchorsAndRoleLinks()" :codeCollapsed="true" />

<script setup>
import { ADemo } from "@demos/semantics/elements";
import { IntentDemo } from '@demos/overviews/variants';
</script>
