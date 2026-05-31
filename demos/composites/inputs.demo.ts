import * as InputDemo from "@demos/semantics/elements/input.demo";
import * as SelectDemo from "@demos/semantics/elements/select.demo";
import * as TextareaDemo from "@demos/semantics/elements/textarea.demo";

export function all(attrs: Record<string, string> = {}, index: number = 0) {
  return `${InputDemo.main(attrs)}

  ${SelectDemo.main(attrs)}

  ${InputDemo.main({ ...attrs, type: "search" })}

  <section class="auto-grid">
    <fieldset>
      ${InputDemo.main({ ...attrs, type: "date" })}
    </fieldset>

    <fieldset>
      ${InputDemo.main({ ...attrs, type: "month" })}
    </fieldset>

    <fieldset>
      ${InputDemo.main({ ...attrs, type: "time" })}
    </fieldset>

    <fieldset>
      ${InputDemo.main({ ...attrs, type: "color", value: "#ff0000" })}
    </fieldset>
  </section>

  <section class="auto-grid">
    <fieldset>
      ${InputDemo.main({ ...attrs, type: "checkbox" })}
      ${InputDemo.main({ ...attrs, type: "checkbox", checked: "true" })}
    </fieldset>

    <fieldset>
      ${InputDemo.main({ ...attrs, type: "radio", name: `radio-group-${index}` })}
      ${InputDemo.main({ ...attrs, type: "radio", name: `radio-group-${index}`, checked: "true" })}
    </fieldset>

    <fieldset>
      ${InputDemo.main({ ...attrs, type: "checkbox", role: "switch" })}
      ${InputDemo.main({ ...attrs, type: "checkbox", role: "switch", checked: "true" })}
    </fieldset>
  </section>

  <section class="auto-grid">
    ${TextareaDemo.main(attrs)}

    ${SelectDemo.multipleSelect(attrs)}
  </section>

  <section class="auto-grid">
    ${InputDemo.rangeBasic(attrs)}

    ${InputDemo.main({ ...attrs, type: "file" })}
  </section>
`;
}
