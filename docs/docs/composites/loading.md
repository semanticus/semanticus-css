---
title: Loading
---

<script setup>
import { LoadingDemo } from "@demos/composites";
</script>

# Loading

Loading indicators are implemented using the [ARIA: aria-busy attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy), which consists of an element with `aria-busy="true"` to signal assistive technologies that an element is being updated and its contents are not yet ready.

Or with the `<progress>` element for operations with measurable progress.

## Loading Card

Use `aria-busy="true"` on containers like cards to indicate content is loading:

<HtmlPreviewer :code="LoadingDemo.loadingCard()" />

## Loading Button

For buttons, combine `aria-busy="true"` with the `disabled` attribute:

<HtmlPreviewer :code="LoadingDemo.loadingButton()" />

## Loading with Progress

For operations with measurable progress, use the `<progress>` element to show completion percentage:

<HtmlPreviewer :code="LoadingDemo.loadingWithProgress()" />

## Related

- [[aria-busy]](/docs/semantics/aria-busy) - ARIA attribute for indicating loading state
- [[progress]](/docs/semantics/progress) - HTML element for displaying progress of an operation
