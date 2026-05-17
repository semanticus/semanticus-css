import { renderElement } from "@scripts/utils";

import {
  ButtonDemo,
  DetailsDemo,
  InputDemo,
} from '@demos/semantics/elements';

import {
  CardDemo,
} from '@demos/components';

import {
  RoleButtonDemo,
} from '@demos/semantics/attributes';

export function buttons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${renderElement('section', { role: 'toolbar' }, `${InputDemo.submit(attrs)}
${InputDemo.submit({ ...attrs, class: `subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${InputDemo.reset(attrs)}
${InputDemo.reset({ ...attrs, class: `subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${RoleButtonDemo.main('div', attrs, 'DIV as Button')}
${RoleButtonDemo.main('div', { ...attrs, class: `subtle ${_class || ''}` }, 'DIV as Button')}`)}

${renderElement('section', { role: 'toolbar' }, `${ButtonDemo.main(attrs)}
${ButtonDemo.main({ ...attrs, class: `secondary ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `contrast ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `success ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `info ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `warning ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `danger ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${ButtonDemo.main({ ...attrs, class: `subtle ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `secondary subtle ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `contrast subtle ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `success subtle ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `info subtle ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `warning subtle ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `danger subtle ${_class || ''}` })}`)}`;
}

export function accordions(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${renderElement('section', { role: 'toolbar' }, `${DetailsDemo.asButton(attrs)}
${DetailsDemo.asButton({ ...attrs, class: `subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${DetailsDemo.asButton({ ...attrs, class: `secondary ${_class || ''}` })}
${DetailsDemo.asButton({ ...attrs, class: `secondary subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${DetailsDemo.asButton({ ...attrs, class: `contrast ${_class || ''}` })}
${DetailsDemo.asButton({ ...attrs, class: `contrast subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${DetailsDemo.asButton({ ...attrs, class: `success ${_class || ''}` })}
${DetailsDemo.asButton({ ...attrs, class: `success subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${DetailsDemo.asButton({ ...attrs, class: `info ${_class || ''}` })}
${DetailsDemo.asButton({ ...attrs, class: `info subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${DetailsDemo.asButton({ ...attrs, class: `warning ${_class || ''}` })}
${DetailsDemo.asButton({ ...attrs, class: `warning subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${DetailsDemo.asButton({ ...attrs, class: `danger ${_class || ''}` })}
${DetailsDemo.asButton({ ...attrs, class: `danger subtle ${_class || ''}` })}`)}`;
}

export function cards(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${renderElement('section', { role: 'toolbar' }, `${CardDemo.main('div', attrs)}
${CardDemo.main('div', { ...attrs, class: `subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${CardDemo.main('div', { ...attrs, class: `primary ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `primary subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${CardDemo.main('div', { ...attrs, class: `secondary ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `secondary subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${CardDemo.main('div', { ...attrs, class: `contrast ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `contrast subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${CardDemo.main('div', { ...attrs, class: `success ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `success subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${CardDemo.main('div', { ...attrs, class: `info ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `info subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${CardDemo.main('div', { ...attrs, class: `warning ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `warning subtle ${_class || ''}` })}`)}

${renderElement('section', { role: 'toolbar' }, `${CardDemo.main('div', { ...attrs, class: `danger ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `danger subtle ${_class || ''}` })}`)}`;
}
