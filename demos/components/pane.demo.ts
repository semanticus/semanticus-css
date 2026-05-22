import { renderElement } from "@scripts/utils";
import * as CardDemo from "@demos/components/card.demo";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, title: string = 'Pane title') {
  const mergedAttrs = { ...attrs, class: `pane ${attrs.class || ''}`.trim() };

  return renderElement(tagName, mergedAttrs, `<hgroup>
  <h2>${title}</h2>
  <p>This is the subtitle</p>
</hgroup>
<p>This is the main content of the pane.</p>`);
}

export function heroSection(_attrs: Record<string, string> = {}, slot: string = "") {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { ...attrs, class: `pane ${_class || ''} text-center py-5 px-4` }, `<hgroup>
  <h1>Welcome to our website</h1>
  <p>Discover our amazing products and services that can help you achieve your goals.</p>
</hgroup>
<button>Get Started</button>`);
}
