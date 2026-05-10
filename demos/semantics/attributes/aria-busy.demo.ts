import { renderElement } from "@demos/utils";

function render(tagName: string, attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement(tagName, attrs, slot);
}

export function basic(tagName: string = "article", attrs: Record<string, string> = {}, slot: string = "Loading content...") {
  return render(tagName, { class: 'card', ...attrs, "aria-busy": "true" }, slot);
}

export function inline(attrs: Record<string, string> = {}) {
  return `<p>Your profile is ${render("span", { ...attrs, "aria-busy": "true" }, "saving")}</p>`;
}

export function loadingButton(attrs: Record<string, string> = {}) {
  return render("button", { ...attrs, disabled: "disabled", "aria-busy": "true" }, "Loading...");
}

export function loadingForm(attrs: Record<string, string> = {}) {
  return render("form", { ...attrs, "aria-busy": "true" }, `
<label>Name</label>
<input type="text" disabled>
<label>Email</label>
<input type="email" disabled>
<button disabled>Submit</button>`);
}
