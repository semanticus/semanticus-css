<script setup>
const containerHtml = `<main class="container">
  <small>Constrained wrapper</small>
  <h2>Readable content width</h2>
  <p>Use <code>.container</code> when you want content centered with a responsive max-width and automatic horizontal gutters on smaller screens.</p>
</main>
`;

const containerFluidHtml = `<div class="container-fluid">
  <section>
    <small>Full-width wrapper</small>
    <h2>Edge-to-edge layouts</h2>
    <p>Use <code>.container-fluid</code> when a section should stretch across the available width while preserving the same horizontal padding as the standard container.</p>
  </section>
</div>
`;

const comparisonHtml = `<section class="container" style="border: 1px dashed rgb(var(--color-primary-rgb));">
  <hgroup>
    <h2>.container</h2>
    <p>Constrained width for articles, forms, and document-like pages.</p>
  </hgroup>
</section>
<section class="container-fluid" style="border: 1px dashed rgb(var(--color-primary-rgb));">
  <hgroup>
    <h2>.container-fluid</h2>
    <p>Full-width sections for banners, dashboards, and broad layout regions.</p>
  </hgroup>
</section>
`;
</script>

# Container & Fluid Container

You can apply these two classes to any block-level element to create a responsive wrapper that manages content width and horizontal padding.

## Container

`.container` grows responsively until it reaches the breakpoint-based max-widths defined in the variant stylesheet.

<HtmlPreviewer :code="containerHtml" />

## Fluid Container

`.container-fluid` always spans the available width while keeping the same left and right padding as `.container`.

<HtmlPreviewer :code="containerFluidHtml" />

## Side-By-Side Behavior

Use `.container` when you want the page body to stay readable. Use `.container-fluid` when the section itself should remain wide and only its internal padding should be managed.

<HtmlPreviewer :code="comparisonHtml" />

<!-- markdownlint-enable MD033 -->
