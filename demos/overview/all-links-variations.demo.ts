import { renderElement, classMergeAttributes } from "@scripts/utils";
import { LinksDemo } from "@demos/composites";

export function allLinksStates(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "ms-4" },
    `<h4>Default State</h4>
${LinksDemo.all(attrs)}
<h4>Aria-current State</h4>
${LinksDemo.all({ ...attrs, "aria-current": "true" })}
<h4>Aria-disabled</h4>
${LinksDemo.all({ ...attrs, "aria-disabled": "true" })}
`,
  );
}

export function allLinksStatesModifiers(attrs: Record<string, string> = {}) {
  return `<h3>No modifier</h3>
${allLinksStates(classMergeAttributes("", attrs))}

<h3>Ghost modifier</h3>
${allLinksStates(classMergeAttributes("ghost", attrs))}

<h3>Subtle modifier</h3>
${allLinksStates(classMergeAttributes("subtle", attrs))}
`;
}

export function main() {
  return renderElement(
    "main",
    { class: "container" },
    `<h1>Anchor and RoleLink Variations</h1>

<br>

<h2>Default in all States</h2>
${allLinksStates({})}

<hr>
<h2>Primary Variant</h2>
${allLinksStatesModifiers({ class: "primary" })}

<hr>
<h2>Secondary Variant</h2>
${allLinksStatesModifiers({ class: "secondary" })}

<hr>
<h2>Contrast Variant</h2>
${allLinksStatesModifiers({ class: "contrast" })}


<hr>
<h2>Success Variant</h2>
${allLinksStatesModifiers({ class: "success" })}


<hr>
<h2>Info Variant</h2>
${allLinksStatesModifiers({ class: "info" })}

<hr>
<h2>Warning Variant</h2>
${allLinksStatesModifiers({ class: "warning" })}


<hr>
<h2>Danger Variant</h2>
${allLinksStatesModifiers({ class: "danger" })}
`,
  );
}
