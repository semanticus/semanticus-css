---
layout: home

hero:
  name: "Semanticus CSS"
  text: "ARIA-centric, semantic HTML"
  tagline: "enhanced by atomic utilities."
  image:
    src: /logo.svg
    alt: Semanticus CSS
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: Docs
      link: /docs/
    - theme: alt
      text: GitHub
      link: https://github.com/semanticus/semanticus-css

features:
  - icon:
      src: /icons/readability.svg
    title: Semantic First
    details: Style plain HTML elements without adding classes. Clean, readable markup that looks beautiful out of the box.
  - icon:
      src: /icons/accessibility.svg
    title: Accessibility
    details: ARIA-first patterns ensure accessible interfaces by default; core behavior works without JavaScript and can be enhanced progressively.
  - icon:
      src: /icons/flexibility.svg
    title: Best of Both Worlds
    details: Use semantic styles, utility classes, or both — whatever fits the situation. No rigid paradigms.
  - icon:
      src: /icons/performance.svg
    title: Lightweight
    details: Minimal CSS footprint with zero JavaScript dependency. ~23 KB gzipped for lightning-fast page loads.
  - icon:
      src: /icons/consistency.svg
    title: Consistent Design
    details: Predictable styling across your project. Semantic and utility layers share the same CSS variables and design tokens.
  - icon:
      src: /icons/customizability.svg
    title: Customizable
    details: Override CSS variables to create your own themes, or choose from a list of pre-built color palettes and adjustable sizing options.

footer: MIT Licensed | Copyright 2024-present
---

## Install

Add Semanticus CSS to your project via CDN, manual download, or npm:

<InstallGuide />

## How It Works

Semanticus CSS is built on three complementary layers:

### 1. Semantic Styling

Beautiful default styles for plain **ARIA-centric** HTML — no classes needed.

<HtmlPreviewer :code="example1Html" />

### 2. Variants

Minimal set of CSS classes that add visual variation to the **Semantic Styling**.

<HtmlPreviewer :code="example3Html" />

### 3. Utilities

Utility classes for **spacing**, **layout**, **colors**, and more — adapted to the **Semantic Styling** and **Variants** values for a consistent design.

<HtmlPreviewer :code="example2Html" />


<script setup>
const example1Html = `<article>
  <h1>Hello World</h1>
  <p>
    This is a paragraph with
    <strong>bold</strong> and <em>italic</em> text.
  </p>
  <button>Click me</button>
</article>
`;
const example2Html = `<footer class="py-4 text-center text-bg-contrast-subtle">
  <p class="mb-0">Star us on GitHub!</p>
</footer>
`;
const example3Html = `<button class="ghost">Ghost</button>
<button class="secondary">Secondary</button>
<button class="contrast">Contrast</button>
`;
</script>

<style>
.VPHome {
  padding-bottom: 0;
}

/* VitePress doc content below home features */
.VPHome .vp-doc {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 24px 80px;

  h2 {
    margin-top: 55px;
    border-top: none;
  }
}
</style>
