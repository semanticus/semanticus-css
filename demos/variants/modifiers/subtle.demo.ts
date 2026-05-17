import { renderElement } from "@scripts/utils";

import { CardDemo } from '@demos/components';
import { ButtonDemo, InputDemo } from '@demos/semantics/elements';
import { RoleButtonDemo } from '@demos/semantics/attributes';

export function buttons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { role: 'toolbar' }, `${ButtonDemo.main({ ...attrs, class: `subtle ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `secondary subtle ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `contrast subtle ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `success subtle ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `info subtle ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `warning subtle ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `danger subtle ${_class || ''}` })}`);
}

export function inputButtons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, InputDemo.buttons({ ...attrs, class: `subtle ${_class || ''}` }));
}

export function roleButtonsAndDropdowns(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${roleButtons(attrs)}

<hr>

${dropdowns(attrs)}`);
}

export function roleButtons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${RoleButtonDemo.main('section', { ...attrs, class: `subtle ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `secondary subtle ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `contrast subtle ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `success subtle ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `info subtle ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `warning subtle ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `danger subtle ${_class || ''}` }, '&lt;section&gt; as button')}`;
}

export function dropdowns(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${RoleButtonDemo.dropdown({ ...attrs, class: `subtle ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `secondary subtle ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `contrast subtle ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `success subtle ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `info subtle ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `warning subtle ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `danger subtle ${_class || ''}` })}`;
}

export function accordions(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${RoleButtonDemo.accordion({ ...attrs, class: `subtle ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `secondary subtle ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `contrast subtle ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `success subtle ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `info subtle ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `warning subtle ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `danger subtle ${_class || ''}` })}`;
}

export function cards(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${CardDemo.main('div', { ...attrs, class: `subtle ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `primary subtle ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `secondary subtle ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `contrast subtle ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `success subtle ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `info subtle ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `warning subtle ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `danger subtle ${_class || ''}` })}`);
}
