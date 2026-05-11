import { renderElement } from "@demos/utils";

import * as TypographyDemo from '@demos/semantics/typography.demo';

import {
  InputDemo,
  DetailsDemo,
  SelectDemo,
  TextareaDemo,
  FieldsetDemo,
  DialogDemo,
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
} from '@demos/semantics/attributes';

export function buttons() {
  return `<section id="buttons">
  <h2>Buttons</h2>

  <section role="toolbar">
    <button>Primary</button>
    <button class="secondary">Secondary</button>
    <button class="contrast">Contrast</button>
    <button disabled>Disabled</button>
  </section>
`;
}

export function links() {
  return `<section id="links">
  <h2>Links</h2>

  <section role="toolbar">
    <a href="#" onclick="event.preventDefault()">Primary</a>
    <a href="#" aria-current="page" onclick="event.preventDefault()">Active</a>
    <a href="#" class="secondary" onclick="event.preventDefault()">Secondary</a>
    <a href="#" class="contrast" onclick="event.preventDefault()">Contrast</a>
  </section>
`;
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
    ${InputDemo.basic({ "aria-invalid": "false" })}
    ${SelectDemo.basic({ "aria-invalid": "false" })}
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
    ${InputDemo.basic({ "aria-invalid": "true" })}
    ${SelectDemo.basic({ "aria-invalid": "true" })}
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

  ${SelectDemo.basic()}

  ${InputDemo.search()}

  <section role="toolbar">
    ${InputDemo.date()}

    ${InputDemo.time()}

    ${InputDemo.color()}
  </section>

  <section role="toolbar">
    ${InputDemo.checkboxBasic()}

    ${InputDemo.radioBasic()}

    ${InputDemo.switchBasic()}
  </section>

  <section role="toolbar">
    ${TextareaDemo.basic()}

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
    ${FieldsetDemo.basic()}
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
      ${RoleSearchDemo.basic("fieldset")}
      ${RoleSearchDemo.withResetButton("fieldset")}
    </section>
  </section>
</section>`;
}

function cards() {
  return `<section id="cards">
  <h2>Cards</h2>

  <article id="article" class="card">
    <h2>Basic Card</h2>
    <p>
      This is a basic card component using the article element with the .card class. Cards provide a contained
      space for content with consistent padding and styling.
    </p>
  </article>

  <!-- Card with header & footer -->
  <article id="article-header-footer" class="card">
    <header>
      <h2>Card with Header and Footer</h2>
    </header>

    <p>
      Cards support optional <code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code> sections.
      These use a distinct background and border to visually separate them from the card body.
    </p>
    <footer>
      <a href="#!" role="button" aria-label="Close">Cancel</a>
      <a href="#!" role="button">Save</a>
    </footer>
  </article>
</section>`;
}

function loadingStates() {
  return `<section id="loading-states">
  <h2>Loading States (aria-busy="true")</h2>

  <section role="toolbar">
    <section>
      ${AriaBusyDemo.basic("article", {}, "")}
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

  ${RoleTooltipDemo.basic()}
</section>`;
}

function accordions() {
  return `<section id="accordions">
  <h2>Accordions</h2>

  <section>
    ${DetailsDemo.basic()}
  </section>

  <br>

  <section>
    <h4>Button Style (role="button")</h4>
    ${DetailsDemo.asButton()}
  </section>
</section>`;
}

function dialogs() {
  return `<section id="dialogs">
  <hgroup>
    <h2>Modal</h2>
    <p>Click the button below to open a modal dialog</p>
  </hgroup>

  ${DialogDemo.basic()}
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

  ${ProgressDemo.basic()}
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
    ${NavDemo.basic()}
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
    ${HgroupDemo.basic()}
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

export function simpleExample(attrs: Record<string, string> = {}) {
  return renderElement("main", { class: 'container', ...attrs }, `
  ${buttons()}

  <hr>

  ${links()}

  <hr>

  <section id="input-elements">
    <h2>Input Elements</h2>

    <fieldset role="toolbar">
      <label>
        Text Input
        <input type="text" name="text" placeholder="Text" aria-label="Text" />
      </label>

      <label>
        Select
        ${SelectDemo.basic()}
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

  <section id="cards">
    <h2>Cards</h2>

    <article class="card">
      <hgroup>
        <h2>Card title</h2>
        <p>description</p>
      </hgroup>
      <p>This is a sample card component styled with the <!-- PALETTE_NAME --> palette. It demonstrates the palette's card background, border, and text colors.</p>
      <footer>
        <button aria-label="Close">Cancel</button>&nbsp;
        <button>Save</button>
      </footer>
    </article>
  </section>
`);
}

export function completeExample(attrs: Record<string, string> = {}) {
  return renderElement("main", { class: 'container', ...attrs }, `<header>
  <h1 class="title">Semantics Demo</h1>
</header>

${buttons()}

<hr>

${links()}

<hr>

${inputElements()}

<hr>

${fieldsets()}

<hr>

${cards()}

<hr>

${loadingStates()}

<hr>

${tooltips()}

<hr>

${accordions()}

<hr>

${dialogs()}

<hr>

${tables()}

<hr>

${progressBars()}

<hr>

${figures()}

<hr>

${navigation()}

<hr>

${typography()}

<hr>

${headingGroup()}

<hr>

${lists()}

<hr>

${blockquotes()}

<hr>

${codeBlocks()}

<hr>

${address()}`);
}
