import { renderElement } from "@scripts/utils";

import { CardDemo } from '@demos/components';
import { ButtonDemo, InputDemo } from '@demos/semantics/elements';
import { RoleButtonDemo } from '@demos/semantics/attributes';

export function buttons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { role: 'toolbar' }, `${ButtonDemo.main({ ...attrs, class: `ghost ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `secondary ghost ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `contrast ghost ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `success ghost ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `info ghost ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `warning ghost ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `danger ghost ${_class || ''}` })}`);
}

export function inputButtons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, InputDemo.buttons({ ...attrs, class: `ghost ${_class || ''}` }));
}

export function roleButtonsAndDropdowns(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${roleButtons(attrs)}

<hr>

${dropdowns(attrs)}`);
}

export function roleButtons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${RoleButtonDemo.main('section', { ...attrs, class: `ghost ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `secondary ghost ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `contrast ghost ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `success ghost ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `info ghost ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `warning ghost ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `danger ghost ${_class || ''}` }, '&lt;section&gt; as button')}`;
}

export function dropdowns(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${RoleButtonDemo.dropdown({ ...attrs, class: `ghost ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `secondary ghost ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `contrast ghost ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `success ghost ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `info ghost ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `warning ghost ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `danger ghost ${_class || ''}` })}`;
}

export function accordions(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${RoleButtonDemo.accordion({ ...attrs, class: `ghost ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `secondary ghost ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `contrast ghost ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `success ghost ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `info ghost ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `warning ghost ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `danger ghost ${_class || ''}` })}`;
}

export function cards(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${CardDemo.main('div', { ...attrs, class: `ghost ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `primary ghost ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `secondary ghost ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `contrast ghost ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `success ghost ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `info ghost ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `warning ghost ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `danger ghost ${_class || ''}` })}`);
}
