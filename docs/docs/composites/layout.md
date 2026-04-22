---
title: Layout
---

<script setup>
const layoutExample = `<main class="container">
  <header>
    <hgroup>
      <h1>Page Title</h1>
      <p>This content is constrained within a responsive container.</p>
    </hgroup>
  </header>

  <div class="grid gap-3 mt-4">
    <article>
      <h3>Card 1</h3>
      <p>Content in a grid layout.</p>
    </article>
    <article>
      <h3>Card 2</h3>
      <p>Auto-fit columns.</p>
    </article>
    <article>
      <h3>Card 3</h3>
      <p>Responsive by default.</p>
    </article>
  </div>
</main>
`;
</script>

# Layout

Semanticus CSS provides layout utilities for building responsive page structures.

## Common Layout Pattern

A typical layout combines the `.container` class with grid utilities:

<HtmlPreviewer :code="layoutExample" />

## Layout Resources

For more layout options, see:

- [Container](variants/container.md) — responsive width wrappers (`.container`, `.container-fluid`)
- [Layout utilities](utilities/layout.md) — grid, aspect ratios, object-fit, and more

