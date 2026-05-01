---
title: Card
---

<script setup>
import { CardDemo } from "@demos/composites";
</script>

# Card

Cards are implemented using the `.card` class. This class can be applied to any semantic element like `<article>`, `<div>`, or `<section>`.

## Basic Card

<HtmlPreviewer :code="CardDemo.basicCard()" />

## When to use `.card`

- Apply `.card` to `<article>` when the content is a self-contained composition
- Use `.card` on `<div>` for purely presentational containers
- Combine with semantic HTML for accessible, styled components

## Reference

For more examples and detailed documentation, see [&lt;article&gt;](/docs/semantics/article).
