import { ADemo, ButtonDemo, RoleButtonDemo, RoleLinkDemo } from "@demos/semantics";
import { CardDemo } from "@demos/components";
import { renderElement, classMergeAttributes } from "@scripts/utils";

function mergedAttrs(attrs: Record<string, string> = {}) {
  return classMergeAttributes('info', attrs);
}

export function anchor(attrs: Record<string, string> = {}) {
  return ADemo.main(mergedAttrs(attrs));
}

export function roleLink(tagName: string = "button", attrs: Record<string, string> = {}) {
  return RoleLinkDemo.main(tagName, mergedAttrs(attrs));
}

export function button(attrs: Record<string, string> = {}) {
  return ButtonDemo.main(mergedAttrs(attrs));
}

export function roleButton(tagName: string = "div", attrs: Record<string, string> = {}) {
  return RoleButtonDemo.main(tagName, mergedAttrs(attrs));
}

export function dropdown(attrs: Record<string, string> = {}) {
  return RoleButtonDemo.dropdown(mergedAttrs(attrs));
}

export function accordion(attrs: Record<string, string> = {}) {
  return RoleButtonDemo.accordion(mergedAttrs(attrs));
}

export function card(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardDemo.main(tagName, mergedAttrs(attrs));
}

export function cardWithHeaderAndFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardDemo.withHeaderAndFooter(tagName, mergedAttrs(attrs));
}

/* Overviews */

export function overviewLinks(attrs: Record<string, string> = {}) {
  return `${ADemo.overview(mergedAttrs(attrs))}
<hr>
${RoleLinkDemo.overview(mergedAttrs(attrs))}`;
}

export function overviewButtons(attrs: Record<string, string> = {}) {
  return renderElement('div', { class: 'grid' }, `${button(attrs)}

${roleButton("div", attrs)}

${dropdown(attrs)}`);
}

export function overviewCards() {
  return `${card("div", {})}

<hr>

${cardWithHeaderAndFooter("div", {})}`;
}
