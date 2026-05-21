import { renderElement } from "@scripts/utils";
import * as CardDemo from "@demos/components/card.demo";

export function main(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${CardDemo.main("div", {
    ...attrs,
    class: ['', attrs.class].filter(Boolean).join(" "),
    style: "background-color: #f5f5f5;"
  })}

${CardDemo.main("div", {
  ...attrs,
  class: ['pane', attrs.class].filter(Boolean).join(" "),
  style: "background-color: #f5f5f5;"
})}`);
}

export function heroSection(_attrs: Record<string, string> = {}, slot: string = "") {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { ...attrs, class: `pane text-center ${_class || ''}` }, `<hgroup>
  <h1>Welcome to our website</h1>
  <p>Discover our amazing products and services that can help you achieve your goals.</p>
</hgroup>
<button>Get Started</button>`);
}
