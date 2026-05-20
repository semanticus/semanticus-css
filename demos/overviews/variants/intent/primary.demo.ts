import { PrimaryDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function links(attrs: Record<string, string> = {}) {
  return renderElement('nav', {}, `${PrimaryDemo.anchor({ ...attrs, class: ["Primary", attrs.class || ""].join(' ') })}

${PrimaryDemo.roleLink("button", { ...attrs, class: ["Primary", attrs.class || ""].join(' ') })}

${PrimaryDemo.roleLink("div", { ...attrs, class: ["Primary", attrs.class || ""].join(' ') })}`);
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${PrimaryDemo.button({ ...attrs, class: ["Primary", attrs.class || ""].join(' ') })}

${PrimaryDemo.roleButton("div", { ...attrs, class: ["Primary", attrs.class || ""].join(' ') })}

${PrimaryDemo.dropdown({ ...attrs, class: ["Primary", attrs.class || ""].join(' ') })}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return PrimaryDemo.card("div", { ...attrs, class: ["Primary", attrs.class || ""].join(' ') });
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return PrimaryDemo.cardWithHeaderAndFooter("div", { ...attrs, class: ["Primary", attrs.class || ""].join(' ') });
}
