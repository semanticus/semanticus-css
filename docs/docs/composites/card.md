---
title: Card
---

<script setup>
const cardExample = `<article>
  <header>
    <h3>Card Title</h3>
  </header>
  <p>This is a basic card with header and content. Cards are built using the semantic <code>&lt;article&gt;</code> element.</p>
  <footer>
    <button class="secondary">Cancel</button>
    <button>Confirm</button>
  </footer>
</article>
`;
</script>

# Card

Cards are implemented using the `<article>` element.

## Basic Card

<HtmlPreviewer :code="cardExample" />

## Reference

For more card variants and detailed examples, see [&lt;article&gt;](/docs/semantics/article).
