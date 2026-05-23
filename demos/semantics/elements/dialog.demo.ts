import { renderElement } from "@scripts/utils";
import * as ButtonDemo from "@demos/semantics/elements/button.demo";

const defaultId = "dialog-basic";

function thankYouContent() {
  return `<h3 id="modal-title">&#x1F4C5; Thank You for Registering!</h3>

<article id="modal-description">
  <p>
    We're excited to have you join us for our
    upcoming event. Please arrive at the museum
    on time to check in and get started.
  </p>

  <ul>
    <li>Date: Saturday, April 15</li>
    <li>Time: 10:00am - 12:00pm</li>
  </ul>
</article>`;
}

function thankYouWithCloseButtonContent(attrs: Record<string, string>) {
  return `${renderElement("nav", {}, `<h3 id="modal-title">&#x1F4C5; Thank You for Registering!</h3>

${closeButton(attrs.id)}`)}

<br>

<article id="modal-description">
  <p>
    We're excited to have you join us for our
    upcoming event.
  </p>
</article>`;
}

function closeButton(commandFor: string) {
  return ButtonDemo.closeButton({ commandfor: commandFor, command: "close" });
}

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  const mergedAttrs = { id: defaultId, ...attrs, "aria-labelledby": "modal-title", "aria-describedby": "modal-description" };

  return renderElement("dialog", mergedAttrs, slot || thankYouContent());
}

export function withCloseButton(attrs: Record<string, string> = {}) {
  const mergedAttrs = { id: "dialog-close-button", ...attrs };

  return main(mergedAttrs, thankYouWithCloseButtonContent(mergedAttrs));
}

export function withHeaderAndFooter(attrs: Record<string, string> = {}) {
  return main(attrs, headerAndFooterContent(attrs));
}

export function modal(attrs: Record<string, string> = {}, slot: string = "") {
  const mergedAttrs = { id: "dialog-modal", ...attrs };

  return main(mergedAttrs, slot || thankYouWithCloseButtonContent(mergedAttrs));
}

export function showModal(attrs: Record<string, string> = {}) {
  const mergedAttrs = { id: "dialog-modal", ...attrs };

  return `<button command="show-modal" commandfor="${mergedAttrs.id}" class="contrast">Show Modal</button>

${modal(mergedAttrs)}`;
}

export function modalWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return modal(attrs, headerAndFooterContent(attrs));
}

export function showModalWithHeaderAndFooter(attrs: Record<string, string> = {}) {
    return `<button command="show-modal" commandfor="dialog-header-footer" class="contrast">Show Modal</button>

${modalWithHeaderAndFooter({ ...attrs, id: "dialog-header-footer" })}`;
}

function headerAndFooterContent(attrs: Record<string, string>) {
  return `<header>
  <h2 id="modal-title">Confirm Your Membership</h2>
  ${closeButton(attrs.id || defaultId)}
</header>

<article id="modal-description">
  <p>
    Thank you for signing up for a membership!
    Please review the membership details below:
  </p>

  <ul>
    <li>Membership: Individual</li>
    <li>Price: $10</li>
  </ul>
</article>

<footer>
  <button class="secondary" commandfor="${attrs.id || defaultId}" command="close">
    Cancel
  </button>
  <button commandfor="${attrs.id || defaultId}" command="close">Confirm</button>
</footer>`;
}

export function dialogAlert(attrs: Record<string, string> = {}, slot: string = "") {
  const mergedAttrs = { id: "dialog-alert", ...attrs, role: "alertdialog" };

  return main(mergedAttrs, slot || dialogAlertContent(mergedAttrs));
}

export function showDialogAlert(attrs: Record<string, string> = {}) {
  const mergedAttrs = { id: "dialog-alert", ...attrs };

  return `<button command="show-modal" commandfor="${mergedAttrs.id}" class="contrast">Show Dialog Alert</button>

${dialogAlert(mergedAttrs)}`;
}

function dialogAlertContent(attrs: Record<string, string>) {
  return `<header>
  <h2 id="modal-title">Are you sure?</h2>
</header>

<div id="modal-description">
  <p>Are you sure you want to proceed with this action?</p>
</div>

<footer>
  <button class="secondary" commandfor="${attrs.id}" command="close">No</button>
  <button commandfor="${attrs.id}" command="close">Yes</button>
</footer>`;
}
