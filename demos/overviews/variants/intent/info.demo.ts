import { InfoDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";
import { ADemo, RoleLinkDemo } from '@demos/semantics';

export function links(attrs: Record<string, string> = {}) {
  return `${ADemo.overview({ ...attrs, class: ["info", attrs.class || ""].join(' ') })}
<hr>
${RoleLinkDemo.overview({ ...attrs, class: ["info", attrs.class || ""].join(' ') })}`;
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${InfoDemo.button(attrs)}

${InfoDemo.roleButton("div", attrs)}

${InfoDemo.dropdown(attrs)}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return InfoDemo.card("div", attrs);
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return InfoDemo.cardWithHeaderAndFooter("div", attrs);
}
