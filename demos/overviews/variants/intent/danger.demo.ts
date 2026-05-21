import { DangerDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";
import { ADemo, RoleLinkDemo } from '@demos/semantics';

export function links(attrs: Record<string, string> = {}) {
  return `${ADemo.overview({ ...attrs, class: ["danger", attrs.class || ""].join(' ') })}
<hr>
${RoleLinkDemo.overview({ ...attrs, class: ["danger", attrs.class || ""].join(' ') })}`;
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${DangerDemo.button(attrs)}

${DangerDemo.roleButton("div", attrs)}

${DangerDemo.dropdown(attrs)}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return DangerDemo.card("div", attrs);
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return DangerDemo.cardWithHeaderAndFooter("div", attrs);
}
