---
title: embedded
---

<script setup>
import { EmbeddedDemo } from "@demos/semantics/elements";
</script>

# &lt;img&gt; / &lt;video&gt; / &lt;audio&gt;

All embedded media elements are responsive by default: `max-width: 100%` and `height: auto`. This ensures **images**, **videos**, **canvases**, **iframes**, and **SVGs** never overflow their containers.

## Image

<HtmlPreviewer :code="EmbeddedDemo.image()" />

## Responsive Image with Caption

<HtmlPreviewer :code="EmbeddedDemo.responsiveImage()" />
