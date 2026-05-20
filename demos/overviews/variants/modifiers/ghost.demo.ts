import { renderElement } from "@scripts/utils";

import { GhostDemo } from '@demos/variants/modifiers';

export function buttons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { role: 'toolbar' }, `${GhostDemo.button({ ...attrs, class: `${_class || ''}` })}
${GhostDemo.button({ ...attrs, class: `secondary ${_class || ''}` })}
${GhostDemo.button({ ...attrs, class: `contrast ${_class || ''}` })}
${GhostDemo.button({ ...attrs, class: `success ${_class || ''}` })}
${GhostDemo.button({ ...attrs, class: `info ${_class || ''}` })}
${GhostDemo.button({ ...attrs, class: `warning ${_class || ''}` })}
${GhostDemo.button({ ...attrs, class: `danger ${_class || ''}` })}`);
}

export function inputButtons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, GhostDemo.inputButtons({ ...attrs, class: `${_class || ''}` }));
}

export function roleButtonsAndDropdowns(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${roleButtons(attrs)}

<hr>

${dropdowns(attrs)}`);
}

export function roleButtons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${GhostDemo.roleButton('section', { ...attrs, class: `${_class || ''}` }, '&lt;section&gt; as button')}
${GhostDemo.roleButton('section', { ...attrs, class: `secondary ${_class || ''}` }, '&lt;section&gt; as button')}
${GhostDemo.roleButton('section', { ...attrs, class: `contrast ${_class || ''}` }, '&lt;section&gt; as button')}
${GhostDemo.roleButton('section', { ...attrs, class: `success ${_class || ''}` }, '&lt;section&gt; as button')}
${GhostDemo.roleButton('section', { ...attrs, class: `info ${_class || ''}` }, '&lt;section&gt; as button')}
${GhostDemo.roleButton('section', { ...attrs, class: `warning ${_class || ''}` }, '&lt;section&gt; as button')}
${GhostDemo.roleButton('section', { ...attrs, class: `danger ${_class || ''}` }, '&lt;section&gt; as button')}`;
}

export function dropdowns(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${GhostDemo.dropdown({ ...attrs, class: `${_class || ''}` })}
${GhostDemo.dropdown({ ...attrs, class: `secondary ${_class || ''}` })}
${GhostDemo.dropdown({ ...attrs, class: `contrast ${_class || ''}` })}
${GhostDemo.dropdown({ ...attrs, class: `success ${_class || ''}` })}
${GhostDemo.dropdown({ ...attrs, class: `info ${_class || ''}` })}
${GhostDemo.dropdown({ ...attrs, class: `warning ${_class || ''}` })}
${GhostDemo.dropdown({ ...attrs, class: `danger ${_class || ''}` })}`;
}

export function accordions(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${GhostDemo.accordion({ ...attrs, class: `${_class || ''}` })}
${GhostDemo.accordion({ ...attrs, class: `secondary ${_class || ''}` })}
${GhostDemo.accordion({ ...attrs, class: `contrast ${_class || ''}` })}
${GhostDemo.accordion({ ...attrs, class: `success ${_class || ''}` })}
${GhostDemo.accordion({ ...attrs, class: `info ${_class || ''}` })}
${GhostDemo.accordion({ ...attrs, class: `warning ${_class || ''}` })}
${GhostDemo.accordion({ ...attrs, class: `danger ${_class || ''}` })}`;
}

export function cards(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${GhostDemo.card('div', { ...attrs, class: `${_class || ''}` })}
${GhostDemo.card('div', { ...attrs, class: `primary ${_class || ''}` })}
${GhostDemo.card('div', { ...attrs, class: `secondary ${_class || ''}` })}
${GhostDemo.card('div', { ...attrs, class: `contrast ${_class || ''}` })}
${GhostDemo.card('div', { ...attrs, class: `success ${_class || ''}` })}
${GhostDemo.card('div', { ...attrs, class: `info ${_class || ''}` })}
${GhostDemo.card('div', { ...attrs, class: `warning ${_class || ''}` })}
${GhostDemo.card('div', { ...attrs, class: `danger ${_class || ''}` })}`);
}
