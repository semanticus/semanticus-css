---
title: Modal
---

<script setup>
import { ModalDemo } from "@demos/composites";
</script>

# Modal

Modals are implemented using the `<dialog>` element with an `<article>` element inside for the modal content.

## Basic Modal

Inside the `<header>`, if a `<button rel="prev">` is present, it will be defined to `float: right;` allowing a close icon to be top aligned with a title (keep it before the title so it can float right without needing to be absolutely positioned).

<HtmlPreviewer :code="ModalDemo.basicModal()" />

Inside `<footer>`, the content is right aligned by default.

<HtmlPreviewer :code="ModalDemo.withFooter()" />

## Launch Modal (CSS-only, no JavaScript required)

Modals can be triggered without JavaScript using the `:target` pseudo-class. This modern CSS approach works by linking to the modal's ID with an anchor element.

### How it works

1. Give your `<dialog>` a unique `id` attribute
2. Create an opening link/button with `href="#your-modal-id"`
3. The modal will display when the URL hash matches its ID
4. Close the modal by clicking a link that changes the hash (e.g., `href="#"`)

<HtmlPreviewer :code="ModalDemo.cssOnlyModal()" />

### Key points for CSS-only modals

- Use `<a>` tags instead of `<button>` by making use of the CSS `:target` selector
- The close button should link to `href="#"` to clear the URL hash
- The modal automatically closes when clicking the browser's back button
- This approach works in all modern browsers and degrades gracefully

## Automatic Modal Behavior

### Body Scroll Locking
When a `<dialog>` element has the `[open]` attribute, the framework automatically:

- Prevents scrolling on the body
- Blocks pointer events and touch actions on the body (except on the dialog itself)
- Compensates for scrollbar width to prevent layout shift

No JavaScript or classes needed — it just works with pure CSS using the `:has()` selector.

### Opening Animation

Dialogs include a subtle fade-in animation when they open:
- Backdrop fades in with a blur effect
- Modal content slides down from the top

This uses the `@starting-style` CSS at-rule for smooth entry animations. The animation gracefully degrades to instant appearance in browsers without support (e.g., Firefox ESR).

## Reference

The `<dialog>` element is a native modal and non-modal dialog container. Set the `open` attribute to make it visible. When opened programmatically with `.showModal()`, it traps focus and exposes built-in accessibility roles for screen readers.
