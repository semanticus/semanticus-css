---
title: article
---

<script setup>
const example1Html = `<article class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</article>
`;
const example2Html = `<article class="card">
  <header>
    <h3>Card Title</h3>
  </header>
  <p>Card content.</p>
</article>
`;
const example3Html = `<article class="card">
  <p>Card content.</p>
  <footer>
    <button class="secondary">Cancel</button>
    <button>Confirm</button>
  </footer>
</article>
`;
const example4Html = `<article class="card">
  <header>
    <hgroup>
      <h3>Card Title</h3>
      <p>Subtitle</p>
    </hgroup>
  </header>
  <p>Card content goes here with some more text.</p>
  <footer>
    <button class="secondary">Cancel</button>
    <button>Confirm</button>
  </footer>
</article>
`;
</script>

# &lt;article&gt;

The `<article>` element represents a self-contained composition — such as a blog post, widget, or forum post — that can stand alone and be independently distributed.

It carries semantic meaning that distinguishes it from a generic `<div>`.

## Styling

By default, the `<article>` element has no visual styling. To create a card-like appearance, apply the `.card` class:

```html
<article class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</article>
```

## Basic Card

<HtmlPreviewer :code="example1Html" />

## Card with Header

<HtmlPreviewer :code="example2Html" />

## Card with Footer

<HtmlPreviewer :code="example3Html" />

## Complete Card

<HtmlPreviewer :code="example4Html" />

## Semantic vs Visual

- Use `<article>` for semantic structure (self-contained content)
- Add `.card` for visual styling (background, shadow, border-radius)
- This separation allows you to use `<article>` without card styling when appropriate
