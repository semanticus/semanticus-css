import { SuccessDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function links(attrs: Record<string, string> = {}) {
  return renderElement('nav', {}, `${SuccessDemo.anchor({ ...attrs, class: ["success", attrs.class || ""].join(' ') })}

${SuccessDemo.roleLink("button", { ...attrs, class: ["success", attrs.class || ""].join(' ') })}

${SuccessDemo.roleLink("div", { ...attrs, class: ["success", attrs.class || ""].join(' ') })}`);
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${SuccessDemo.button({ ...attrs, class: ["success", attrs.class || ""].join(' ') })}

${SuccessDemo.roleButton("div", { ...attrs, class: ["success", attrs.class || ""].join(' ') })}

${SuccessDemo.dropdown({ ...attrs, class: ["success", attrs.class || ""].join(' ') })}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return SuccessDemo.card("div", { ...attrs, class: ["success", attrs.class || ""].join(' ') });
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return SuccessDemo.cardWithHeaderAndFooter("div", { ...attrs, class: ["success", attrs.class || ""].join(' ') });
}
