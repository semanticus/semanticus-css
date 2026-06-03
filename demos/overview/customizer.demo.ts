import { renderElement } from "@scripts/utils";

import { CardDemo } from "@demos/components";
import {
  ADemo,
  InputDemo,
  SelectDemo,
  FieldsetDemo,
  RoleLinkDemo,
} from "@demos/semantics";

export function main(attrs: Record<string, string> = {}) {
  return renderElement(
    "main",
    { class: "container", ...attrs },
    `<br>
<section id="buttons">
  <h2>Buttons</h2>

  <section class="auto-grid">
    <button>Primary</button>
    <button class="secondary">Secondary</button>
    <button class="contrast">Contrast</button>
    <button disabled>Disabled</button>
    <button class="secondary" disabled>Disabled</button>
    <button class="contrast" disabled>Disabled</button>
  </section>
</section>

<hr>
<br>

<section id="links">
  <h2>Links</h2>

  <section class="auto-grid">
    ${ADemo.main()}
    ${RoleLinkDemo.main("button")}
    ${RoleLinkDemo.main("div")}
    ${ADemo.active()}
    ${RoleLinkDemo.active("button")}
    ${RoleLinkDemo.active("div")}
  </section>
</section>

<hr>
<br>

<section id="input-elements">
  <h2>Input Elements</h2>

  <fieldset class="auto-grid">
    <label>
      Text Input
      <input type="text" name="text" placeholder="Text" aria-label="Text" />
    </label>

    <label>
      Select
      ${SelectDemo.main()}
    </label>
  </fieldset>

  <fieldset>
    <label class="w-100">
      Dropdown group
      ${FieldsetDemo.groupDropdownButton()}
    </label>
  </fieldset>

  <fieldset class="auto-grid">
    ${InputDemo.checkboxBasic()}

    ${InputDemo.radioBasic()}

    ${InputDemo.switchBasic()}
  </fieldset>
</section>

<hr>
<br>

<section id="cards">
  <h2>Cards</h2>

  ${CardDemo.main()}

  ${CardDemo.withHeaderAndFooter()}
</section>`,
  );
}
