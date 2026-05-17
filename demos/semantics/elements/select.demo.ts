import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement("select", { ...attrs, name: "favorite-cuisine", "aria-label": "Select your favorite cuisine...", required: "required" }, `<option selected disabled value="">
  Select your favorite cuisine...
</option>
<option>Italian</option>
<option>Japanese</option>
<option>Indian</option>
<option>Thai</option>
<option>French</option>`);
}

export function multipleSelect(attrs: Record<string, string> = {}) {
  return renderElement("select", { ...attrs, "aria-label": "Select your favorite snacks...", multiple: "multiple", size: "6" }, `<option disabled>
  Select your favorite snacks...
</option>
<option>Cheese</option>
<option selected>Fruits</option>
<option selected>Nuts</option>
<option>Chocolate</option>
<option>Crackers</option>`);
}

export function withOptgroup(attrs: Record<string, string> = {}) {
  return renderElement("select", { ...attrs, "aria-label": "Select your country..." }, `<optgroup label="North America">
  <option>United States</option>
  <option>Canada</option>
</optgroup>
<optgroup label="Europe">
  <option>United Kingdom</option>
  <option>France</option>
</optgroup>`);
}

export function withLabel() {
  return `<label for="message">Dish</label>
${main({ id: 'message' })}
`;
}

export function withHelperText() {
  return `<label for="dish-message">Dish</label>
${main({ id: 'dish-message', 'aria-describedby': 'dish-message-helper' })}
<small id="dish-message-helper">Subject to availability.</small>
`;
}

export function validationStates() {
  return `${main({ 'aria-invalid': 'false' })}

${main({ 'aria-invalid': 'true' })}`;
}

export function validationStatesWithTextHelper() {
  return `${main({ 'aria-invalid': 'false', 'aria-describedby': 'valid-helper' })}
<small id="valid-helper">Looks good!</small>

${main({ 'aria-invalid': 'true', 'aria-describedby': 'invalid-helper' })}
<small id="invalid-helper">Sorry this dish is not available.</small>
`;
}
