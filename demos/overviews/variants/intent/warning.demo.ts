import { WarningDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";
import { AnchorDemo, RoleLinkDemo } from '@demos/overviews';

export function links(attrs: Record<string, string> = {}) {
  return `${AnchorDemo.main({ ...attrs, class: ["warning", attrs.class || ""].join(' ') })}
<hr>
${RoleLinkDemo.main({ ...attrs, class: ["warning", attrs.class || ""].join(' ') })}`;
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${WarningDemo.button(attrs)}

${WarningDemo.roleButton("div", attrs)}

${WarningDemo.dropdown(attrs)}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return WarningDemo.card("div", attrs);
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return WarningDemo.cardWithHeaderAndFooter("div", attrs);
}
