import { PrimaryDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";
import { ADemo, RoleLinkDemo } from '@demos/semantics';

export function links(attrs: Record<string, string> = {}) {
  return `${ADemo.overview({ ...attrs, class: ["primary", attrs.class || ""].join(' ') })}
<hr>
${RoleLinkDemo.overview({ ...attrs, class: ["primary", attrs.class || ""].join(' ') })}`;
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${PrimaryDemo.button(attrs)}

${PrimaryDemo.roleButton("div", attrs)}

${PrimaryDemo.dropdown(attrs)}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return PrimaryDemo.card("div", attrs);
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return PrimaryDemo.cardWithHeaderAndFooter("div", attrs);
}
