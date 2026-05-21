import { renderElement } from "@scripts/utils";

const defaultId = "dialog-basic";

function headerAndFooterContent(attrs: Record<string, string>) {
  return `<header>
  <h2 id="modal-title">Confirm Your Membership</h2>
  <button aria-label="Close" rel="prev" commandfor="${attrs.id || defaultId}" command="close"></button>
</header>

<div id="modal-description">
  <p>
    Thank you for signing up for a membership!
    Please review the membership details below:
  </p>

  <ul>
    <li>Membership: Individual</li>
    <li>Price: $10</li>
  </ul>
</div>

<footer>
  <button class="secondary" commandfor="${attrs.id || defaultId}" command="close">
    Cancel
  </button>
  <button commandfor="${attrs.id || defaultId}" command="close">Confirm</button>
</footer>`;
}

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  const mergedAttrs = { id: defaultId, ...attrs, "aria-labelledby": "modal-title", "aria-describedby": "modal-description" };

  return renderElement("dialog", mergedAttrs, slot || `<button aria-label="Close" rel="prev" commandfor="${mergedAttrs.id}" command="close"></button>
<h3 id="modal-title">&#x1F4C5; Thank You for Registering!</h3>

<div id="modal-description">
  <p>
    We're excited to have you join us for our
    upcoming event. Please arrive at the museum
    on time to check in and get started.
  </p>

  <ul>
    <li>Date: Saturday, April 15</li>
    <li>Time: 10:00am - 12:00pm</li>
  </ul>
</div>`);
}

export function withHeaderAndFooter(attrs: Record<string, string> = {}) {
  return main(attrs, headerAndFooterContent(attrs));
}

export function modal(attrs: Record<string, string> = {}, slot: string = "") {
  return main(attrs, slot);
}

export function showModal(attrs: Record<string, string> = {}) {
  return `<button command="show-modal" commandfor="${defaultId}" class="contrast">Show Modal</button>

${modal(attrs)}`;
}

export function modalWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return modal(attrs, headerAndFooterContent(attrs));
}

export function showModalWithHeaderAndFooter(attrs: Record<string, string> = {}) {
    return `<button command="show-modal" commandfor="dialog-header-footer" class="contrast">Show Modal</button>

${modalWithHeaderAndFooter({ ...attrs, id: "dialog-header-footer" })}`;
}
