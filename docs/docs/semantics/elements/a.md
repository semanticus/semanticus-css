---
title: a
---

<script setup>
import { ADemo } from "@demos/semantics/elements";
</script>

# &lt;a&gt;

The `aria-current="page"` attribute tells assistive technologies which link represents the current page.

<HtmlPreviewer :code="`${ADemo.basic()}\n<hr>\n${ADemo.active()}`" />

For `.secondary` and `.contrast` color styles, see [Link Variants](/variants/components/links).
