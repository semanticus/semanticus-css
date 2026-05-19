import { renderElement } from "@scripts/utils";
import { RoleButtonDemo, RoleLinkDemo } from "@demos/semantics/attributes";
import { ADemo, ButtonDemo } from "@demos/semantics/elements";
import { CardDemo } from "@demos/components";

export function links(attrs: Record<string, string> = {}) {
  return renderElement('nav', {}, `${ADemo.main({ ...attrs, class: ["secondary", attrs.class || ""].join(' ') })}

${RoleLinkDemo.main("button", { ...attrs, class: ["secondary", attrs.class || ""].join(' ') })}

${RoleLinkDemo.main("div", { ...attrs, class: ["secondary", attrs.class || ""].join(' ') })}`);
}

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('nav', { role: 'toolbar' }, `${ButtonDemo.main({ ...attrs, class: ["secondary", attrs.class || ""].join(' ') })}

${RoleButtonDemo.main("div", { ...attrs, class: ["secondary", attrs.class || ""].join(' ') })}

${RoleButtonDemo.dropdown({ ...attrs, class: ["secondary", attrs.class || ""].join(' ') })}`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return CardDemo.main("div", { ...attrs, class: ["secondary", attrs.class || ""].join(' ') });
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return CardDemo.withHeaderAndFooter("div", { ...attrs, class: ["secondary", attrs.class || ""].join(' ') });
}
