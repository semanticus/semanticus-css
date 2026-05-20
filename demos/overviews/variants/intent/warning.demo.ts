import { WarningDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function links(attrs: Record<string, string> = {}) {
  return renderElement('nav', {}, `${WarningDemo.anchor({ ...attrs, class: ["Warning", attrs.class || ""].join(' ') })}

${WarningDemo.roleLink("button", { ...attrs, class: ["Warning", attrs.class || ""].join(' ') })}

${WarningDemo.roleLink("div", { ...attrs, class: ["Warning", attrs.class || ""].join(' ') })}`);
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${WarningDemo.button({ ...attrs, class: ["Warning", attrs.class || ""].join(' ') })}

${WarningDemo.roleButton("div", { ...attrs, class: ["Warning", attrs.class || ""].join(' ') })}

${WarningDemo.dropdown({ ...attrs, class: ["Warning", attrs.class || ""].join(' ') })}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return WarningDemo.card("div", { ...attrs, class: ["Warning", attrs.class || ""].join(' ') });
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return WarningDemo.cardWithHeaderAndFooter("div", { ...attrs, class: ["Warning", attrs.class || ""].join(' ') });
}
