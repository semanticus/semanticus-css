import { InfoDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function links(attrs: Record<string, string> = {}) {
  return renderElement('nav', {}, `${InfoDemo.anchor({ ...attrs, class: ["Info", attrs.class || ""].join(' ') })}

${InfoDemo.roleLink("button", { ...attrs, class: ["Info", attrs.class || ""].join(' ') })}

${InfoDemo.roleLink("div", { ...attrs, class: ["Info", attrs.class || ""].join(' ') })}`);
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${InfoDemo.button({ ...attrs, class: ["Info", attrs.class || ""].join(' ') })}

${InfoDemo.roleButton("div", { ...attrs, class: ["Info", attrs.class || ""].join(' ') })}

${InfoDemo.dropdown({ ...attrs, class: ["Info", attrs.class || ""].join(' ') })}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return InfoDemo.card("div", { ...attrs, class: ["Info", attrs.class || ""].join(' ') });
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return InfoDemo.cardWithHeaderAndFooter("div", { ...attrs, class: ["Info", attrs.class || ""].join(' ') });
}
