import { InfoDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";
import { AnchorDemo, RoleLinkDemo } from '@demos/overviews';

export function links(attrs: Record<string, string> = {}) {
  return `${AnchorDemo.main({ ...attrs, class: ["info", attrs.class || ""].join(' ') })}
<hr>
${RoleLinkDemo.main({ ...attrs, class: ["info", attrs.class || ""].join(' ') })}`;
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
