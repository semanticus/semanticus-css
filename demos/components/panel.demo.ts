import { renderElement } from "@scripts/utils";
import * as CardDemo from "@demos/components/card.demo";

export function main(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { role: 'toolbar' }, `${CardDemo.main("div", {
    ...attrs,
    style: "background-color: #f5f5f5;"
  })}

${renderElement('div', { ...attrs, class: `panel ${_class || ''}`, style: "background-color: #f5f5f5;" }, `<hgroup>
  <h2>Panel title</h2>
  <p>Panel description</p>
</hgroup>
<p>This is a sample Panel</p>`)}`);
}

export function inlineAlerts() {
  return `${inlineAlert({ class: `success` }, "Your changes have been saved successfully!")}

${inlineAlert({ class: `info` }, "Please be aware of the new updates.")}

${inlineAlert({ class: `warning ghost` }, "Your subscription is about to expire.")}

${inlineAlert({ class: `danger ghost` }, "An error occurred while processing your request. Please try again later.")}`;
}

export function inlineAlert(_attrs: Record<string, string> = {}, slot: string = "") {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { ...attrs, class: `panel ${_class || ''}` }, `<p>${slot}</p>
<button aria-label="Close" class="close"></button>`);
}
