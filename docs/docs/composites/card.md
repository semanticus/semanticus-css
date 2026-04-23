---
title: Card
---

<script setup>
const cardExample = `<article class="card">
  <header>
    <h3>Card Title</h3>
  </header>
  <p>This is a basic card with header and content. Apply the <code>.card</code> class to any element to create a card component.</p>
  <footer>
    <button class="secondary">Cancel</button>
    <button>Confirm</button>
  </footer>
</article>
`;
</script>

# Card

Cards are implemented using the `.card` class. This class can be applied to any semantic element like `<article>`, `<div>`, or `<section>`.

## Basic Card

<HtmlPreviewer :code="cardExample" />

## When to use `.card`

- Apply `.card` to `<article>` when the content is a self-contained composition
- Use `.card` on `<div>` for purely presentational containers
- Combine with semantic HTML for accessible, styled components

## Reference

For more examples and detailed documentation, see [&lt;article&gt;](/docs/semantics/article).
