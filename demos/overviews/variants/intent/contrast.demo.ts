import { ContrastDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function links(attrs: Record<string, string> = {}) {
  return renderElement('nav', {}, `${ContrastDemo.anchor({ ...attrs, class: ["Contrast", attrs.class || ""].join(' ') })}

${ContrastDemo.roleLink("button", { ...attrs, class: ["Contrast", attrs.class || ""].join(' ') })}

${ContrastDemo.roleLink("div", { ...attrs, class: ["Contrast", attrs.class || ""].join(' ') })}`);
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${ContrastDemo.button({ ...attrs, class: ["Contrast", attrs.class || ""].join(' ') })}

${ContrastDemo.roleButton("div", { ...attrs, class: ["Contrast", attrs.class || ""].join(' ') })}

${ContrastDemo.dropdown({ ...attrs, class: ["Contrast", attrs.class || ""].join(' ') })}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return ContrastDemo.card("div", { ...attrs, class: ["Contrast", attrs.class || ""].join(' ') });
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return ContrastDemo.cardWithHeaderAndFooter("div", { ...attrs, class: ["Contrast", attrs.class || ""].join(' ') });
}
