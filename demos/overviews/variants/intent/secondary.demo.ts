import { SecondaryDemo } from "@demos/variants/intent";
import { renderElement } from "@scripts/utils";

export function links(attrs: Record<string, string> = {}) {
  return renderElement('nav', {}, `${SecondaryDemo.anchor({ ...attrs, class: ["Secondary", attrs.class || ""].join(' ') })}

${SecondaryDemo.roleLink("button", { ...attrs, class: ["Secondary", attrs.class || ""].join(' ') })}

${SecondaryDemo.roleLink("div", { ...attrs, class: ["Secondary", attrs.class || ""].join(' ') })}`);
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${SecondaryDemo.button({ ...attrs, class: ["Secondary", attrs.class || ""].join(' ') })}

${SecondaryDemo.roleButton("div", { ...attrs, class: ["Secondary", attrs.class || ""].join(' ') })}

${SecondaryDemo.dropdown({ ...attrs, class: ["Secondary", attrs.class || ""].join(' ') })}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return SecondaryDemo.card("div", { ...attrs, class: ["Secondary", attrs.class || ""].join(' ') });
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return SecondaryDemo.cardWithHeaderAndFooter("div", { ...attrs, class: ["Secondary", attrs.class || ""].join(' ') });
}
