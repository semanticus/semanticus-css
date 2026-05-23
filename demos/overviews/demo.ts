import { renderElement } from "@scripts/utils";

import { GhostDemo, SubtleDemo, IntentDemo } from "@demos/variants";
import {
  DropdownDemo,
  LinksDemo,
  ListGroupDemo,
  TypographyDemo,
} from "@demos/composites";
import { CardDemo, PaneDemo } from "@demos/components";
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
  RoleSearchDemo,
  RoleTooltipDemo,
  RoleLinkDemo,
  TextDemo,
  RoleStatusDemo,
  ButtonDemo,
} from "@demos/semantics";

export function buttons() {
  return `<section id="buttons">
  <h2>Buttons</h2>

  <section role="toolbar">
    <button>Primary</button>
    <button class="secondary">Secondary</button>
    <button class="contrast">Contrast</button>
    <button disabled>Disabled</button>
    <button class="secondary" disabled>Disabled</button>
    <button class="contrast" disabled>Disabled</button>
  </section>
`;
}

export function links() {
  return `<section id="links">
  <h2>Links</h2>

  <section role="toolbar">
    ${ADemo.main()}
    ${RoleLinkDemo.main("button")}
    ${RoleLinkDemo.main("div")}
    ${ADemo.active()}
    ${RoleLinkDemo.active("button")}
    ${RoleLinkDemo.active("div")}
  </section>
</section>`;
}

export function inputButtons() {
  return `<section id="input-buttons">
  <h4>Input buttons (type="button|submit|reset")</h4>

  <section role="toolbar">
    ${InputDemo.button()}
    ${InputDemo.submit()}
    ${InputDemo.reset()}
  </section>
</section>
`;
}

export function disabledState() {
  return `<section id="disabled-state">
  <h4>Disabled State</h4>

  <section role="toolbar">
    ${DisabledDemo.input()}
    ${DisabledDemo.select()}
  </section>

  <section role="toolbar">
    ${DisabledDemo.checkbox()}
    ${DisabledDemo.radio()}
    ${DisabledDemo.switch_()}
  </section>

  <section role="toolbar">
    ${DisabledDemo.inputButtons()}
  </section>
</section>
`;
}

export function validState() {
  return `<section id="valid-state">
  <h4>Valid State (aria-invalid="false")</h4>

  <section role="toolbar">
    ${InputDemo.main({ "aria-invalid": "false" })}
    ${SelectDemo.main({ "aria-invalid": "false" })}
  </section>

  <section role="toolbar">
    ${InputDemo.checkboxBasic({ "aria-invalid": "false" })}
    ${InputDemo.radioBasic({ "aria-invalid": "false" })}
    ${InputDemo.switchBasic({ "aria-invalid": "false" })}
  </section>
</section>
`;
}

export function invalidState() {
  return `<section id="invalid-state">
  <h4>Invalid State (aria-invalid="true")</h4>

  <section role="toolbar">
    ${InputDemo.main({ "aria-invalid": "true" })}
    ${SelectDemo.main({ "aria-invalid": "true" })}
  </section>

  <section role="toolbar">
    ${InputDemo.checkboxBasic({ "aria-invalid": "true" })}
    ${InputDemo.radioBasic({ "aria-invalid": "true" })}
    ${InputDemo.switchBasic({ "aria-invalid": "true" })}
  </section>
</section>
`;
}

export function inputElements() {
  return `<section id="input-elements">
  <h2>Input Elements</h2>

  <input type="text" name="text" placeholder="Text" aria-label="Text" />

  ${SelectDemo.main()}

  ${InputDemo.search()}

  <fieldset role="toolbar">
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

  <section role="toolbar">
    ${InputDemo.checkboxBasic()}

    ${InputDemo.radioBasic()}

    ${InputDemo.switchBasic()}
  </section>

  <section role="toolbar">
    ${TextareaDemo.main()}

    ${SelectDemo.multipleSelect()}
  </section>

  <section role="toolbar">
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
    <h2>Fieldsets</h2>
    <p>Use fieldsets to group related form elements together.</p>
  </hgroup>

  <section>
    ${FieldsetDemo.main()}
  </section>

  <section>
    <h4>Group fieldset (role="group")</h4>

    <section>
      ${FieldsetDemo.groupingInputWithAButton()}
      ${FieldsetDemo.groupingTwoInputsWithAButton()}
      ${FieldsetDemo.groupingSelectWithAButton()}
    </section>
  </section>

  <section>
    <h4>Search fieldset (role="search")</h4>

    <section>
      ${RoleSearchDemo.main("fieldset")}
      ${RoleSearchDemo.withResetButton("fieldset")}
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

function loadingStates() {
  return `<section id="loading-states">
  <h2>Loading States (aria-busy="true")</h2>

  <section role="toolbar">
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
    <h2>Tooltips (role="tooltip")</h2>
    <p>Pair a trigger element with <code>aria-describedby</code> and another with <code>[role="tooltip"]</code>.</p>
  </hgroup>

  ${RoleTooltipDemo.main()}
</section>`;
}

function accordions() {
  return `<section id="accordions">
  <h2>Accordions</h2>

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

function dialogs() {
  return `<section id="dialogs">
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
  ${ProgressDemo.indeterminate()}
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

  <section role="toolbar">
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
    ${ListGroupDemo.main()}
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

export function customizerExample(attrs: Record<string, string> = {}) {
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

<section id="input-elements">
  <h2>Input Elements</h2>

  <fieldset role="toolbar">
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
      ${FieldsetDemo.groupingDropdownWithAButton()}
    </label>
  </fieldset>

  <fieldset role="toolbar">
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

export function palettesExample(attrs: Record<string, string> = {}) {
  return renderElement("main", { class: 'container', ...attrs }, `<br>
${buttons()}

<hr>
<br>

${links()}

<hr>
<br>

<section id="input-elements">
  <h2>Input Elements</h2>

  <fieldset role="toolbar">
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
      ${RoleGroupDemo.dropdownWithButton()}
    </label>
  </fieldset>

  <fieldset role="toolbar">
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
</section>`);
}

export function fullBundle(attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement("main", { class: 'container', ...attrs }, `<br>

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

${dialogs()}

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

export function fullBundleColorsButtons() {
  return `<section id="buttons">
  <h2>Buttons</h2>

  ${ButtonDemo.intentVariants()}
  ${ButtonDemo.subtleVariants()}
  ${ButtonDemo.ghostVariants()}
</section>`;
}

export function fullBundleColors(attrs: Record<string, string> = {}) {
  return renderElement(
    "main",
    { class: "container", ...attrs },
    `<br>
<section id="typography">
  <h2>Typography</h2>

  ${TypographyDemo.overviewVariants()}
</section>

<hr>
<br>

${fullBundleColorsButtons()}

<hr>
<br>

<section id="links">
  <h2>Links</h2>

  ${LinksDemo.overviewVariants()}
</section>

<hr>
<br>

<section id="dropdowns">
  <h2>Dropdowns (role="button")</h2>

  ${DropdownDemo.overviewVariants()}
</section>

<hr>
<br>

<section id="list-group">
  <h2>List Group</h2>

  ${ListGroupDemo.overviewVariants()}
</section>

<hr>
<br>

<section id="cards">
  <h2>Cards</h2>

  ${CardDemo.overviewVariants()}
</section>

<hr>
<br>

<section id="panes">
  <h2>Panes</h2>

  ${PaneDemo.overviewVariants()}
</section>

<hr>
<br>

<section id="role-statuses">
  <h2>Role Statuses</h2>

  ${RoleStatusDemo.overviewVariants()}
</section>`,
  );
}
