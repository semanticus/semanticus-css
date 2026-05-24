---
title: footer
---

<script setup>
import { FooterDemo } from "@demos/semantics/elements";
</script>

# &lt;footer&gt;

The `<footer>` element represents the footer for its nearest sectioning ancestor — typically containing copyright info, links, or supplemental navigation.

> **Important:** Assistive technologies implicitly add the `role="contentinfo"`, so it's best not to combine it with other roles like `role="region"` or `role="group"`.

## Basic Usage

<HtmlPreviewer :code="FooterDemo.main()" />
