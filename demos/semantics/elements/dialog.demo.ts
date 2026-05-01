import { renderElement } from "@demos/utils";

export function basic(attrs: Record<string, string> = {}) {
  return `<a href="#demo-modal" role="button">Open Modal</a>
<dialog id="demo-modal">
  <article>
    <header>
      <h3>Confirm Action</h3>
      <a href="#" rel="prev" aria-label="Close"></a>
    </header>
    <p>Are you sure you want to proceed? This action cannot be undone.</p>
    <footer>
      <a href="#" role="button" class="secondary">Cancel</a>
      <a href="#" role="button">Confirm</a>
    </footer>
  </article>
</dialog>`;
}

export function withForm(attrs: Record<string, string> = {}) {
  return `<a href="#form-modal" role="button" class="secondary">Open Form Dialog</a>
<dialog id="form-modal">
  <article>
    <header>
      <h3>Contact Us</h3>
      <a href="#" rel="prev" aria-label="Close"></a>
    </header>
    <label for="dialog-name">Name</label>
    <input type="text" id="dialog-name" placeholder="Your name" />
    <label for="dialog-email">Email</label>
    <input type="email" id="dialog-email" placeholder="you@example.com" />
    <footer>
      <a href="#" role="button" class="secondary">Cancel</a>
      <button type="submit">Send</button>
    </footer>
  </article>
</dialog>`;
}
