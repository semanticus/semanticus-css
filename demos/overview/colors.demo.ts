import { renderElement } from "@scripts/utils";

import { DropdownDemo, TypographyDemo, CardListDemo } from "@demos/composites";
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
<section id="typography">
  <a href="#typography"><h2>Typography</h2></a>

  ${TypographyDemo.overviewVariants()}
</section>

<hr>
<br>

<section id="buttons">
  <a href="#buttons"><h2>Buttons</h2></a>

  ${ButtonDemo.intentVariants()}
  ${ButtonDemo.subtleVariants()}
  ${ButtonDemo.ghostVariants()}

  <hr>

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
  <a href="#links"><h2>Links</h2></a>

  ${ADemo.intentVariants()}

  <hr>

  <section class="auto-grid">
    ${RoleLinkDemo.intentVariants("button")}
  </section>
</section>

<hr>
<br>

<section id="dropdowns">
  <a href="#dropdowns"><h2>Dropdowns (role="button")</h2></a>

  ${DropdownDemo.overviewAsButtonVariants()}
</section>

<hr>
<br>

<section id="card-list">
  <a href="#card-list"><h2>Card List</h2></a>

  ${CardListDemo.overviewVariants()}
</section>

<hr>
<br>

<section id="cards">
  <a href="#cards"><h2>Cards</h2></a>

  ${CardDemo.overviewVariants()}
</section>

<hr>
<br>

<section id="panes">
  <a href="#panes"><h2>Panes</h2></a>

  ${PaneDemo.overviewVariants()}
</section>

<hr>
<br>

<section id="alerts">
  <a href="#alerts"><h2>Alerts</h2></a>

  ${RoleStatusDemo.overviewVariants()}
</section>

<hr>
<br>

<section id="progress">
  <a href="#progress"><h2>Progress</h2></a>

  ${ProgressDemo.overviewVariants()}
</section>`,
  );
}
