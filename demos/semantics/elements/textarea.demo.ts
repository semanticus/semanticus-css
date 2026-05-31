import { renderAttributes } from "@scripts/utils";

function defaultAttrs(attrs: Record<string, string>) {
  const mergedAttrs = { name: "message", ...attrs };
  mergedAttrs["placeholder"] ||= `Type your ${mergedAttrs["name"]}`;
  return mergedAttrs;
}

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  return `<textarea${renderAttributes(defaultAttrs(attrs))}>${slot}</textarea>`;
}

export function withRows() {
  return `<textarea rows="3" placeholder="Three rows"></textarea>
<textarea rows="6" placeholder="Six rows"></textarea>
`;
}

export function validationStates() {
  return `${main({ "aria-invalid": "false" }, "Valid text")}

${main({ "aria-invalid": "true" }, "Invalid text")}`;
}

export function withLabel(attrs: Record<string, string> = {}) {
  const mergedAttrs = defaultAttrs(attrs);
  mergedAttrs["id"] ||= `textarea-${mergedAttrs["name"]}`;
  const label =
    attrs["placeholder"] ||
    `${mergedAttrs["name"].charAt(0).toUpperCase()}${mergedAttrs["name"].slice(1)}`;

  return `<label for="${mergedAttrs["id"]}">${label}</label>
${main(mergedAttrs)}`;
}

export function withHelperText(
  attrs: Record<string, string> = {},
  helperText: string = "Maximum 200 characters.",
) {
  const mergedAttrs = defaultAttrs(attrs);
  mergedAttrs["id"] ||= `textarea-${mergedAttrs["name"]}`;
  mergedAttrs["aria-describedby"] ||= `${mergedAttrs["id"]}-helper`;

  return `${withLabel(mergedAttrs)}
<small id="${mergedAttrs["aria-describedby"]}">${helperText}</small>`;
}

export function validationStatesWithTextHelper() {
  return `${withHelperText({ "aria-invalid": "false", name: "first-story" }, "Looks good!")}

${withHelperText({ "aria-invalid": "true", name: "second-story" }, "Cannot be bigger than 200 characters.")}`;
}
