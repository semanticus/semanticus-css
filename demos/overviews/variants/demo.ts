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

export function buttonsVariants(_attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `
    `);
}

export function buttons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${ButtonDemo.main(attrs)}
${RoleButtonDemo.main('div', attrs)}
${ButtonDemo.main({ ...attrs, class: `secondary ${_class || ''}` })}
${RoleButtonDemo.main('div', { ...attrs, class: `secondary ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `contrast ${_class || ''}` })}
${RoleButtonDemo.main('div', { ...attrs, class: `contrast ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `success ${_class || ''}` })}
${RoleButtonDemo.main('div', { ...attrs, class: `success ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `info ${_class || ''}` })}
${RoleButtonDemo.main('div', { ...attrs, class: `info ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `warning ${_class || ''}` })}
${RoleButtonDemo.main('div', { ...attrs, class: `warning ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `danger ${_class || ''}` })}
${RoleButtonDemo.main('div', { ...attrs, class: `danger ${_class || ''}` })}`);
}

export function links(_attrs: Record<string, string> = {}) {
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

export function accordions(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { role: 'toolbar' }, `${DetailsDemo.asButton(attrs)}
${DetailsDemo.asButton({ ...attrs, class: `secondary ${_class || ''}` })}
${DetailsDemo.asButton({ ...attrs, class: `contrast ${_class || ''}` })}
${DetailsDemo.asButton({ ...attrs, class: `success ${_class || ''}` })}
${DetailsDemo.asButton({ ...attrs, class: `info ${_class || ''}` })}
${DetailsDemo.asButton({ ...attrs, class: `warning ${_class || ''}` })}
${DetailsDemo.asButton({ ...attrs, class: `danger ${_class || ''}` })}`);
}
