import { renderElement } from "@scripts/utils";
import { GroupsDemo } from "@demos/composites";
import { RoleGroupDemo } from "@demos/semantics";

export function main() {
  return renderElement(
    "main",
    { class: "container" },
    `<h1>Input Groups, Button Group, Card Group</h1>

<br>

<h2>Default State</h2>
${GroupsDemo.all({}, 0)}

<hr>
<h2>From Right to Left</h2>
${renderElement("div", { dir: "rtl" }, GroupsDemo.all({}, 1))}

<hr>
<h2>Disabled State</h2>
${GroupsDemo.all({ disabled: "true" }, 2)}

<hr>
<h2>Aria-disabled State</h2>
${GroupsDemo.all({ "aria-disabled": "true" }, 3)}

<h2>Primary Variant</h2>
${GroupsDemo.all({ class: "primary" }, 4)}

<h2>Secondary Variant</h2>
${GroupsDemo.all({ class: "secondary" }, 5)}

<h2>Success Variant</h2>
${GroupsDemo.all({ class: "success" }, 6)}

<h2>Info Variant</h2>
${GroupsDemo.all({ class: "info" }, 7)}

<h2>Warning Variant</h2>
${GroupsDemo.all({ class: "warning" }, 8)}

<h2>Danger Variant</h2>
${GroupsDemo.all({ class: "danger" }, 9)}

<h2>Primary Ghost Variant</h2>
${GroupsDemo.all({ class: "primary ghost" }, 10)}

<h2>Secondary Ghost Variant</h2>
${GroupsDemo.all({ class: "secondary ghost" }, 11)}

<h2>Success Ghost Variant</h2>
${GroupsDemo.all({ class: "success ghost" }, 12)}

<h2>Info Ghost Variant</h2>
${GroupsDemo.all({ class: "info ghost" }, 13)}

<h2>Warning Ghost Variant</h2>
${GroupsDemo.all({ class: "warning ghost" }, 14)}

<h2>Danger Ghost Variant</h2>
${GroupsDemo.all({ class: "danger ghost" }, 15)}

<h2>Primary Subtle Variant</h2>
${GroupsDemo.all({ class: "primary subtle" }, 10)}

<h2>Secondary Subtle Variant</h2>
${GroupsDemo.all({ class: "secondary subtle" }, 11)}

<h2>Success Subtle Variant</h2>
${GroupsDemo.all({ class: "success subtle" }, 12)}

<h2>Info Subtle Variant</h2>
${GroupsDemo.all({ class: "info subtle" }, 13)}

<h2>Warning Subtle Variant</h2>
${GroupsDemo.all({ class: "warning subtle" }, 14)}

<h2>Danger Subtle Variant</h2>
${GroupsDemo.all({ class: "danger subtle" }, 15)}

<hr>
<h2 class="sticky-top bg-body py-d">Individual variant per Item</h2>
${RoleGroupDemo.buttonGroup("div", {}, { items: RoleGroupDemo.personalizedButtonItems() })}
${RoleGroupDemo.cardGroup("div", {}, { items: RoleGroupDemo.personalizedItems() })}

<hr>
<h2 class="sticky-top bg-body py-d">Individual variant per Item with Ghost modifier</h2>
${RoleGroupDemo.buttonGroup("div", {}, { items: RoleGroupDemo.personalizedButtonItems("ghost") })}
${RoleGroupDemo.cardGroup("div", {}, { items: RoleGroupDemo.personalizedItems("ghost") })}

<hr>
<h2 class="sticky-top bg-body py-d">Individual variant per Item with Subtle modifier</h2>
${RoleGroupDemo.buttonGroup("div", {}, { items: RoleGroupDemo.personalizedButtonItems("subtle") })}
${RoleGroupDemo.cardGroup("div", {}, { items: RoleGroupDemo.personalizedItems("subtle") })}
`,
  );
}
