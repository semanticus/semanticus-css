import { renderElement } from "@scripts/utils";

export function main(tagName: string = "article", attrs: Record<string, string> = {}, slot: string = "Loading content...") {
  return renderElement(tagName, { class: 'card', ...attrs, "aria-busy": "true" }, slot);
}

export function inline(attrs: Record<string, string> = {}) {
  return `<p>Your profile is ${renderElement("span", { ...attrs, "aria-busy": "true" }, "saving")}</p>`;
}

export function loadingButton(attrs: Record<string, string> = {}) {
  return renderElement("button", { ...attrs, disabled: "disabled", "aria-busy": "true" }, "Loading...");
}

export function loadingForm(attrs: Record<string, string> = {}) {
  return renderElement("form", { ...attrs, "aria-busy": "true" }, `<label>Name</label>
<input type="text" disabled>
<label>Email</label>
<input type="email" disabled>
<button disabled>Submit</button>`);
}
