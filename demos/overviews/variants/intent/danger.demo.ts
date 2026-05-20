import { DangerDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";
import { AnchorDemo, RoleLinkDemo } from '@demos/overviews';

export function links(attrs: Record<string, string> = {}) {
  return `${AnchorDemo.main({ ...attrs, class: ["danger", attrs.class || ""].join(' ') })}
<hr>
${RoleLinkDemo.main({ ...attrs, class: ["danger", attrs.class || ""].join(' ') })}`;
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
