import * as InputDemo from "@demos/semantics/elements/input.demo";
import * as SelectDemo from "@demos/semantics/elements/select.demo";
import * as TextareaDemo from "@demos/semantics/elements/textarea.demo";
import { DropdownDemo } from "@demos/composites";

export function all(attrs: Record<string, string> = {}) {
  const randomIdSuffix: string = Math.random().toString(16).slice(2);

  return `<section class="auto-grid">
  <fieldset>
    ${InputDemo.main({ ...attrs, id: `input-first-name-${randomIdSuffix}` })}
  </fieldset>
  <fieldset>
    ${SelectDemo.main({ ...attrs, id: `input-last-name-${randomIdSuffix}` })}
  </fieldset>
  <fieldset>
    ${DropdownDemo.main()}
  </fieldset>
</section>

<section class="auto-grid">
  <fieldset>
    <label>
      Name
      ${InputDemo.main({ ...attrs, id: `input-name-${randomIdSuffix}` })}
      <small>Enter your full name</small>
    </label>
  </fieldset>
  <fieldset>
    <label>
      Gender
      ${SelectDemo.main({ ...attrs, id: `input-last-gender-${randomIdSuffix}` })}
      <small>Select your gender</small>
    </label>
  </fieldset>
  <fieldset>
    <label>
      Settings
      ${DropdownDemo.main({ ...attrs, id: `input-settings-gender-${randomIdSuffix}` })}
      <small>Select your settings</small>
    </label>
  </fieldset>
</section>

<section class="auto-grid">
  <div>
    ${InputDemo.withHelperText({ ...attrs, id: `input-text-${randomIdSuffix}` })}
  </div>

  <div>
    ${SelectDemo.withHelperText({ ...attrs, id: `input-select-${randomIdSuffix}` })}
  </div>

  <div>
    ${InputDemo.withHelperText({ ...attrs, type: "search", id: `input-search-${randomIdSuffix}` })}
  </div>
</section>

<section class="auto-grid">
  <fieldset>
    ${InputDemo.withHelperText({ ...attrs, type: "date", id: `input-date-${randomIdSuffix}` })}
  </fieldset>

  <fieldset>
    ${InputDemo.withHelperText({ ...attrs, type: "month", id: `input-month-${randomIdSuffix}` })}
  </fieldset>

  <fieldset>
    ${InputDemo.withHelperText({ ...attrs, type: "time", id: `input-time-${randomIdSuffix}` })}
  </fieldset>

  <fieldset>
    ${InputDemo.withHelperText({ ...attrs, type: "color", value: "#ff0000", id: `input-color-${randomIdSuffix}` })}
  </fieldset>
</section>

<section class="auto-grid">
  <fieldset>
    ${InputDemo.withHelperText({ ...attrs, placeholder: "Checkbox", type: "checkbox", checked: "true", id: `input-checkbox1-${randomIdSuffix}` })}
  </fieldset>

  <fieldset>
    <label>
      Inline Checkbox
      ${InputDemo.main({ ...attrs, type: "checkbox", id: `input-checkbox2-${randomIdSuffix}` })}
      <small>Cannot be empty.</small>
    </label>
  </fieldset>

  <fieldset>
    ${InputDemo.withHelperText({ ...attrs, placeholder: "Radio", type: "radio", id: `input-radio1-${randomIdSuffix}`, checked: "true" })}
  </fieldset>

  <fieldset>
    <label>
      Inline Radio
      ${InputDemo.main({ ...attrs, type: "radio", id: `input-radio2-${randomIdSuffix}` })}
    </label>
    <small>Cannot be empty.</small>
  </fieldset>

  <fieldset>
    ${InputDemo.withHelperText({ ...attrs, placeholder: "Switch", type: "checkbox", role: "switch", checked: "true", id: `input-switch1-${randomIdSuffix}` })}
  </fieldset>

  <fieldset>
    <label>
      Inline Switch
      ${InputDemo.main({ ...attrs, type: "checkbox", role: "switch", id: `input-switch2-${randomIdSuffix}` })}
    </label>
    <small>Cannot be empty.</small>
  </fieldset>
</section>

<section class="auto-grid">
  <div>
    <fieldset>
      ${TextareaDemo.withLabel({ ...attrs, id: `input-textarea-${randomIdSuffix}` })}
    </fieldset>
    <small>Cannot be empty.</small>
  </div>

  <fieldset>
    <label for="multiple-select">Multiple Select</label>
    ${SelectDemo.multipleSelect({ ...attrs, id: `input-multiselect-${randomIdSuffix}`, "aria-describedby": "multiple-select-helper" })}
    <small id="multiple-select-helper">Select one or more</small>
  </fieldset>
</section>

<section class="auto-grid">
  <fieldset>
    ${InputDemo.withHelperText({ ...attrs, type: "range", id: `input-range-${randomIdSuffix}` })}
  </fieldset>

  <fieldset>
    ${InputDemo.withHelperText({ ...attrs, type: "file", id: `input-file-${randomIdSuffix}` })}
  </fieldset>
</section>
`;
}
