import { renderElement } from "@scripts/utils";
import { InputDemo, SelectDemo, TextareaDemo } from "@demos/semantics";

function allInputs(index: number, attrs: Record<string, string> = {}) {
  return `${InputDemo.main(attrs)}

  ${SelectDemo.main(attrs)}

  ${InputDemo.main({ ...attrs, type: "search" })}

  <section class="auto-grid">
    <fieldset>
      ${InputDemo.main({ ...attrs, type: "date" })}
    </fieldset>

    <fieldset>
      ${InputDemo.main({ ...attrs, type: "month" })}
    </fieldset>

    <fieldset>
      ${InputDemo.main({ ...attrs, type: "time" })}
    </fieldset>

    <fieldset>
      ${InputDemo.main({ ...attrs, type: "color", value: "#ff0000" })}
    </fieldset>
  </section>

  <section class="auto-grid">
    <fieldset>
      ${InputDemo.main({ ...attrs, type: "checkbox" })}
      ${InputDemo.main({ ...attrs, type: "checkbox", checked: "true" })}
    </fieldset>

    <fieldset>
      ${InputDemo.main({ ...attrs, type: "radio", name: `radio-group-${index}` })}
      ${InputDemo.main({ ...attrs, type: "radio", name: `radio-group-${index}`, checked: "true" })}
    </fieldset>

    <fieldset>
      ${InputDemo.main({ ...attrs, type: "checkbox", role: "switch" })}
      ${InputDemo.main({ ...attrs, type: "checkbox", role: "switch", checked: "true" })}
    </fieldset>
  </section>

  <section class="auto-grid">
    ${TextareaDemo.main(attrs)}

    ${SelectDemo.multipleSelect(attrs)}
  </section>

  <section class="auto-grid">
    ${InputDemo.rangeBasic(attrs)}

    ${InputDemo.main({ ...attrs, type: "file" })}
  </section>
`;
}

export function main() {
  return renderElement(
    "main",
    { class: "container" },
    `<h1>Input, Select and Textarea Variations</h1>

<br>

<h2>Default State</h2>
${allInputs(0, {})}

<hr>
<h2>From Right to Left</h2>
${renderElement("div", { dir: "rtl" }, allInputs(1, {}))}

<hr>
<h2>Disabled State</h2>
${allInputs(2, { disabled: "true" })}

<hr>
<h2>Aria-disabled State</h2>
${allInputs(3, { "aria-disabled": "true" })}

<hr>
<h2>Readonly State</h2>
${allInputs(4, { readonly: "true" })}

<hr>
<h2>Valid State</h2>
${allInputs(5, { "aria-invalid": "false" })}

<hr>
<h2>Invalid State</h2>
${allInputs(6, { "aria-invalid": "true" })}

<hr>
<h2>Invalid State - From Right to Left</h2>
${renderElement("div", { dir: "rtl", "aria-invalid": "true" }, allInputs(7, {}))}

<hr>
<h2>Disabled & Valid State</h2>
${allInputs(8, { disabled: "true", "aria-invalid": "false" })}

<hr>
<h2>Disabled & Invalid State</h2>
${allInputs(9, { disabled: "true", "aria-invalid": "true" })}

<hr>
<h2>Aria-disabled & Valid State</h2>
${allInputs(10, { "aria-disabled": "true", "aria-invalid": "false" })}

<hr>
<h2>Aria-disabled & Invalid State</h2>
${allInputs(11, { "aria-disabled": "true", "aria-invalid": "true" })}

<hr>
<h2>Readonly & Valid State</h2>
${allInputs(12, { readonly: "true", "aria-invalid": "false" })}

<hr>
<h2>Readonly & Invalid State</h2>
${allInputs(13, { readonly: "true", "aria-invalid": "true" })}
`,
  );
}
