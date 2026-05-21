import { SuccessDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";
import { ADemo, RoleLinkDemo } from '@demos/semantics';

export function links(attrs: Record<string, string> = {}) {
  return `${ADemo.overview({ ...attrs, class: ["success", attrs.class || ""].join(' ') })}
<hr>
${RoleLinkDemo.overview({ ...attrs, class: ["success", attrs.class || ""].join(' ') })}`;
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${SuccessDemo.button(attrs)}

${SuccessDemo.roleButton("div", attrs)}

${SuccessDemo.dropdown(attrs)}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return SuccessDemo.card("div", attrs);
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return SuccessDemo.cardWithHeaderAndFooter("div", attrs);
}
