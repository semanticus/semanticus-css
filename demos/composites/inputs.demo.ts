import * as InputDemo from "@demos/semantics/elements/input.demo";
import * as SelectDemo from "@demos/semantics/elements/select.demo";
import * as TextareaDemo from "@demos/semantics/elements/textarea.demo";

export function all(attrs: Record<string, string> = {}, index: number = 0) {
  return `${InputDemo.withHelperText(attrs)}

  ${SelectDemo.withHelperText(attrs)}

  ${InputDemo.withHelperText({ ...attrs, type: "search" })}

  <section class="auto-grid">
    <fieldset>
      ${InputDemo.withHelperText({ ...attrs, type: "date" })}
    </fieldset>

    <fieldset>
      ${InputDemo.withHelperText({ ...attrs, type: "month" })}
    </fieldset>

    <fieldset>
      ${InputDemo.withHelperText({ ...attrs, type: "time" })}
    </fieldset>

    <fieldset>
      ${InputDemo.withHelperText({ ...attrs, type: "color", value: "#ff0000" })}
    </fieldset>
  </section>

  <section class="auto-grid">
    <fieldset>
      ${InputDemo.withHelperText({ ...attrs, placeholder: "Checkbox", type: "checkbox", checked: "true" })}
    </fieldset>

    <fieldset>
      <label>
        Inline Checkbox
        ${InputDemo.main({ ...attrs, type: "checkbox" })}
      </label>
    </fieldset>

    <fieldset>
      ${InputDemo.withHelperText({ ...attrs, placeholder: "Radio", type: "radio", name: `radio-${index}`, checked: "true" })}
    </fieldset>

    <fieldset>
      <label>
        Inline Radio
        ${InputDemo.main({ ...attrs, type: "radio", name: `inline-radio-${index}` })}
      </label>
    </fieldset>

    <fieldset>
      ${InputDemo.withHelperText({ ...attrs, placeholder: "Switch", type: "checkbox", role: "switch", checked: "true" })}
    </fieldset>


    <fieldset>
      <label>
        Inline Switch
        ${InputDemo.main({ ...attrs, type: "checkbox", role: "switch" })}
      </label>
    </fieldset>
  </section>

  <section class="auto-grid">
    <fieldset>
      ${TextareaDemo.withHelperText(attrs)}
    </fieldset>

    <fieldset>
      <label for="multiple-select">Multiple Select</label>
      ${SelectDemo.multipleSelect({ ...attrs, id: "multiple-select", "aria-describedby": "multiple-select-helper" })}
      <small id="multiple-select-helper">Select one or more</small>
    </fieldset>
  </section>

  <section class="auto-grid">
    <fieldset>
      ${InputDemo.withHelperText({ ...attrs, type: "range" })}
    </fieldset>

    <fieldset>
      ${InputDemo.withHelperText({ ...attrs, type: "file" })}
    </fieldset>
  </section>
`;
}
