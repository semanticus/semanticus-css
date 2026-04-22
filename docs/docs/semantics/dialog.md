---
title: dialog
---

<script setup>
const example1Html = `<div style="min-height: 215px;">
  <dialog open>
    <article>
      <header>
        <button aria-label="Close" rel="prev"></button>
        <p>
          <strong>&#x1F4C5; Thank You for Registering!</strong>
        </p>
      </header>
      <p>
        We're excited to have you join us for our
        upcoming event. Please arrive at the museum
        on time to check in and get started.
      </p>
      <ul>
        <li>Date: Saturday, April 15</li>
        <li>Time: 10:00am - 12:00pm</li>
      </ul>
    </article>
  </dialog>
</div>
`;
const example2Html = `<div style="min-height: 250px;">
  <dialog open>
    <article>
      <h2>Confirm Your Membership</h2>
      <p>
        Thank you for signing up for a membership!
        Please review the membership details below:
      </p>
      <ul>
        <li>Membership: Individual</li>
        <li>Price: \$10</li>
      </ul>
      <footer>
        <button class="secondary">
          Cancel
        </button>
        <button>Confirm</button>
      </footer>
    </article>
  </dialog>
</div>
`;
const example3Html = `<div style="min-height: 250px;">
  <!-- Trigger button -->
  <a href="#modal-example" role="button">Open Modal</a>

  <!-- Modal -->
  <dialog id="modal-example">
    <article>
      <header>
        <a href="#!" aria-label="Close" rel="prev"></a>
        <h3>CSS-only Modal</h3>
      </header>
      <p>
        This modal is triggered purely with CSS using the :target pseudo-class.
        No JavaScript required!
      </p>
      <footer>
        <a href="#!" role="button" class="secondary">Close</a>
        <a href="#!" role="button">Confirm</a>
      </footer>
    </article>
  </dialog>
</div>
`;
</script>

# &lt;dialog&gt;

The `<dialog>` element is a native modal and non-modal dialog container.

Set the `open` attribute to make it visible.

When opened programmatically with `.showModal()`, it traps focus and exposes built-in accessibility roles for screen readers.

## Syntax

Modals are built with `<dialog>` as a wrapper and `<article>` for the modal content.

Inside `<header>`, `<button rel="prev">` is defined to `float: right;` allowing a close icon to be top aligned with a title (Keep it before the title so it can float right without needing to be absolutely positioned).

<HtmlPreviewer :code="example1Html" />

Inside `<footer>`, the content is right aligned by default.

<HtmlPreviewer :code="example2Html" />

## Launch Modal (CSS-only, no JavaScript required)

Modals can be triggered without JavaScript using the `:target` pseudo-class. This modern CSS approach works by linking to the modal's ID with an anchor element.

### How it works

1. Give your `<dialog>` a unique `id` attribute
2. Create an opening link/button with `href="#your-modal-id"`
3. The modal will display when the URL hash matches its ID
4. Close the modal by clicking a link that changes the hash (e.g., `href="#"` or `href="#!"`)

<HtmlPreviewer :code="example3Html" />

### Key points for CSS-only modals

- Use `<a>` tags instead of `<button>` by making use of the CSS `:target` selector
- The close button should link to `href="#"` or `href="#!"` to clear the URL hash
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
