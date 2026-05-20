import { renderElement } from "@scripts/utils";

import { SubtleDemo } from '@demos/variants/modifiers';

export function buttons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { role: 'toolbar' }, `${SubtleDemo.button({ ...attrs, class: `${_class || ''}` })}
${SubtleDemo.button({ ...attrs, class: `secondary ${_class || ''}` })}
${SubtleDemo.button({ ...attrs, class: `contrast ${_class || ''}` })}
${SubtleDemo.button({ ...attrs, class: `success ${_class || ''}` })}
${SubtleDemo.button({ ...attrs, class: `info ${_class || ''}` })}
${SubtleDemo.button({ ...attrs, class: `warning ${_class || ''}` })}
${SubtleDemo.button({ ...attrs, class: `danger ${_class || ''}` })}`);
}

export function inputButtons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, SubtleDemo.inputButtons({ ...attrs, class: `${_class || ''}` }));
}

export function roleButtonsAndDropdowns(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${roleButtons(attrs)}

<hr>

${dropdowns(attrs)}`);
}

export function roleButtons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${SubtleDemo.roleButton('section', { ...attrs, class: `${_class || ''}` })}
${SubtleDemo.roleButton('section', { ...attrs, class: `secondary ${_class || ''}` })}
${SubtleDemo.roleButton('section', { ...attrs, class: `contrast ${_class || ''}` })}
${SubtleDemo.roleButton('section', { ...attrs, class: `success ${_class || ''}` })}
${SubtleDemo.roleButton('section', { ...attrs, class: `info ${_class || ''}` })}
${SubtleDemo.roleButton('section', { ...attrs, class: `warning ${_class || ''}` })}
${SubtleDemo.roleButton('section', { ...attrs, class: `danger ${_class || ''}` })}`;
}

export function dropdowns(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${SubtleDemo.dropdown({ ...attrs, class: `${_class || ''}` })}
${SubtleDemo.dropdown({ ...attrs, class: `secondary ${_class || ''}` })}
${SubtleDemo.dropdown({ ...attrs, class: `contrast ${_class || ''}` })}
${SubtleDemo.dropdown({ ...attrs, class: `success ${_class || ''}` })}
${SubtleDemo.dropdown({ ...attrs, class: `info ${_class || ''}` })}
${SubtleDemo.dropdown({ ...attrs, class: `warning ${_class || ''}` })}
${SubtleDemo.dropdown({ ...attrs, class: `danger ${_class || ''}` })}`;
}

export function accordions(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return `${SubtleDemo.accordion({ ...attrs, class: `${_class || ''}` })}
${SubtleDemo.accordion({ ...attrs, class: `secondary ${_class || ''}` })}
${SubtleDemo.accordion({ ...attrs, class: `contrast ${_class || ''}` })}
${SubtleDemo.accordion({ ...attrs, class: `success ${_class || ''}` })}
${SubtleDemo.accordion({ ...attrs, class: `info ${_class || ''}` })}
${SubtleDemo.accordion({ ...attrs, class: `warning ${_class || ''}` })}
${SubtleDemo.accordion({ ...attrs, class: `danger ${_class || ''}` })}`;
}

export function cards(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${SubtleDemo.card('div', { ...attrs, class: `primary ${_class || ''}` })}
${SubtleDemo.card('div', { ...attrs, class: `secondary ${_class || ''}` })}
${SubtleDemo.card('div', { ...attrs, class: `contrast ${_class || ''}` })}
${SubtleDemo.card('div', { ...attrs, class: `success ${_class || ''}` })}
${SubtleDemo.card('div', { ...attrs, class: `info ${_class || ''}` })}
${SubtleDemo.card('div', { ...attrs, class: `warning ${_class || ''}` })}
${SubtleDemo.card('div', { ...attrs, class: `danger ${_class || ''}` })}`);
}

export function cardsWithHeaderAndFooter(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${SubtleDemo.cardWithHeaderAndFooter('div', { ...attrs, class: `primary ${_class || ''}` })}
${SubtleDemo.cardWithHeaderAndFooter('div', { ...attrs, class: `secondary ${_class || ''}` })}
${SubtleDemo.cardWithHeaderAndFooter('div', { ...attrs, class: `contrast ${_class || ''}` })}
${SubtleDemo.cardWithHeaderAndFooter('div', { ...attrs, class: `success ${_class || ''}` })}
${SubtleDemo.cardWithHeaderAndFooter('div', { ...attrs, class: `info ${_class || ''}` })}
${SubtleDemo.cardWithHeaderAndFooter('div', { ...attrs, class: `warning ${_class || ''}` })}
${SubtleDemo.cardWithHeaderAndFooter('div', { ...attrs, class: `danger ${_class || ''}` })}`);
}
