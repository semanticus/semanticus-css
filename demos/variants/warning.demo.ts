import { renderElement } from "@scripts/utils";
import { RoleButtonDemo, RoleLinkDemo } from "@demos/semantics/attributes";
import { ADemo, ButtonDemo } from "@demos/semantics/elements";
import * as PaneDemo from "@demos/variants/pane.demo";
import * as PanelDemo from "@demos/variants/panel.demo";
import * as CardDemo from "@demos/variants/card.demo";

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

export function panes() {
  return `${basicPane()}

<hr>

${paneWithHeaderAndFooter()}`;
}

export function basicPane(attrs: Record<string, string> = {}) {
  return PaneDemo.main("div", { ...attrs, class: ["warning", attrs.class || ""].join(' ') });
}

export function paneWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return PaneDemo.withHeaderAndFooter("div", { ...attrs, class: ["warning", attrs.class || ""].join(' ') });
}

export function panels() {
  return `${basicPanel()}

<hr>

${panelWithHeaderAndFooter()}`;
}

export function basicPanel(attrs: Record<string, string> = {}) {
  return PanelDemo.main("div", { ...attrs, class: ["warning", attrs.class || ""].join(' ') });
}

export function panelWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return PanelDemo.withHeaderAndFooter("div", { ...attrs, class: ["warning", attrs.class || ""].join(' ') });
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
