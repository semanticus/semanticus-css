import { renderElement, classMergeAttributes } from "@scripts/utils";
import { AccordionsDemo, DropdownDemo } from "@demos/composites";

export function allDetailsAsButton(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "auto-grid" },
    `${AccordionsDemo.asButton(attrs)}
${DropdownDemo.asButton(attrs)}`,
  );
}

function allDetailsAsButtonStates(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "ms-4" },
    `<h4>Default State</h4>
${allDetailsAsButton(attrs)}
<h4>Aria-current State</h4>
${allDetailsAsButton({ ...attrs, "aria-current": "true" })}
<h4>Aria-disabled</h4>
${allDetailsAsButton({ ...attrs, "aria-disabled": "true" })}
<h4>Disabled</h4>
${allDetailsAsButton({ ...attrs, disabled: "true" })}
`,
  );
}

function allDetailsAsButtonStatesModifiers(attrs: Record<string, string> = {}) {
  return `<h3>No modifier</h3>
${allDetailsAsButtonStates(classMergeAttributes("", attrs))}

<h3>Ghost modifier</h3>
${allDetailsAsButtonStates(classMergeAttributes("ghost", attrs))}

<h3>Subtle modifier</h3>
${allDetailsAsButtonStates(classMergeAttributes("subtle", attrs))}
`;
}

export function main() {
  return renderElement(
    "main",
    { class: "container" },
    `<h1>Card Variations</h1>

<br>

<h2>Default</h2>
${allDetailsAsButtonStates({})}

<hr>
<h2>From Right to Left</h2>
${renderElement("div", { dir: "rtl" }, allDetailsAsButtonStates({}))}

<hr>
<h2>Primary Variant</h2>
${allDetailsAsButtonStatesModifiers({ class: "primary" })}

<hr>
<h2>Secondary Variant</h2>
${allDetailsAsButtonStatesModifiers({ class: "secondary" })}

<hr>
<h2>Contrast Variant</h2>
${allDetailsAsButtonStatesModifiers({ class: "contrast" })}


<hr>
<h2>Success Variant</h2>
${allDetailsAsButtonStatesModifiers({ class: "success" })}


<hr>
<h2>Info Variant</h2>
${allDetailsAsButtonStatesModifiers({ class: "info" })}

<hr>
<h2>Warning Variant</h2>
${allDetailsAsButtonStatesModifiers({ class: "warning" })}


<hr>
<h2>Danger Variant</h2>
${allDetailsAsButtonStatesModifiers({ class: "danger" })}
`,
  );
}
