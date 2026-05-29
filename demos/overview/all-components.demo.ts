import { renderElement } from "@scripts/utils";

import {
  DropdownDemo,
  SearchDemo,
  CardListDemo,
  AccordionsDemo,
} from "@demos/composites";
import { CardDemo, ContentGridDemo, IconsDemo } from "@demos/components";
import {
  ADemo,
  InputDemo,
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
  ButtonDemo,
  RoleButtonDemo,
  DlDemo,
  OlDemo,
  UlDemo,
} from "@demos/semantics";

function buttons() {
  return `<section id="buttons">
  <h2>Buttons</h2>

  <section class="auto-grid">
    ${ButtonDemo.main()}
    ${ButtonDemo.main({ "aria-current": "true" }, "Current")}
    ${ButtonDemo.main({ disabled: "true" }, "Disabled")}

    ${RoleButtonDemo.main("div")}
    ${RoleButtonDemo.main("div", { "aria-current": "true" }, "Current")}
    ${RoleButtonDemo.main("div", { disabled: "true" }, "Disabled")}
  </section>
`;
}

function links() {
  return `<section id="links">
  <h2>Links</h2>

  <section class="auto-grid">
    ${ADemo.main()}
    ${ADemo.active({}, "Current")}
    ${ADemo.main({ "aria-disabled": "true" }, "Disabled")}
    ${RoleLinkDemo.main("button")}
    ${RoleLinkDemo.active("button", {}, "Current")}
    ${RoleLinkDemo.main("button", { "aria-disabled": "true" }, "Disabled")}
  </section>
</section>`;
}

function inputButtons() {
  return `<section id="input-buttons">
  <h4>Input buttons</h4>

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
  <h4>Disabled State</h4>

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

function validationStates() {
  return `<section id="valid-states">
  <h4>Validation States</h4>

  <section class="auto-grid">
    <div>
      ${InputDemo.validationStatesWithTextHelper()}
    </div>
    <div>
      ${SelectDemo.validationStatesWithTextHelper()}
    </div>
  </section>

  <section class="auto-grid">
    ${InputDemo.checkboxBasic({ "aria-invalid": "false" })}
    ${InputDemo.checkboxBasic({ "aria-invalid": "true" })}
    ${InputDemo.radioBasic({ "aria-invalid": "false" })}
    ${InputDemo.radioBasic({ "aria-invalid": "true" })}
    ${InputDemo.switchBasic({ "aria-invalid": "false" })}
    ${InputDemo.switchBasic({ "aria-invalid": "true" })}
  </section>

  ${TextareaDemo.validationStatesWithTextHelper()}
</section>
`;
}

function inputElements() {
  return `<section id="input-elements">
  <h2>Input Elements</h2>

  ${InputDemo.main()}

  ${SelectDemo.main()}

  ${InputDemo.main({ type: "search" })}

  <section class="auto-grid">
    <fieldset>
      ${InputDemo.withLabel({ type: "date" })}
    </fieldset>

    <fieldset>
      ${InputDemo.withLabel({ type: "time" })}
    </fieldset>

    <fieldset>
      ${InputDemo.withLabel({ type: "color", value: "#ff0000" })}
    </fieldset>
  </section>

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

    ${InputDemo.main({ type: "file" })}
  </section>

  ${inputButtons()}

  ${disabledState()}

  ${validationStates()}
</section>`;
}

function fieldsets() {
  return `<section id="fieldsets">
  <hgroup>
    <h2>Fieldsets</h2>
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
    </section>
  </section>

  <section id="fieldsets-disabled-state">
    <h4>Disabled State</h4>

    <section>
      ${FieldsetDemo.formInput({ disabled: "disabled" })}
      ${FieldsetDemo.groupInputButton({ disabled: "disabled" })}
      ${FieldsetDemo.groupMultipleInputs({ disabled: "disabled" })}
      ${FieldsetDemo.groupSelectButton({ disabled: "disabled" })}
      ${SearchDemo.main({ disabled: "disabled" })}
    </section>
  </section>
</section>`;
}

function cards() {
  return `<section id="cards">
  <h2>Cards</h2>

  ${CardDemo.main()}

  ${CardDemo.withHeaderAndFooter()}
</section>`;
}

function tooltips() {
  return `<section id="tooltips">
  <hgroup>
    <h2>Tooltips</h2>
    <p>Pair a trigger element with <code>aria-describedby</code> and another with <code>[role="tooltip"]</code>.</p>
  </hgroup>

  ${RoleTooltipDemo.main()}
</section>`;
}

function accordions() {
  return `<section id="accordions">
  <h2>Accordions</h2>

  <section>
    ${AccordionsDemo.entangledAccordions()}
  </section>

  <br>

  <section>
    <h4>Button Style (role="button")</h4>

    ${AccordionsDemo.asButton()}
  </section>
</section>`;
}

function dropdowns() {
  return `<section id="dropdowns">
  <h2>Dropdowns</h2>

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
    <h2>Modal</h2>
    <p>Click the button below to open a modal dialog</p>
  </hgroup>

  ${DialogDemo.showModalWithHeaderAndFooter()}
</section>`;
}

function tables() {
  return `<section id="tables">
  <h2>Tables</h2>

  ${TableDemo.bigExample()}
</section>`;
}

function progressBars() {
  return `<section id="progressBars">
  <h2>Progress Bars</h2>

  ${ProgressDemo.main({ value: "0" })}
  ${ProgressDemo.main({ value: "50" })}
  ${ProgressDemo.main({ value: "100" })}
</section>`;
}

function figures() {
  return `<section id="figures">
  <h2>Figures</h2>

  ${FigureDemo.withoutImage()}
</section>`;
}

function navigation() {
  return `<section id="navigation">
  <h2>Navigation</h2>

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
  <h2>Typography</h2>

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
  <h2>Lists</h2>

  <section>
    <h4>Group</h4>
    ${CardListDemo.unorderedList()}
  </section>

  <section>
    <h4>Unordered</h4>
    ${UlDemo.main()}
  </section>

  <br>

  <section>
    <h4>Ordered</h4>
    ${OlDemo.main()}
  </section>

  <br>

  <section>
    <h4>Definition</h4>
    ${DlDemo.main()}
  </section>
</section>`;
}

function blockquotes() {
  return `<section id="blockquotes">
  <h2>Blockquote</h2>

  <section>
    ${TextDemo.blockquote()}
  </section>
</section>`;
}

function codeBlocks() {
  return `<section id="codeBlocks">
  <h2>Code Block</h2>

  <section>
    ${TextDemo.codeBlock()}
  </section>
</section>`;
}

function address() {
  return `<section id="address">
  <h2>Address</h2>

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

<section id="content-grid">
  <hgroup>
    <h2>Content Grid</h2>
    <p>This example is wrapped in <code>.container</code> and has <code>.pane</code> examples</p>
  </hgroup>


  <div class="container">
    ${ContentGridDemo.nestedFullWidth()}
  </div>
</section>

<hr>
<br>

<section id="icons">
  <h2>All Icons</h2>
  ${IconsDemo.allIcons({ testMode: true })}
</section>

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
