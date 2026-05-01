---
title: headings
---

<script setup>
import { HeadingsDemo } from "@demos/semantics/elements";
</script>

# &lt;h1&gt; – &lt;h6&gt;

Semanticus styles headings with progressively lighter colors as the level increases, using `color-mix()` to blend toward the muted text color.

## All Levels

<HtmlPreviewer :code="HeadingsDemo.allLevels()" />

## In Context

<HtmlPreviewer :code="HeadingsDemo.inContext()" />
