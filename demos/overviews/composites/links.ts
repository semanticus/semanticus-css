import { renderElement } from "@scripts/utils";

import {
  ADemo,
  ButtonDemo,
  DetailsDemo,
} from '@demos/semantics/elements';

import {
  RoleButtonDemo,
  RoleLinkDemo,
} from '@demos/semantics/attributes';

export function main(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { role: 'toolbar' }, `${ADemo.main(attrs)}
${RoleLinkDemo.main('div', attrs)}
${ADemo.main({ ...attrs, class: `secondary ${_class || ''}` })}
${RoleLinkDemo.main('div', { ...attrs, class: `secondary ${_class || ''}` })}
${ADemo.main({ ...attrs, class: `contrast ${_class || ''}` })}
${RoleLinkDemo.main('div', { ...attrs, class: `contrast ${_class || ''}` })}
${ADemo.main({ ...attrs, class: `success ${_class || ''}` })}
${RoleLinkDemo.main('div', { ...attrs, class: `success ${_class || ''}` })}
${ADemo.main({ ...attrs, class: `info ${_class || ''}` })}
${RoleLinkDemo.main('div', { ...attrs, class: `info ${_class || ''}` })}
${ADemo.main({ ...attrs, class: `warning ${_class || ''}` })}
${RoleLinkDemo.main('div', { ...attrs, class: `warning ${_class || ''}` })}
${ADemo.main({ ...attrs, class: `danger ${_class || ''}` })}
${RoleLinkDemo.main('div', { ...attrs, class: `danger ${_class || ''}` })}`);
}
