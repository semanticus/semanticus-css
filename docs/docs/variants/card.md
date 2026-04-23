---
title: Card
---

<script setup>
const basicCardHtml = `<article class="card">
  <h3>Card Title</h3>
  <p>This is a basic card component. Apply the <code>.card</code> class to any element to create a visually distinct container.</p>
</article>
`;

const cardWithHeaderFooterHtml = `<article class="card">
  <header>
    <h3>Card with Header</h3>
  </header>
  <p>Cards support optional header and footer sections that are visually distinct from the main content.</p>
  <footer>
    <button class="secondary">Cancel</button>
    <button>Confirm</button>
  </footer>
</article>
`;

const cardElementsHtml = `<!-- On article element (recommended for semantic content) -->
<article class="card">
  <p>Self-contained composition like a blog post or widget.</p>
</article>

<!-- On div element (for purely presentational containers) -->
<div class="card">
  <p>A generic container with card styling.</p>
</div>

<!-- On section element (for thematic grouping) -->
<section class="card">
  <p>Thematic grouping of content.</p>
</section>
`;

const cardInDialogHtml = `<dialog open>
  <article class="card">
    <header>
      <button aria-label="Close" rel="prev"></button>
      <h3>Modal Title</h3>
    </header>
    <p>Modal dialogs use the <code>.card</code> class on their content container.</p>
    <footer>
      <button class="secondary">Cancel</button>
      <button>Confirm</button>
    </footer>
  </article>
</dialog>
`;
</script>

# Card

The `.card` class creates a visually distinct container with background, border-radius, and shadow styling. It can be applied to any block-level element.

## Basic Card

<HtmlPreviewer :code="basicCardHtml" />

## Card with Header and Footer

Cards support `<header>` and `<footer>` child elements with distinct background styling.

<HtmlPreviewer :code="cardWithHeaderFooterHtml" />

## Using with Different Elements

The `.card` class works on any semantic element. Choose the element that best matches your content's meaning:

<HtmlPreviewer :code="cardElementsHtml" />

| Element | When to Use |
|---------|-------------|
| `<article>` | Self-contained compositions (blog posts, widgets, forum posts) |
| `<div>` | Purely presentational containers |
| `<section>` | Thematic grouping of content |

## Cards in Modals

When building modal dialogs, apply the `.card` class to the content container inside `<dialog>`:

<HtmlPreviewer :code="cardInDialogHtml" />

## CSS Variables

Cards use these CSS variables for theming:

| Variable | Default | Description |
|----------|---------|-------------|
| `--card-bg` | `var(--color-background)` | Card background color |
| `--card-border` | `var(--color-border-muted)` | Border color for header/footer |
| `--card-shadow` | `var(--shadow-lg)` | Box shadow |
| `--card-section-bg` | `rgb(251, 251.5, 252.25)` | Header/footer background |
