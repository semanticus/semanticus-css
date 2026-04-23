---
title: 'aria-busy="true"'
---

<script setup>
const example1Html = `<article class="card" aria-busy="true">
  Loading content...
</article>
`;
const example2Html = `<button aria-busy="true" disabled>Loading...</button>
`;
const example3Html = `<article class="card" aria-busy="true">
  <header>
    <h3>Loading Title</h3>
  </header>
  <p>Loading content...</p>
</article>
`;
const example4Html = `<form aria-busy="true">
  <label>Name</label>
  <input type="text" disabled>
  <label>Email</label>
  <input type="email" disabled>
  <button disabled>Submit</button>
</form>
`;
</script>

# [aria-busy]

The `aria-busy="true"` attribute signals to assistive technologies that an element is being updated and its contents are not yet ready.

Use it on any container or interactive element to communicate a loading state.

## Basic Loading

<HtmlPreviewer :code="example1Html" />

## Loading Button

<HtmlPreviewer :code="example2Html" />

## Loading Card

<HtmlPreviewer :code="example3Html" />

## Loading Form

<HtmlPreviewer :code="example4Html" />

## Best Practices

1. **Show progress** - If duration is known
2. **Keep users informed** - Don't leave them guessing
3. **Provide alternatives** - Allow cancellation
4. **Accessibility** - Use `aria-busy` appropriately
