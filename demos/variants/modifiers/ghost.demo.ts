import { renderElement, classMergeAttributes } from "@scripts/utils";
import { CardDemo } from '@demos/components';
import { ButtonDemo, InputDemo } from '@demos/semantics/elements';
import { RoleButtonDemo } from '@demos/semantics/attributes';
import { DropdownDemo } from "@demos/composites";

function mergedAttrs(attrs: Record<string, string> = {}) {
  return classMergeAttributes('ghost', attrs);
}

export function main(tagName: string = 'div', attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, mergedAttrs(attrs), slot);
}

export function overview(attrs: Record<string, string> = {}) {
  return `${renderElement('nav', { role: 'toolbar' }, `${ButtonDemo.main(mergedAttrs(attrs))}

  ${RoleButtonDemo.main('section', mergedAttrs(attrs))}

${RoleButtonDemo.dropdown(mergedAttrs(attrs))}`)}

<br>

${CardDemo.main('div', mergedAttrs(attrs))}

${CardDemo.withHeaderAndFooter('div', mergedAttrs(attrs))}`;
}

export function overviewInputButtons(attrs: Record<string, string> = {}) {
  return renderElement('section', {}, InputDemo.buttons(mergedAttrs(attrs)));
}

export function overviewRoleButtonsAndDropdowns(attrs: Record<string, string> = {}) {
  return renderElement('section', {}, `${RoleButtonDemo.ghostVariants(attrs)}

<hr>

${DropdownDemo.ghostVariants(attrs)}`);
}
