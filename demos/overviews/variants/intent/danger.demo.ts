import { DangerDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function links(attrs: Record<string, string> = {}) {
  return renderElement('nav', {}, `${DangerDemo.anchor({ ...attrs, class: ["Danger", attrs.class || ""].join(' ') })}

${DangerDemo.roleLink("button", { ...attrs, class: ["Danger", attrs.class || ""].join(' ') })}

${DangerDemo.roleLink("div", { ...attrs, class: ["Danger", attrs.class || ""].join(' ') })}`);
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${DangerDemo.button({ ...attrs, class: ["Danger", attrs.class || ""].join(' ') })}

${DangerDemo.roleButton("div", { ...attrs, class: ["Danger", attrs.class || ""].join(' ') })}

${DangerDemo.dropdown({ ...attrs, class: ["Danger", attrs.class || ""].join(' ') })}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return DangerDemo.card("div", { ...attrs, class: ["Danger", attrs.class || ""].join(' ') });
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return DangerDemo.cardWithHeaderAndFooter("div", { ...attrs, class: ["Danger", attrs.class || ""].join(' ') });
}
