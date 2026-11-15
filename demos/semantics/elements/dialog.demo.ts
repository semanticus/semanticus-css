import { renderElement, classMergeAttributes } from "@scripts/utils";
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
  return `<h2 id="modal-title">&#x1F4C5; Thank You for Registering!</h2>

<article id="modal-description" class="text-center">
  <p>
    We're excited to have you join us for our
    upcoming event.
  </p>

  <button commandfor="${attrs.id}" command="close">See You There</button>
</article>`;
}

function closeButton(attrs: Record<string, string>) {
  return ButtonDemo.closeButton({ ...attrs, command: "close" });
}

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  const mergedAttrs = classMergeAttributes("", {
    id: defaultId,
    ...attrs,
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-description",
  });

  return renderElement("dialog", mergedAttrs, slot || thankYouContent());
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

export function showModalWithHeaderAndFooter(
  attrs: Record<string, string> = {},
) {
  return `<button command="show-modal" commandfor="dialog-header-footer" class="contrast">Show Modal</button>

${modalWithHeaderAndFooter({ ...attrs, id: "dialog-header-footer" })}`;
}

function headerAndFooterContent(attrs: Record<string, string>) {
  return `<header>
  <h1 id="modal-title">Confirm Your Membership</h1>
  ${closeButton({ class: "fs-3", commandfor: attrs.id || defaultId })}
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
  <button commandfor="${attrs.id || defaultId}" command="close">Confirm</button>
  <button class="secondary" commandfor="${attrs.id || defaultId}" command="close">
    Cancel
  </button>
</footer>`;
}

export function dialogAlert(
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  const mergedAttrs = { id: "dialog-alert", ...attrs, role: "alertdialog" };

  return main(mergedAttrs, slot || dialogAlertContent(mergedAttrs));
}

export function showDialogAlert(attrs: Record<string, string> = {}) {
  const mergedAttrs = { id: "dialog-alert", ...attrs };

  return `<button command="show-modal" commandfor="${mergedAttrs.id}" class="contrast">Show Dialog Alert</button>

${dialogAlert(mergedAttrs)}`;
}

function dialogAlertContent(attrs: Record<string, string>) {
  return `<hgroup>
  ${closeButton({ class: "fs-3 float-end", commandfor: attrs.id || defaultId })}
  <h1 id="modal-title">Are you sure?</h1>
  <p id="modal-description">This action is irreversible, proceed with caution.</p>
</hgroup>

<footer>
  <button commandfor="${attrs.id}" command="close">Yes</button>
  <button class="secondary" commandfor="${attrs.id}" command="close">No</button>
</footer>`;
}
