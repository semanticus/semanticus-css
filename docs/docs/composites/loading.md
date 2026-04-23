---
title: Loading
---

<script setup>
const loadingCardExample = `<article class="card" aria-busy="true">
  <hgroup>
    <h3>Loading Content</h3>
    <p>Please wait while we fetch your data...</p>
  </hgroup>
</article>
`;

const loadingButtonExample = `<button aria-busy="true" disabled>Processing...</button>
<button class="secondary">Cancel</button>
`;

const loadingProgressExample = `<article class="card">
  <h3>Uploading File...</h3>
  <progress value="65" max="100">65%</progress>
  <small>Uploading document.pdf (65% complete)</small>
</article>
`;
</script>

# Loading

Loading indicators are implemented using the [ARIA: aria-busy attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy), which consists of an element with `aria-busy="true"` to signal assistive technologies that an element is being updated and its contents are not yet ready.

Or with the `<progress>` element for operations with measurable progress.

## Loading Card

Use `aria-busy="true"` on containers like cards to indicate content is loading:

<HtmlPreviewer :code="loadingCardExample" />

## Loading Button

For buttons, combine `aria-busy="true"` with the `disabled` attribute:

<HtmlPreviewer :code="loadingButtonExample" />

## Loading with Progress

For operations with measurable progress, use the `<progress>` element to show completion percentage:

<HtmlPreviewer :code="loadingProgressExample" />

## Related

- [[aria-busy]](/docs/semantics/aria-busy) - ARIA attribute for indicating loading state
- [[progress]](/docs/semantics/progress) - HTML element for displaying progress of an operation
