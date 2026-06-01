import * as InputDemo from "@demos/semantics/elements/input.demo";
import * as SelectDemo from "@demos/semantics/elements/select.demo";
import * as TextareaDemo from "@demos/semantics/elements/textarea.demo";

export function all(attrs: Record<string, string> = {}) {
  const randomIdSuffix: string = Math.random().toString(16).slice(2);

  return `${InputDemo.withHelperText({ ...attrs, id: `input-text-${randomIdSuffix}` })}

  ${SelectDemo.withHelperText({ ...attrs, id: `input-select-${randomIdSuffix}` })}

  ${InputDemo.withHelperText({ ...attrs, type: "search", id: `input-search-${randomIdSuffix}` })}

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
    </fieldset>

    <fieldset>
      ${InputDemo.withHelperText({ ...attrs, placeholder: "Switch", type: "checkbox", role: "switch", checked: "true", id: `input-switch1-${randomIdSuffix}` })}
    </fieldset>


    <fieldset>
      <label>
        Inline Switch
        ${InputDemo.main({ ...attrs, type: "checkbox", role: "switch", id: `input-switch2-${randomIdSuffix}` })}
      </label>
    </fieldset>
  </section>

  <section class="auto-grid">
    <fieldset>
      ${TextareaDemo.withHelperText({ ...attrs, id: `input-textarea-${randomIdSuffix}` })}
    </fieldset>

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
