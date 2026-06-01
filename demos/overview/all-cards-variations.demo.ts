import { renderElement, classMergeAttributes } from "@scripts/utils";
import { CardDemo } from "@demos/components";

function allCardsStates(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "ms-4" },
    `${CardDemo.all(attrs)}
`,
  );
}

function allCardsStatesModifiers(attrs: Record<string, string> = {}) {
  return `<h3>No modifier</h3>
${allCardsStates(classMergeAttributes("", attrs))}

<h3>Ghost modifier</h3>
${allCardsStates(classMergeAttributes("ghost", attrs))}

<h3>Subtle modifier</h3>
${allCardsStates(classMergeAttributes("subtle", attrs))}
`;
}

export function main() {
  return renderElement(
    "main",
    { class: "container" },
    `<h1>Card Variations</h1>

<br>

<h2>Default</h2>
${allCardsStates({})}

<hr>
<h2>Primary Variant</h2>
${allCardsStatesModifiers({ class: "primary" })}

<hr>
<h2>Secondary Variant</h2>
${allCardsStatesModifiers({ class: "secondary" })}

<hr>
<h2>Contrast Variant</h2>
${allCardsStatesModifiers({ class: "contrast" })}


<hr>
<h2>Success Variant</h2>
${allCardsStatesModifiers({ class: "success" })}


<hr>
<h2>Info Variant</h2>
${allCardsStatesModifiers({ class: "info" })}

<hr>
<h2>Warning Variant</h2>
${allCardsStatesModifiers({ class: "warning" })}


<hr>
<h2>Danger Variant</h2>
${allCardsStatesModifiers({ class: "danger" })}
`,
  );
}
