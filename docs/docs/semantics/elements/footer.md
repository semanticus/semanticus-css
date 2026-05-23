---
title: footer
---

<script setup>
import { FooterDemo } from "@demos/semantics/elements";
</script>

# &lt;footer&gt;

The `<footer>` element represents the footer for its nearest sectioning ancestor — typically containing copyright info, links, or supplemental navigation.

> **Important:** Assistive technologies implicitly add the `role="contentinfo"` so, don't combine it with `role="group"` or any other roles like `role="region"` that would override the contentinfo landmark semantics.

## Basic Usage

<HtmlPreviewer :code="FooterDemo.main()" />
