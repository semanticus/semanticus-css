import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}, value: string = "") {
  return renderElement("input", {
    placeholder: "Text",
    ...attrs,
    type: "text",
    name: "text",
    value: value,
  });
}

export function withLabel() {
  return `<label for="message">Message</label>
${main({ id: 'message' })}
`;
}

export function withHelperText() {
  return `<label for="name">Name</label>
${main({ id: 'name', 'aria-describedby': 'name-helper', placeholder: "Your name" })}
<small id="name-helper">Cannot be empty.</small>
`;
}

export function validationStates() {
  return `${main({ 'aria-invalid': 'false' })}

${main({ 'aria-invalid': 'true' })}`;
}

export function validationStatesWithTextHelper() {
  return `${main({ 'aria-invalid': 'false', 'aria-describedby': 'valid-helper' }, 'John Doe')}
<small id="valid-helper">Looks good!</small>

${main({ 'aria-invalid': 'true', 'aria-describedby': 'invalid-helper', placeholder: "Your name" }, '')}
<small id="invalid-helper">Cannot be empty.</small>
`;
}

export function button(attrs: Record<string, string> = {}, value: string = "Input Button") {
  return renderElement("input", {
    ...attrs,
    type: "button",
    value: value
  });
}

export function submit(attrs: Record<string, string> = {}, value: string = "Input Submit") {
  return renderElement("input", {
    ...attrs,
    type: "submit",
    value: value
  });
}

export function reset(attrs: Record<string, string> = {}, value: string = "Input Reset") {
  return renderElement("input", {
    ...attrs,
    type: "reset",
    value: value
  });
}

export function buttons(attrs: Record<string, string> = {}) {
  return `${button(attrs)}
${submit(attrs)}
${reset(attrs)}`;
}

export function loginForm() {
  return `<form>
  <label for="email">Email</label>
  <input type="email" id="email" placeholder="you@example.com">
  <label for="password">Password</label>
  <input type="password" id="password" placeholder="Password">
  ${submit({}, "Sign In")}
</form>
`;
}

export function email(attrs: Record<string, string> = {}) {
  return renderElement("input", {
    ...attrs,
    type: "email",
    placeholder: "email@example.com",
    "aria-label": "Email",
    autocomplete: "email",
  });
}

export function number(attrs: Record<string, string> = {}) {
  return renderElement("input", {
    ...attrs,
    type: "number",
    placeholder: "Number",
    "aria-label": "Number",
  });
}

export function password(attrs: Record<string, string> = {}) {
  return renderElement("input", {
    ...attrs,
    type: "password",
    placeholder: "Password",
    "aria-label": "Password",
  });
}

export function telephone(attrs: Record<string, string> = {}) {
  return renderElement("input", {
    ...attrs,
    type: "tel",
    placeholder: "Tel",
    "aria-label": "Tel",
    autocomplete: "tel",
  });
}

export function url(attrs: Record<string, string> = {}) {
  return renderElement("input", {
    ...attrs,
    type: "url",
    placeholder: "https://example.com",
    "aria-label": "Url",
  });
}

export function date(attrs: Record<string, string> = {}) {
  return renderElement("input", {
    ...attrs,
    type: "date",
    "aria-label": "Date",
  });
}

export function datetime(attrs: Record<string, string> = {}) {
  return renderElement("input", {
    ...attrs,
    type: "datetime-local",
    "aria-label": "Datetime local",
  });
}

export function month(attrs: Record<string, string> = {}) {
  return renderElement("input", {
    ...attrs,
    type: "month",
    "aria-label": "Month",
  });
}

export function time(attrs: Record<string, string> = {}) {
  return renderElement("input", {
    ...attrs,
    type: "time",
    "aria-label": "Time",
  });
}

export function search(attrs: Record<string, string> = {}) {
  return renderElement("input", {
    ...attrs,
    type: "search",
    placeholder: "Search",
    "aria-label": "Search",
  });
}

export function color(attrs: Record<string, string> = {}) {
  return renderElement("input", {
    ...attrs,
    type: "color",
    value: "#ff9500",
    "aria-label": "Color picker",
  });
}

export function file(attrs: Record<string, string> = {}) {
  return renderElement("input", {
    ...attrs,
    type: "file",
  });
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
