import { renderElement } from "@scripts/utils";

export function inCard() {
  return renderElement("div", { class: "card", style: "max-width: 360px;" }, `<button aria-label="Close" class="close"></button>
<hgroup>
  <h2>Card title</h2>
  <p>This is the subtitle</p>
</hgroup>
<p>This is the main content of the card.</p>`);
}

export function inAlert() {
  return `${renderElement(
    "section",
    { class: "alert success", role: "status" },
    `<p>Your changes have been saved successfully!</p>
<button aria-label="Close alert" class="close"></button>`
  )}

${renderElement(
    "section",
    { class: "alert danger", role: "alert" },
    `<p>An error occurred while processing your request.</p>
<button aria-label="Close alert" class="close"></button>`
  )}`;
}
