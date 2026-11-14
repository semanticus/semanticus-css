---
title: article
---

<script setup>
import { ArticleDemo } from "@demos/semantics/elements";
</script>

# &lt;article&gt;

The `<article>` element represents a self-contained composition — such as a blog post, widget, or forum post — that can stand alone and be independently distributed.

It carries semantic meaning that distinguishes it from a generic `<div>`.

Add `.card` for visual styling (background, shadow, border-radius), see more at [Card section](/docs/composites/card).

## Basic Usage

By default, the `<article>` element has no visual styling.

<HtmlPreviewer :code="ArticleDemo.main()" />
