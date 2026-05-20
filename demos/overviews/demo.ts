import { renderElement } from "@scripts/utils";

import { TypographyDemo } from '@demos/semantics';
import { IntentDemo } from '@demos/overviews';
import { CardDemo } from "@demos/components";
import { GhostDemo, SubtleDemo } from "@demos/overviews/variants/modifiers";
import { ModalDemo } from '@demos/composites';
import {
  ADemo,
  InputDemo,
  DetailsDemo,
  SelectDemo,
  TextareaDemo,
  FieldsetDemo,
  ProgressDemo,
  TableDemo,
  FigureDemo,
  NavDemo,
  HgroupDemo,
  ListsDemo,
} from '@demos/semantics/elements';

import {
  AriaBusyDemo,
  DisabledDemo,
  RoleGroupDemo,
  RoleSearchDemo,
  RoleTooltipDemo,
  RoleLinkDemo,
} from '@demos/semantics/attributes';

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
    ${RoleLinkDemo.main('button')}
    ${RoleLinkDemo.main('div')}
    ${ADemo.active()}
    ${RoleLinkDemo.active('button')}
    ${RoleLinkDemo.active('div')}
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
      ${RoleGroupDemo.inputWithButton("fieldset")}
      ${RoleGroupDemo.twoInputsWithButton("fieldset")}
      ${RoleGroupDemo.selectWithButton("fieldset")}
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
      ${AriaBusyDemo.loadingButton({})}
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
    ${DetailsDemo.basicDropdown()}
  </section>

  <br>

  <section>
    <h4>Button Style (role="button")</h4>

    ${DetailsDemo.dropdownAsButton()}
  </section>
</section>`;
}

function dialogs() {
  return `<section id="dialogs">
  <hgroup>
    <h2>Modal</h2>
    <p>Click the button below to open a modal dialog</p>
  </hgroup>

  ${ModalDemo.withHeaderAndFooter()}
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
      ${TypographyDemo.headings()}
    </section>

    <section>
      <h3>Paragraphs</h3>

      ${TypographyDemo.paragraphs()}
    </section>
  </section>

  <br>

  <section>
    <h4>Inline Elements</h4>
    ${TypographyDemo.inlineElements()}
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
    ${TypographyDemo.blockquote()}
  </section>
</section>`;
}

function codeBlocks() {
  return `<section id="codeBlocks">
  <h2>Code Block</h2>

  <section>
    ${TypographyDemo.codeBlock()}
  </section>
</section>`;
}

function address() {
  return `<section id="address">
  <h2>Address</h2>

  <section>
    ${TypographyDemo.address()}
  </section>
</section>`;
}

export function customizerExample(attrs: Record<string, string> = {}) {
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

${address()}`);
}

function typographySection(cssClass: string) {
  return `<section class="${cssClass}">
  <section>
    ${TypographyDemo.headings('Heading')}
  </section>

  <hgroup>
    <h2>HGroup</h2>
    <p>last child gets muted text</p>
  </hgroup>

  <p>The paragraph element is the most basic block of text content.</p>
  <p class="text-muted">Text explicitly marked as muted.</p>
</section>`;
}

export function fullBundleColorsButtons() {
  return `<section id="buttons">
  <h2>Buttons</h2>

  ${IntentDemo.buttons()}
  ${SubtleDemo.buttons()}
  ${GhostDemo.buttons()}
</section>`;
}

function fullBundleColorsTypography() {
  return `<section id="typography">
  <h2>Typography</h2>

  <section role="toolbar">
    ${typographySection('text-primary')}
    ${typographySection('text-secondary')}
    ${typographySection('text-contrast')}
    ${typographySection('text-success')}
    ${typographySection('text-info')}
    ${typographySection('text-warning')}
    ${typographySection('text-danger')}
  </section>
</section>`;
}

function fullBundleColorsDropdowns() {
  return `<section id="dropdowns">
  <h2>Dropdowns (role="button")</h2>

  <section role="toolbar">
    <section>
      ${IntentDemo.dropdowns()}
    </section>

    <section>
      ${SubtleDemo.dropdowns()}
    </section>

    <section>
      ${GhostDemo.dropdowns()}
    </section>
  </section>
</section>`;
}

function fullBundleColorsCards() {
  return `<section id="cards">
  <h2>Cards</h2>

  <section class="mb-0" role="toolbar">
    ${CardDemo.withHeaderAndFooter()}
    ${CardDemo.withHeaderAndFooter('div', { class: 'subtle' })}
    ${CardDemo.withHeaderAndFooter('div', { class: 'ghost' })}
  </section>

  <section role="toolbar">
    ${IntentDemo.cardsWithHeaderAndFooter()}
    ${SubtleDemo.cardsWithHeaderAndFooter()}
    ${GhostDemo.cardsWithHeaderAndFooter()}
  </section>
</section>`;
}

export function fullBundleColors(attrs: Record<string, string> = {}) {
  return renderElement("main", { class: 'container', ...attrs }, `<br>
${fullBundleColorsTypography()}

<hr>
<br>

${fullBundleColorsButtons()}

<hr>
<br>

${links()}

<hr>
<br>

${fullBundleColorsDropdowns()}

<hr>
<br>

${fullBundleColorsCards()}`);
}
