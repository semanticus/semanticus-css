import { renderElement, classMergeAttributes } from "@scripts/utils";
import { ButtonsDemo } from "@demos/composites";

function allButtonsStates(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "ms-4" },
    `<h4>Default State</h4>
${ButtonsDemo.all(attrs)}
<h4>Aria-current State</h4>
${ButtonsDemo.all({ ...attrs, "aria-current": "true" })}
<h4>Aria-disabled</h4>
${ButtonsDemo.all({ ...attrs, "aria-disabled": "true" })}
<h4>Disabled</h4>
${ButtonsDemo.all({ ...attrs, disabled: "true" })}
`,
  );
}

function allButtonsStatesModifiers(attrs: Record<string, string> = {}) {
  return `<h3>No modifier</h3>
${allButtonsStates(classMergeAttributes("", attrs))}

<h3>Ghost modifier</h3>
${allButtonsStates(classMergeAttributes("ghost", attrs))}

<h3>Subtle modifier</h3>
${allButtonsStates(classMergeAttributes("subtle", attrs))}
`;
}

export function main() {
  return renderElement(
    "main",
    { class: "container" },
    `<h1>Button, RoleButton and Input Buttons Variations</h1>

<br>

<h2>Default in all States</h2>
${allButtonsStatesModifiers({})}

<hr>
<h2>Primary Variant</h2>
${allButtonsStatesModifiers({ class: "primary" })}

<hr>
<h2>Secondary Variant</h2>
${allButtonsStatesModifiers({ class: "secondary" })}

<hr>
<h2>Contrast Variant</h2>
${allButtonsStatesModifiers({ class: "contrast" })}

<hr>
<h2>Success Variant</h2>
${allButtonsStatesModifiers({ class: "success" })}

<hr>
<h2>Info Variant</h2>
${allButtonsStatesModifiers({ class: "info" })}

<hr>
<h2>Warning Variant</h2>
${allButtonsStatesModifiers({ class: "warning" })}

<hr>
<h2>Danger Variant</h2>
${allButtonsStatesModifiers({ class: "danger" })}
`,
  );
}
