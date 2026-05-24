import { renderElement } from "@scripts/utils";
import * as FieldsetDemo from "@demos/semantics/elements/fieldset.demo";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "group" }, slot);
}

export function relatedControls(attrs: Record<string, string> = {}) {
  return FieldsetDemo.groupInputButton(attrs);
}

export function textFormattingButtons(tagName: string = "div", attrs: Record<string, string> = {}) {
  return main(tagName, { ...attrs, 'aria-label': 'Text formatting' }, `<button>Bold</button>
<button>Italic</button>
<button>Underline</button>`);
}
