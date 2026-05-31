import { renderElement, renderGrid } from "@scripts/utils";

import { DropdownDemo } from "@demos/composites";
import { CardDemo, PaneDemo } from "@demos/components";
import {
  ADemo,
  RoleLinkDemo,
  RoleStatusDemo,
  ButtonDemo,
  RoleButtonDemo,
  ProgressDemo,
} from "@demos/semantics";

export function main(attrs: Record<string, string> = {}) {
  return renderElement(
    "main",
    { class: "container", ...attrs },
    `<br>

<section id="buttons">
  <h2>Buttons</h2>

  ${renderGrid(`<h3>Default</h3><h3>aria-current="false"</h3><h3>aria-current="page"</h3><h3>disabled</h3>`, { class: "mb-0" })}
  ${ButtonDemo.overviewStatesAndModifiers()}

  <br>
  <h3>Intent Variants</h3>
  ${ButtonDemo.intentVariants()}
  ${ButtonDemo.subtleVariants()}
  ${ButtonDemo.ghostVariants()}

  <hr>

  <h2>Links with [role="button"]</h2>

  ${renderGrid(`<h3>Default</h3><h3>aria-current="false"</h3><h3>aria-current="page"</h3><h3>disabled</h3>`, { class: "mb-0" })}
  ${RoleButtonDemo.overviewStatesAndModifiers("a")}

  <h3>Intent Variants</h3>
  <section class="auto-grid">
    ${RoleButtonDemo.intentVariants("a")}
  </section>
  <section class="auto-grid">
    ${RoleButtonDemo.subtleVariants("a")}
  </section>
  <section class="auto-grid">
    ${RoleButtonDemo.ghostVariants("a")}
  </section>
</section>

<hr>
<br>

<section id="links">
  <h2>Links</h2>

  ${renderGrid(`<h3>Default</h3><h3>aria-current="false"</h3><h3>aria-current="page"</h3><h3>aria-disabled</h3>`, { class: "mb-0" })}
  ${ADemo.overviewStatesAndModifiers()}

  <br>
  <h3>Intent Variants</h3>
  ${ADemo.intentVariants()}

  <hr>

  <h2>Buttons with [role="link"]</h2>

  ${renderGrid(`<h3>Default</h3><h3>aria-current="false"</h3><h3>aria-current="page"</h3><h3>aria-disabled</h3>`, { class: "mb-0" })}
  ${RoleLinkDemo.overviewStatesAndModifiers("button")}

  <h3>Intent Variants</h3>
  <section class="auto-grid">
    ${RoleLinkDemo.intentVariants("button")}
  </section>
</section>

<hr>
<br>

<section id="dropdowns">
  <h2>Dropdowns</h2>

  ${renderGrid(`<h3>Default</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${renderGrid(`${DropdownDemo.asButton({ class: "" })}
${DropdownDemo.asButton({ class: "subtle" })}
${DropdownDemo.asButton({ class: "ghost" })}`)}

  <br>
  ${renderGrid(`<h3>Intent Variants</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${DropdownDemo.overviewAsButtonVariants()}
</section>

<hr>
<br>

<section id="cards">
  <h2>Cards</h2>

  ${renderGrid(`<h3>Default</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${CardDemo.overviewDefaultAndModifiersVariants()}

  ${renderGrid(`<h3>Intent Variants</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${CardDemo.overviewIntentAndModifiersVariants()}
</section>

<hr>
<br>

<section id="panes">
  <h2>Panes</h2>

  ${renderGrid(`<h3>Default</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${PaneDemo.overviewDefaultAndModifiersVariants()}

  ${renderGrid(`<h3>Intent Variants</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${PaneDemo.overviewIntentAndModifiersVariants()}
</section>

<hr>
<br>

<section id="alerts">
  <h2>Alerts</h2>

  ${renderGrid(`<h3>Default</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${RoleStatusDemo.overviewDefaultAndModifiersVariants()}

  ${renderGrid(`<h3>Intent Variants</h3><h3>Subtle Modifier</h3><h3>Ghost Modifier</h3>`, { class: "mb-0" })}
  ${RoleStatusDemo.overviewIntentAndModifiersVariants()}
</section>

<hr>
<br>

<section id="progress">
  <h2>Progress</h2>

  ${renderGrid(`<h3>Default</h3><h3>Subtle Modifier</h3>`, { class: "mb-0" })}
  ${ProgressDemo.overviewDefaultAndModifiersVariants()}

  ${renderGrid(`<h3>Intent Variants</h3><h3>Subtle Modifier</h3>`, { class: "mb-0" })}
  ${ProgressDemo.overviewIntentAndModifiersVariants()}
</section>`,
  );
}
