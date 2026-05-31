import { renderElement } from "@scripts/utils";

const defaultOptions = `<option selected disabled value="">
Select your favorite cuisine...
</option>
<option>Italian</option>
<option>Japanese</option>
<option>Indian</option>
<option>Thai</option>
<option>French</option>`;

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement("select", attrs, slot || defaultOptions);
}

export function multipleSelect(attrs: Record<string, string> = {}) {
  return renderElement(
    "select",
    {
      ...attrs,
      "aria-label": "Select your favorite snacks...",
      multiple: "multiple",
      size: "6",
    },
    `<option disabled>
  Select your favorite snacks...
</option>
<option>Cheese</option>
<option selected>Fruits</option>
<option selected>Nuts</option>
<option>Chocolate</option>
<option>Crackers</option>`,
  );
}

export function withOptgroup(attrs: Record<string, string> = {}) {
  return renderElement(
    "select",
    { ...attrs, "aria-label": "Select your country..." },
    `<optgroup label="North America">
  <option>United States</option>
  <option>Canada</option>
</optgroup>
<optgroup label="Europe">
  <option>United Kingdom</option>
  <option>France</option>
</optgroup>`,
  );
}

export function validationStates() {
  return `${main({ "aria-invalid": "false" })}

${main({ "aria-invalid": "true" })}`;
}

export function withLabel(attrs: Record<string, string> = {}) {
  const mergedAttrs = { name: "dish", ...attrs };
  mergedAttrs["id"] ||= `select-${mergedAttrs["name"]}`;
  const label = `${mergedAttrs["name"].charAt(0).toUpperCase()}${mergedAttrs["name"].slice(1)}`;

  return `<label for="${mergedAttrs["id"]}">${label}</label>
${main(mergedAttrs)}`;
}

export function withHelperText(
  attrs: Record<string, string> = {},
  helperText: string = "Subject to availability.",
) {
  const mergedAttrs = { name: "dish", ...attrs };
  mergedAttrs["id"] ||= `select-${mergedAttrs["name"]}`;
  mergedAttrs["aria-describedby"] ||= `${mergedAttrs["id"]}-helper`;

  return `${withLabel(mergedAttrs)}
<small id="${mergedAttrs["aria-describedby"]}">${helperText}</small>`;
}

export function validationStatesWithTextHelper() {
  return `${withHelperText({ "aria-invalid": "false", name: "first-dish" }, "Looks good!")}

${withHelperText({ "aria-invalid": "true", name: "second-dish" }, "Sorry this dish is not available.")}`;
}
