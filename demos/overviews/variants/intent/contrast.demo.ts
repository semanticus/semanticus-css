import { ContrastDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";
import { AnchorDemo, RoleLinkDemo } from '@demos/overviews';

export function links(attrs: Record<string, string> = {}) {
  return `${AnchorDemo.main({ ...attrs, class: ["contrast", attrs.class || ""].join(' ') })}
<hr>
${RoleLinkDemo.main({ ...attrs, class: ["contrast", attrs.class || ""].join(' ') })}`;
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${ContrastDemo.button(attrs)}

${ContrastDemo.roleButton("div", attrs)}

${ContrastDemo.dropdown(attrs)}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return ContrastDemo.card("div", attrs);
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return ContrastDemo.cardWithHeaderAndFooter("div", attrs);
}
