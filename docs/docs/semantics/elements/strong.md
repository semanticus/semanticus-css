---
title: strong
---

<script setup>
import { StrongDemo } from "@demos/semantics/elements";
</script>

# &lt;strong&gt; / &lt;b&gt;

Both `<strong>` and `<b>` render as bold text (`font-weight: bolder`). Use `<strong>` for content of importance, seriousness, or urgency. Use `<b>` for stylistic offset without semantic weight.

## Strong (semantic importance)

<HtmlPreviewer :code="StrongDemo.basic()" />

## Bold (stylistic)

<HtmlPreviewer :code="StrongDemo.bold()" />
