---
title: Modal
---

<script setup>
const modalExample = `<div style="min-height: 250px;">
  <dialog open>
    <article class="card">
      <header>
        <button aria-label="Close" rel="prev"></button>
        <h3>Modal Title</h3>
      </header>
      <p>This is a modal dialog built with the native <code>&lt;dialog&gt;</code> element and an element with the <code>.card</code> class for content.</p>
      <footer>
        <button class="secondary">Cancel</button>
        <button>Confirm</button>
      </footer>
    </article>
  </dialog>
</div>
`;
</script>

# Modal

Modals are implemented using the `<dialog>` element with an element having the `.card` class inside.

## Basic Modal

<HtmlPreviewer :code="modalExample" />

## Reference

For more modal examples including CSS-only triggering and styling options, see [&lt;dialog&gt;](/docs/semantics/dialog).
