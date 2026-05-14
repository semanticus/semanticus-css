import { renderElement } from "@scripts/utils";

function render(attrs: Record<string, string>) {
  return renderElement("input", attrs);
}

export function main(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "text",
    name: "text",
    placeholder: "Text",
    "aria-label": "Text",
  });
}

export function button(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "button",
    value: "Input Button"
  });
}

export function submit(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "submit",
    value: "Input Submit"
  });
}

export function reset(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "reset",
    value: "Input Reset"
  });
}

export function email(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "email",
    placeholder: "email@example.com",
    "aria-label": "Email",
    autocomplete: "email",
  });
}

export function number(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "number",
    placeholder: "Number",
    "aria-label": "Number",
  });
}

export function password(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "password",
    placeholder: "Password",
    "aria-label": "Password",
  });
}

export function telephone(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "tel",
    placeholder: "Tel",
    "aria-label": "Tel",
    autocomplete: "tel",
  });
}

export function url(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "url",
    placeholder: "https://example.com",
    "aria-label": "Url",
  });
}

export function date(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "date",
    "aria-label": "Date",
  });
}

export function datetime(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "datetime-local",
    "aria-label": "Datetime local",
  });
}

export function month(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "month",
    "aria-label": "Month",
  });
}

export function time(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "time",
    "aria-label": "Time",
  });
}

export function search(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "search",
    placeholder: "Search",
    "aria-label": "Search",
  });
}

export function color(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "color",
    value: "#ff9500",
    "aria-label": "Color picker",
  });
}

export function file(attrs: Record<string, string> = {}) {
  return render({
    ...attrs,
    type: "file",
  });
}

export function checkboxBasic(attrs: Record<string, string> = {}) {
  return `<label>
  ${render({
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
    ${render({
      type: "checkbox",
      name: "english",
      checked: "checked",
    })}
    English
  </label>
  <label>
    ${render({
      type: "checkbox",
      name: "mandarin",
    })}
    Mandarin
  </label>
  <label aria-disabled="true">
    ${render({
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
  ${render({
    type: "checkbox",
    id: "hindi",
    name: "hindi",
    checked: "checked",
  })}
  <label for="hindi">Hindi</label>
  ${render({
    type: "checkbox",
    id: "swahili",
    name: "swahili",
  })}
  <label for="swahili">Swahili</label>
  ${render({
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
  ${render({
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
    ${render({
      type: "radio",
      name: "language",
      checked: "checked",
      value: "english",
    })}
    English
  </label>
  <label>
    ${render({
      type: "radio",
      name: "language",
      value: "mandarin",
    })}
    Mandarin
  </label>
  <label aria-disabled="true">
    ${render({
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
  ${render({
    type: "radio",
    id: "hindi",
    name: "second-language",
    checked: "checked",
    value: "hindi",
  })}
  <label for="hindi">Hindi</label>
  ${render({
    type: "radio",
    id: "swahili",
    name: "second-language",
    value: "swahili",
  })}
  <label for="swahili">Swahili</label>
  ${render({
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
  ${render({ ...attrs, type: "range" })}
</label>
`;
}

export function rangeWithMinMax() {
  return `<label>
  Volume
  ${render({ type: "range", min: "0", max: "100", value: "50" })}
</label>
`;
}

export function rangeWithStep() {
  return `<label>
  Rating (0-10)
  ${render({ type: "range", min: "0", max: "10", step: "1", value: "5" })}
</label>
`;
}

export function switchBasic(attrs: Record<string, string> = {}) {
  return `<label>
  ${render({
    ...attrs,
    type: "checkbox",
    checked: "checked",
    role: "switch",
  })}
  Switch
</label>
`;
}
