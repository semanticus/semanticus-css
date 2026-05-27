import { renderElement } from "@scripts/utils";

import { DropdownDemo, SearchDemo, CardListDemo } from "@demos/composites";
import { CardDemo } from "@demos/components";
import {
  ADemo,
  InputDemo,
  DetailsDemo,
  SelectDemo,
  TextareaDemo,
  FieldsetDemo,
  ProgressDemo,
  TableDemo,
  DialogDemo,
  FigureDemo,
  NavDemo,
  HgroupDemo,
  ListsDemo,
  AriaBusyDemo,
  DisabledDemo,
  RoleTooltipDemo,
  RoleLinkDemo,
  TextDemo,
} from "@demos/semantics";

function buttons() {
  return `<section id="buttons">
  <h2>Buttons</h2>

  <section class="auto-grid">
    <button>Primary</button>
    <button class="secondary">Secondary</button>
    <button class="contrast">Contrast</button>
    <button disabled>Disabled</button>
    <button class="secondary" disabled>Disabled</button>
    <button class="contrast" disabled>Disabled</button>
  </section>
`;
}

function links() {
  return `<section id="links">
  <a href="#links"><h2>Links</h2></a>

  <section class="auto-grid">
    ${ADemo.main()}
    ${RoleLinkDemo.main("button")}
    ${RoleLinkDemo.main("div")}
    ${ADemo.active()}
    ${RoleLinkDemo.active("button")}
    ${RoleLinkDemo.active("div")}
  </section>
</section>`;
}

function inputButtons() {
  return `<section id="input-buttons">
  <a href="#input-buttons"><h4>Input buttons (type="button|submit|reset")</h4></a>

  <section class="auto-grid">
    ${InputDemo.button()}
    ${InputDemo.submit()}
    ${InputDemo.reset()}
  </section>
</section>
`;
}

function disabledState() {
  return `<section id="disabled-state">
  <a href="#disabled-state"><h4>Disabled State</h4></a>

  <section class="auto-grid">
    ${DisabledDemo.input()}
    ${DisabledDemo.select()}
  </section>

  <section class="auto-grid">
    ${DisabledDemo.checkbox()}
    ${DisabledDemo.radio()}
    ${DisabledDemo.switch_()}
  </section>

  <section class="auto-grid">
    ${DisabledDemo.inputButtons()}
  </section>
</section>
`;
}

function validState() {
  return `<section id="valid-state">
  <a href="#valid-state"><h4>Valid State (aria-invalid="false")</h4></a>

  <section class="auto-grid">
    ${InputDemo.main({ "aria-invalid": "false" })}
    ${SelectDemo.main({ "aria-invalid": "false" })}
  </section>

  <section class="auto-grid">
    ${InputDemo.checkboxBasic({ "aria-invalid": "false" })}
    ${InputDemo.radioBasic({ "aria-invalid": "false" })}
    ${InputDemo.switchBasic({ "aria-invalid": "false" })}
  </section>
</section>
`;
}

function invalidState() {
  return `<section id="invalid-state">
  <a href="#invalid-state"><h4>Invalid State (aria-invalid="true")</h4></a>

  <section class="auto-grid">
    ${InputDemo.main({ "aria-invalid": "true" })}
    ${SelectDemo.main({ "aria-invalid": "true" })}
  </section>

  <section class="auto-grid">
    ${InputDemo.checkboxBasic({ "aria-invalid": "true" })}
    ${InputDemo.radioBasic({ "aria-invalid": "true" })}
    ${InputDemo.switchBasic({ "aria-invalid": "true" })}
  </section>
</section>
`;
}

function inputElements() {
  return `<section id="input-elements">
  <a href="#input-elements"><h2>Input Elements</h2></a>

  <input type="text" name="text" placeholder="Text" aria-label="Text" />

  ${SelectDemo.main()}

  ${InputDemo.search()}

  <fieldset class="auto-grid">
    <label>
      Date
      ${InputDemo.date()}
    </label>

    <label>
      Time
      ${InputDemo.time()}
    </label>

    <label>
      Color
      ${InputDemo.color()}
    </label>
  </fieldset>

  <section class="auto-grid">
    ${InputDemo.checkboxBasic()}

    ${InputDemo.radioBasic()}

    ${InputDemo.switchBasic()}
  </section>

  <section class="auto-grid">
    ${TextareaDemo.main()}

    ${SelectDemo.multipleSelect()}
  </section>

  <section class="auto-grid">
    ${InputDemo.rangeBasic()}

    ${InputDemo.file()}
  </section>

  ${inputButtons()}

  ${disabledState()}

  ${validState()}

  ${invalidState()}
</section>`;
}

function fieldsets() {
  return `<section id="fieldsets">
  <hgroup>
    <a href="#fieldsets"><h2>Fieldsets</h2></a>
    <p>Use fieldsets to group related form elements together.</p>
  </hgroup>

  <section>
    ${FieldsetDemo.formInput()}
  </section>

  <section>
    <h4>Group fieldset (role="group")</h4>

    <section>
      ${FieldsetDemo.groupInputButton()}
      ${FieldsetDemo.groupMultipleInputs()}
      ${FieldsetDemo.groupSelectButton()}
    </section>
  </section>

  <section>
    <h4>Search fieldset (role="search")</h4>

    <section>
      ${SearchDemo.main()}
      ${SearchDemo.withResetButton()}
    </section>
  </section>
</section>`;
}

function cards() {
  return `<section id="cards">
  <a href="#cards"><h2>Cards</h2></a>

  ${CardDemo.main()}

  ${CardDemo.withHeaderAndFooter()}
</section>`;
}

function loadingStates() {
  return `<section id="loading-states">
  <a href="#loading-states"><h2>Loading States (aria-busy="true")</h2></a>

  <section class="auto-grid">
    <section>
      ${AriaBusyDemo.main("article", {}, "")}
    </section>
    <section>
      ${AriaBusyDemo.button({})}
    </section>
    <section>
      ${AriaBusyDemo.inline()}
    </section>
  </section>
</section>`;
}

function tooltips() {
  return `<section id="tooltips">
  <hgroup>
    <a href="#tooltips"><h2>Tooltips (role="tooltip")</h2></a>
    <p>Pair a trigger element with <code>aria-describedby</code> and another with <code>[role="tooltip"]</code>.</p>
  </hgroup>

  ${RoleTooltipDemo.main()}
</section>`;
}

function accordions() {
  return `<section id="accordions">
  <a href="#accordions"><h2>Accordions</h2></a>

  <section>
    ${DetailsDemo.entangledAccordions()}
  </section>

  <br>

  <section>
    <h4>Button Style (role="button")</h4>

    ${DetailsDemo.asButton()}
  </section>
</section>`;
}

function dropdowns() {
  return `<section id="dropdowns">
  <a href="#dropdowns"><h2>Dropdowns</h2></a>

  <section>
    ${DropdownDemo.main()}
  </section>

  <br>

  <section>
    <h4>Button Style (role="button")</h4>

    ${DropdownDemo.asButton()}
  </section>
</section>`;
}

function modal() {
  return `<section id="modal">
  <hgroup>
    <a href="#modal"><h2>Modal</h2></a>
    <p>Click the button below to open a modal dialog</p>
  </hgroup>

  ${DialogDemo.showModalWithHeaderAndFooter()}
</section>`;
}

function tables() {
  return `<section id="tables">
  <a href="#tables"><h2>Tables</h2></a>

  ${TableDemo.bigExample()}
</section>`;
}

function progressBars() {
  return `<section id="progressBars">
  <a href="#progressBars"><h2>Progress Bars</h2></a>

  ${ProgressDemo.main({ value: "0" })}
  ${ProgressDemo.main({ value: "50" })}
  ${ProgressDemo.main({ value: "100" })}
  ${ProgressDemo.indeterminate()}
</section>`;
}

function figures() {
  return `<section id="figures">
  <a href="#figures"><h2>Figures</h2></a>

  ${FigureDemo.withoutImage()}
</section>`;
}

function navigation() {
  return `<section id="navigation">
  <a href="#navigation"><h2>Navigation</h2></a>

  <section>
    ${NavDemo.main()}
  </section>

  <br>

  <section>
    <h4>Breadcrumbs (aria-label="breadcrumb")</h4>
    ${NavDemo.breadcrumbs()}
  </section>

  <br>

  <section>
    <h4>Sidebar</h4>
    ${NavDemo.verticalInAside()}
  </section>
</section>`;
}

function typography() {
  return `<section id="typography">
  <a href="#typography"><h2>Typography</h2></a>

  <section class="auto-grid">
    <section>
      ${TextDemo.headings()}
    </section>

    <section>
      <h3>Paragraphs</h3>

      ${TextDemo.paragraphs()}
    </section>
  </section>

  <br>

  <section>
    <h4>Inline Elements</h4>
    ${TextDemo.inlineElements()}
  </section>
</section>`;
}

function headingGroup() {
  return `<section id="headingGroup">
  <header>
    ${HgroupDemo.main()}
  </header>
</section>`;
}

function lists() {
  return `<section id="lists">
  <a href="#lists"><h2>Lists</h2></a>

  <section>
    <h4>Group</h4>
    ${CardListDemo.unorderedList()}
  </section>

  <section>
    <h4>Unordered</h4>
    ${ListsDemo.unordered()}
  </section>

  <br>

  <section>
    <h4>Ordered</h4>
    ${ListsDemo.ordered()}
  </section>

  <br>

  <section>
    <h4>Definition</h4>
    ${ListsDemo.definition()}
  </section>
</section>`;
}

function blockquotes() {
  return `<section id="blockquotes">
  <a href="#blockquotes"><h2>Blockquote</h2></a>

  <section>
    ${TextDemo.blockquote()}
  </section>
</section>`;
}

function codeBlocks() {
  return `<section id="codeBlocks">
  <a href="#codeBlocks"><h2>Code Block</h2></a>

  <section>
    ${TextDemo.codeBlock()}
  </section>
</section>`;
}

function address() {
  return `<section id="address">
  <a href="#address"><h2>Address</h2></a>

  <section>
    ${TextDemo.address()}
  </section>
</section>`;
}

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement(
    "main",
    { class: "container", ...attrs },
    `<br>

${buttons()}

<hr>
<br>

${links()}

<hr>
<br>

${inputElements()}

<hr>
<br>

${fieldsets()}

<hr>
<br>

${cards()}

<hr>
<br>

${loadingStates()}

<hr>
<br>

${tooltips()}

<hr>
<br>

${accordions()}

<hr>
<br>

${dropdowns()}

<hr>
<br>

${modal()}

<hr>
<br>

${tables()}

<hr>
<br>

${progressBars()}

<hr>
<br>

${figures()}

<hr>
<br>

${navigation()}

<hr>

${typography()}

<hr>
<br>

${headingGroup()}

<hr>
<br>

${lists()}

<hr>
<br>

${blockquotes()}

<hr>
<br>

${codeBlocks()}

<hr>
<br>

${address()}`,
  );
}
