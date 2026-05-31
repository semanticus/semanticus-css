import { renderElement } from "@scripts/utils";
import { InputsDemo } from "@demos/composites";

export function main() {
  return renderElement(
    "main",
    { class: "container" },
    `<h1>Input, Select and Textarea Variations</h1>

<br>

<h2>Default State</h2>
${InputsDemo.all({}, 0)}

<hr>
<h2>From Right to Left</h2>
${renderElement("div", { dir: "rtl" }, InputsDemo.all({}, 1))}

<hr>
<h2>Disabled State</h2>
${InputsDemo.all({ disabled: "true" }, 2)}

<hr>
<h2>Aria-disabled State</h2>
${InputsDemo.all({ "aria-disabled": "true" }, 3)}

<hr>
<h2>Readonly State</h2>
${InputsDemo.all({ readonly: "true" }, 4)}

<hr>
<h2>Valid State</h2>
${InputsDemo.all({ "aria-invalid": "false" }, 5)}

<hr>
<h2>Invalid State</h2>
${InputsDemo.all({ "aria-invalid": "true" }, 6)}

<hr>
<h2>Invalid State - From Right to Left</h2>
${renderElement("div", { dir: "rtl", "aria-invalid": "true" }, InputsDemo.all({}, 7))}

<hr>
<h2>Disabled & Valid State</h2>
${InputsDemo.all({ disabled: "true", "aria-invalid": "false" }, 8)}

<hr>
<h2>Disabled & Invalid State</h2>
${InputsDemo.all({ disabled: "true", "aria-invalid": "true" }, 9)}

<hr>
<h2>Aria-disabled & Valid State</h2>
${InputsDemo.all({ "aria-disabled": "true", "aria-invalid": "false" }, 10)}

<hr>
<h2>Aria-disabled & Invalid State</h2>
${InputsDemo.all({ "aria-disabled": "true", "aria-invalid": "true" }, 11)}

<hr>
<h2>Readonly & Valid State</h2>
${InputsDemo.all({ readonly: "true", "aria-invalid": "false" }, 12)}

<hr>
<h2>Readonly & Invalid State</h2>
${InputsDemo.all({ readonly: "true", "aria-invalid": "true" }, 13)}
`,
  );
}
