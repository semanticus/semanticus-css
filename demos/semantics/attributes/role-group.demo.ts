import { renderElement } from "@demos/utils";
import * as DetailsDemo from "@demos/semantics/elements/details.demo";

function render(tagName: string, attrs: Record<string, string>, slot: string = "") {
  return renderElement(tagName, attrs, slot);
}

export function basic(tagName: string = "div", attrs: Record<string, string> = {}) {
  return render(tagName, { ...attrs, role: "group" }, `<button>One</button>
<button>Two</button>
<button>Three</button>`);
}

export function inputWithButton(tagName: string = "fieldset", attrs: Record<string, string> = {}) {
  return render(tagName, { ...attrs, role: "group" }, `<input type="email" name="email" placeholder="Enter your email" autocomplete="email" />
<input type="submit" value="Subscribe" />`);
}

export function twoInputsWithButton(tagName: string = "fieldset", attrs: Record<string, string> = {}) {
  return render(tagName, { ...attrs, role: "group" }, `<input type="text" placeholder="First name">
<input type="text" placeholder="Last name">
<button>Save</button>`);
}

export function selectWithButton(tagName: string = "fieldset", attrs: Record<string, string> = {}) {
  return render(tagName, { ...attrs, role: "group" }, `<select>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
<button>Action</button>`);
}

export function dropdownWithButton(tagName: string = "fieldset", attrs: Record<string, string> = {}) {
  return render(tagName, { ...attrs, role: "group" }, `${DetailsDemo.dropdownWithCheckboxes({ class: 'w-100' })}
<button>Action</button>`);
}

export function pagination(tagName: string = "fieldset", attrs: Record<string, string> = {}) {
  return render(tagName, { ...attrs, role: "group" }, `<a href="#" role="button" disabled>Previous</a>
<a href="#page-1" role="button">1</a>
<a href="#page-2" role="button" aria-current="page">2</a>
<a href="#page-3" role="button">3</a>
<a href="#page-3" role="button">Next</a>`);
}

export function newsletterForm(tagName: string = "fieldset", attrs: Record<string, string> = {}) {
  return `<form>
  <label for="email">Subscribe to our newsletter</label>
  ${render(tagName, { ...attrs, role: "group" }, `
    <input type="email" id="email" placeholder="your@email.com">
    <button type="submit">Subscribe</button>
  `)}
</form>`;
}
