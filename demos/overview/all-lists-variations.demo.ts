import { renderElement, classMergeAttributes } from "@scripts/utils";
import { ListsDemo } from "@demos/composites";
import { UlDemo } from "@demos/semantics";

function allListsStates(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "ms-4" },
    `${ListsDemo.all(attrs, { ariaCurrent: true })}`,
  );
}

function allListsStatesModifiers(attrs: Record<string, string> = {}) {
  return `<h3>No modifier</h3>
${allListsStates(classMergeAttributes("", attrs))}

<h3>Striped modifier</h3>
${allListsStates(classMergeAttributes("striped", attrs))}

<h3>Ghost modifier</h3>
${allListsStates(classMergeAttributes("ghost", attrs))}

<h3>Striped Ghost modifier</h3>
${allListsStates(classMergeAttributes("striped ghost", attrs))}

<h3>Subtle modifier</h3>
${allListsStates(classMergeAttributes("subtle", attrs))}

<h3>Striped Subtle modifier</h3>
${allListsStates(classMergeAttributes("striped subtle", attrs))}
`;
}

export function main() {
  return renderElement(
    "main",
    { class: "container" },
    `<h1>Card List, Unordered, Ordered and Definition Lists Variations</h1>

<br>

<h2>Default</h2>
${allListsStates({})}

<hr>
<h2 class="sticky-top bg-body py-d">Primary Variant</h2>
${allListsStatesModifiers({ class: "primary" })}

<hr>
<h2 class="sticky-top bg-body py-d">Secondary Variant</h2>
${allListsStatesModifiers({ class: "secondary" })}

<hr>
<h2 class="sticky-top bg-body py-d">Contrast Variant</h2>
${allListsStatesModifiers({ class: "contrast" })}

<hr>
<h2 class="sticky-top bg-body py-d">Success Variant</h2>
${allListsStatesModifiers({ class: "success" })}

<hr>
<h2 class="sticky-top bg-body py-d">Info Variant</h2>
${allListsStatesModifiers({ class: "info" })}

<hr>
<h2 class="sticky-top bg-body py-d">Warning Variant</h2>
${allListsStatesModifiers({ class: "warning" })}

<hr>
<h2 class="sticky-top bg-body py-d">Danger Variant</h2>
${allListsStatesModifiers({ class: "danger" })}

<hr>
<h2 class="sticky-top bg-body py-d">Individual variant per Item</h2>
${ListsDemo.all({}, { items: UlDemo.personalizedItems() })}

<hr>
<h2 class="sticky-top bg-body py-d">Individual variant per Item with ghost modifier</h2>
${ListsDemo.all({}, { items: UlDemo.personalizedItems("ghost") })}

<hr>
<h2 class="sticky-top bg-body py-d">Individual variant per Item with subtle modifier</h2>
${ListsDemo.all({}, { items: UlDemo.personalizedItems("subtle") })}
`,
  );
}
