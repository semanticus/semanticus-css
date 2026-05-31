import { renderElement } from "@scripts/utils";

function defaultAttrs(attrs: Record<string, string>) {
  const mergedAttrs = {
    type: "text",
    ...attrs,
  };
  mergedAttrs["placeholder"] ||= `Type your ${mergedAttrs["type"]}`;
  return mergedAttrs;
}

export function main(attrs: Record<string, string> = {}) {
  return renderElement("input", defaultAttrs(attrs));
}

export function withLabel(attrs: Record<string, string> = {}) {
  const mergedAttrs = defaultAttrs({
    type: "email",
    ...attrs,
  });
  mergedAttrs["id"] ||= `input-${mergedAttrs["type"]}`;
  const label =
    attrs["placeholder"] ||
    `${mergedAttrs["type"].charAt(0).toUpperCase()}${mergedAttrs["type"].slice(1)}`;

  return `<label for="${mergedAttrs["id"]}">${label}</label>
${main(mergedAttrs)}`;
}

export function withHelperText(
  attrs: Record<string, string> = {},
  helperText: string = "Cannot be empty.",
) {
  const mergedAttrs = {
    type: "email",
    ...attrs,
  };
  mergedAttrs["id"] ||= `input-${mergedAttrs["type"]}`;
  mergedAttrs["aria-describedby"] ||= `${mergedAttrs["id"]}-helper`;

  return `${withLabel(mergedAttrs)}
<small id="${mergedAttrs["aria-describedby"]}">${helperText}</small>`;
}

export function validationStatesWithTextHelper() {
  return `${withHelperText({ id: "first-name", "aria-invalid": "false", value: "John", placeholder: "First Name", type: "text" }, "First name looks good!")}

${withHelperText({ id: "last-name", "aria-invalid": "true", placeholder: "Last Name", type: "text" }, "Last name cannot be empty.")}`;
}

export function miscellaneousTypes() {
  return [
    withLabel({ type: "number" }),
    withLabel({ type: "password" }),
    withLabel({ type: "telefone" }),
    withLabel({ type: "url" }),
  ].join("\n");
}

export function dateTypes() {
  return `${withLabel({ type: "date" })}

${withLabel({ type: "datetime-local" })}

${withLabel({ type: "month" })}

${withLabel({ type: "time" })}`;
}

export function button(
  attrs: Record<string, string> = {},
  value: string = "Input Button",
) {
  return renderElement("input", {
    ...attrs,
    type: "button",
    value: value,
  });
}

export function submit(
  attrs: Record<string, string> = {},
  value: string = "Input Submit",
) {
  return renderElement("input", {
    ...attrs,
    type: "submit",
    value: value,
  });
}

export function reset(
  attrs: Record<string, string> = {},
  value: string = "Input Reset",
) {
  return renderElement("input", {
    ...attrs,
    type: "reset",
    value: value,
  });
}

export function buttons(attrs: Record<string, string> = {}) {
  return `${button(attrs)}
${submit(attrs)}
${reset(attrs)}`;
}

export function checkboxBasic(attrs: Record<string, string> = {}) {
  return `<label>
  ${renderElement("input", {
    ...attrs,
    type: "checkbox",
    checked: "checked",
  })}
  Checkbox
</label>
`;
}

export function checkboxVertical() {
  return `<fieldset>
  <legend>Language preferences:</legend>
  <label>
    ${renderElement("input", {
      type: "checkbox",
      name: "english",
      checked: "checked",
    })}
    English
  </label>
  <label>
    ${renderElement("input", {
      type: "checkbox",
      name: "mandarin",
    })}
    Mandarin
  </label>
  <label aria-disabled="true">
    ${renderElement("input", {
      type: "checkbox",
      name: "dothraki",
      disabled: "disabled",
    })}
    Dothraki
  </label>
</fieldset>
`;
}

export function checkboxHorizontal() {
  return `<fieldset>
  <legend>Language preferences:</legend>
  ${renderElement("input", {
    type: "checkbox",
    id: "hindi",
    name: "hindi",
    checked: "checked",
  })}
  <label for="hindi">Hindi</label>
  ${renderElement("input", {
    type: "checkbox",
    id: "swahili",
    name: "swahili",
  })}
  <label for="swahili">Swahili</label>
  ${renderElement("input", {
    type: "checkbox",
    id: "navi",
    name: "navi",
    disabled: "disabled",
  })}
  <label for="navi" aria-disabled="true">Na'vi</label>
</fieldset>
`;
}

export function radioBasic(attrs: Record<string, string> = {}) {
  return `<label>
  ${renderElement("input", {
    ...attrs,
    type: "radio",
    checked: "checked",
    value: "yes",
  })}
  Radio button
</label>
`;
}

export function radioVertical() {
  return `<fieldset>
  <legend>Language preference:</legend>
  <label>
    ${renderElement("input", {
      type: "radio",
      name: "language",
      checked: "checked",
      value: "english",
    })}
    English
  </label>
  <label>
    ${renderElement("input", {
      type: "radio",
      name: "language",
      value: "mandarin",
    })}
    Mandarin
  </label>
  <label aria-disabled="true">
    ${renderElement("input", {
      type: "radio",
      name: "language",
      value: "dothraki",
      disabled: "disabled",
    })}
    Dothraki
  </label>
</fieldset>
`;
}

export function radioHorizontal() {
  return `<fieldset>
  <legend>Second language:</legend>
  ${renderElement("input", {
    type: "radio",
    id: "hindi",
    name: "second-language",
    checked: "checked",
    value: "hindi",
  })}
  <label for="hindi">Hindi</label>
  ${renderElement("input", {
    type: "radio",
    id: "swahili",
    name: "second-language",
    value: "swahili",
  })}
  <label for="swahili">Swahili</label>
  ${renderElement("input", {
    type: "radio",
    id: "navi",
    name: "second-language",
    value: "navi",
    disabled: "disabled",
  })}
  <label for="navi" aria-disabled="true">Na'vi</label>
</fieldset>
`;
}

export function rangeBasic(attrs: Record<string, string> = {}) {
  return `<label>
  Range slider
  ${renderElement("input", { ...attrs, type: "range" })}
</label>
`;
}

export function rangeWithMinMax() {
  return `<label>
  Volume
  ${renderElement("input", { type: "range", min: "0", max: "100", value: "50" })}
</label>
`;
}

export function rangeWithStep() {
  return `<label>
  Rating (0-10)
  ${renderElement("input", { type: "range", min: "0", max: "10", step: "1", value: "5" })}
</label>
`;
}

export function switchBasic(attrs: Record<string, string> = {}) {
  return `<label>
  ${renderElement("input", {
    ...attrs,
    type: "checkbox",
    checked: "checked",
    role: "switch",
  })}
  Switch
</label>
`;
}
