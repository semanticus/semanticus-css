import { renderElement } from "@scripts/utils";

import { CardDemo } from '@demos/components';
import { ButtonDemo, InputDemo } from '@demos/semantics/elements';
import { RoleButtonDemo } from '@demos/semantics/attributes';

export function buttons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { role: 'toolbar' }, `${ButtonDemo.main(attrs)}
${ButtonDemo.main({ ...attrs, class: `secondary ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `contrast ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `success ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `info ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `warning ${_class || ''}` })}
${ButtonDemo.main({ ...attrs, class: `danger ${_class || ''}` })}`);
}

export function inputButtons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, InputDemo.buttons(attrs));
}

export function roleButtonsAndDropdowns(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${roleButtons(attrs)}

<hr>

${dropdowns(attrs)}`);
}

export function roleButtons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${RoleButtonDemo.main('section', attrs, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `secondary ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `contrast ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `success ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `info ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `warning ${_class || ''}` }, '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', { ...attrs, class: `danger ${_class || ''}` }, '&lt;section&gt; as button')}`;
}

export function dropdowns(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${RoleButtonDemo.dropdown(attrs)}
${RoleButtonDemo.dropdown({ ...attrs, class: `secondary ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `contrast ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `success ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `info ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `warning ${_class || ''}` })}
${RoleButtonDemo.dropdown({ ...attrs, class: `danger ${_class || ''}` })}`;
}

export function accordions(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${RoleButtonDemo.accordion(attrs)}
${RoleButtonDemo.accordion({ ...attrs, class: `secondary ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `contrast ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `success ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `info ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `warning ${_class || ''}` })}
${RoleButtonDemo.accordion({ ...attrs, class: `danger ${_class || ''}` })}`;
}

export function cards(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${CardDemo.main('div', attrs)}
${CardDemo.main('div', { ...attrs, class: `primary ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `secondary ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `contrast ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `success ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `info ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `warning ${_class || ''}` })}
${CardDemo.main('div', { ...attrs, class: `danger ${_class || ''}` })}`);
}
