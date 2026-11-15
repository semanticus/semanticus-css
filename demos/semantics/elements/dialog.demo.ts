import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as ButtonDemo from "@demos/semantics/elements/button.demo";

const defaultId = "dialog-basic";

function thankYouWithCloseButtonContent(attrs: Record<string, string>) {
  return `<h2 id="modal-title">&#x1F4C5; Thank You for Registering!</h2>

<article id="modal-description" class="text-center">
  <p>
    We're excited to have you join us for our
    upcoming event.
  </p>

  <button class="secondary" commandfor="${attrs.id}" command="close">Close</button>
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

  return renderElement("dialog", mergedAttrs, slot || thankYouWithCloseButtonContent(mergedAttrs));
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return main(classMergeAttributes("card", attrs), headerAndFooterContent(attrs));
}

export function modal(attrs: Record<string, string> = {}, slot: string = "") {
  const mergedAttrs = { id: "dialog-modal", ...attrs };

  return main(mergedAttrs, slot || thankYouWithCloseButtonContent(mergedAttrs));
}

export function modalCardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return modal(classMergeAttributes("card", attrs), headerAndFooterContent(attrs));
}

export function showModalCardWithHeaderAndFooter(
  attrs: Record<string, string> = {},
) {
  return `<button command="show-modal" commandfor="dialog-header-footer" class="contrast">Show Modal</button>

${modalCardWithHeaderAndFooter({ ...attrs, id: "dialog-header-footer" })}`;
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

export function showDialogCardAlert(attrs: Record<string, string> = {}) {
  const mergedAttrs = { id: "dialog-alert", ...attrs };

  return `<button command="show-modal" commandfor="${mergedAttrs.id}" class="contrast">Show Dialog Alert</button>

${dialogCardAlert(mergedAttrs)}`;
}

export function dialogCardAlert(
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  const mergedAttrs = { id: "dialog-alert", ...classMergeAttributes("card", attrs), role: "alertdialog" };

  return main(mergedAttrs, slot || dialogCardAlertContent(mergedAttrs));
}

function dialogCardAlertContent(attrs: Record<string, string>) {
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
