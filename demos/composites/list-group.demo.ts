import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as RoleGroupDemo from "@demos/semantics/attributes/role-group.demo";

export function main(attrs: Record<string, string> = {}, slot: string = '') {
  return RoleGroupDemo.unorderedList(attrs, slot);
}

function renderLi(attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement('li', attrs, slot);
}

export function intentVariants(attrs: Record<string, string> = {}, modifier: string = '') {
  return renderElement('ul', { ...attrs, role: "group" }, `${renderLi(classMergeAttributes(`primary ${modifier}`.trim()), 'Primary')}
${renderLi(classMergeAttributes(`secondary ${modifier}`.trim()), 'Secondary')}
${renderLi(classMergeAttributes(`contrast ${modifier}`.trim()), 'Contrast')}
${renderLi(classMergeAttributes(`success ${modifier}`.trim()), 'Success')}
${renderLi(classMergeAttributes(`info ${modifier}`.trim()), 'Info')}
${renderLi(classMergeAttributes(`warning ${modifier}`.trim()), 'Warning')}
${renderLi(classMergeAttributes(`danger ${modifier}`.trim()), 'Danger')}`);
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'subtle');
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'ghost');
}
