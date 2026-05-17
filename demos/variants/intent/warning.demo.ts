import { renderElement } from "@scripts/utils";
import { RoleButtonDemo, RoleLinkDemo } from "@demos/semantics/attributes";
import { ADemo, ButtonDemo } from "@demos/semantics/elements";
import { CardDemo } from "@demos/components";

export function links() {
  return `${basicA()}

<hr>

${basicRoleLink()}`;
}

export function basicA(attrs: Record<string, string> = {}) {
  return ADemo.main({ ...attrs, class: ["warning", attrs.class || ""].join(' ') });
}

export function basicRoleLink(attrs: Record<string, string> = {}) {
  return RoleLinkDemo.main("button", { ...attrs, class: ["warning", attrs.class || ""].join(' ') });
}

export function buttons() {
  return `${basicButton()}

<hr>

${basicRoleButton()}

<hr>

${basicDetails()}`;
}

export function basicButton(attrs: Record<string, string> = {}) {
  return ButtonDemo.main({ ...attrs, class: ["warning", attrs.class || ""].join(' ') });
}

export function basicRoleButton(attrs: Record<string, string> = {}) {
  return RoleButtonDemo.main("div", { ...attrs, class: ["warning", attrs.class || ""].join(' ') });
}

export function basicDetails() {
  return renderElement("details", {}, `${renderElement("summary", { role: 'button', class: 'warning' }, 'Accordion')}
<p>
  This content is hidden by default and revealed when you click the summary.
  Accordions are great for organizing content into collapsible sections.
</p>`);
}

export function cards() {
  return `${basicCard()}

<hr>

${cardWithHeaderAndFooter()}`;
}

export function basicCard(attrs: Record<string, string> = {}) {
  return CardDemo.main("div", { ...attrs, class: ["warning", attrs.class || ""].join(' ') });
}

export function cardWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return CardDemo.withHeaderAndFooter("div", { ...attrs, class: ["warning", attrs.class || ""].join(' ') });
}
