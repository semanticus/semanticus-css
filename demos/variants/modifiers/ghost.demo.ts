import { renderElement, classMergeAttributes } from "@scripts/utils";
import { CardDemo, PaneDemo } from '@demos/components';
import { ButtonDemo, InputDemo } from '@demos/semantics/elements';
import { RoleButtonDemo, RoleStatusDemo } from '@demos/semantics/attributes';

function mergedAttrs(attrs: Record<string, string> = {}) {
  return classMergeAttributes('ghost', attrs);
}

export function main(tagName: string = 'div', attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, mergedAttrs(attrs), slot);
}

export function button(attrs: Record<string, string> = {}) {
  return ButtonDemo.main(mergedAttrs(attrs));
}

export function inputButtons(attrs: Record<string, string> = {}) {
  return InputDemo.buttons(mergedAttrs(attrs));
}

export function roleButton(tagName: string = "div", attrs: Record<string, string> = {}) {
  return RoleButtonDemo.main(tagName, mergedAttrs(attrs), `&lt;${tagName}&gt; as button`);
}

export function roleStatus(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return RoleStatusDemo.main(tagName, mergedAttrs(attrs), slot);
}

export function dropdown(attrs: Record<string, string> = {}) {
  return RoleButtonDemo.dropdown(mergedAttrs(attrs));
}

export function accordion(attrs: Record<string, string> = {}) {
  return RoleButtonDemo.accordion(mergedAttrs(attrs));
}

export function card(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardDemo.main(tagName, mergedAttrs(attrs));
}

export function pane(tagName: string = "div", attrs: Record<string, string> = {}) {
  return PaneDemo.main(tagName, mergedAttrs(attrs));
}

export function cardWithHeaderAndFooter(tagName: string = "div", attrs: Record<string, string> = {}) {
  return CardDemo.withHeaderAndFooter(tagName, mergedAttrs(attrs));
}

/* Overviews */

export function overview(attrs: Record<string, string> = {}) {
  return `${renderElement('nav', { role: 'toolbar' }, `${button(attrs)}

  ${roleButton('section', attrs)}

${dropdown(attrs)}`)}

<br>

${card('div', attrs)}

${cardWithHeaderAndFooter('div', attrs)}`;
}

export function overviewButtons(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', { role: 'toolbar' }, `${button(attrs)}
${button(classMergeAttributes('secondary', attrs))}
${button(classMergeAttributes('contrast', attrs))}
${button(classMergeAttributes('success', attrs))}
${button(classMergeAttributes('info', attrs))}
${button(classMergeAttributes('warning', attrs))}
${button(classMergeAttributes('danger', attrs))}`);
}

export function overviewInputButtons(attrs: Record<string, string> = {}) {
  return renderElement('section', {}, inputButtons(attrs));
}

export function overviewRoleButtonsAndDropdowns(attrs: Record<string, string> = {}) {
  return renderElement('section', {}, `${overviewRoleButtons(attrs)}

<hr>

${overviewDropdowns(attrs)}`);
}

export function overviewRoleButtons(attrs: Record<string, string> = {}) {
  return `${roleButton('section', attrs)}
${roleButton('section', classMergeAttributes('secondary', attrs))}
${roleButton('section', classMergeAttributes('contrast', attrs))}
${roleButton('section', classMergeAttributes('success', attrs))}
${roleButton('section', classMergeAttributes('info', attrs))}
${roleButton('section', classMergeAttributes('warning', attrs))}
${roleButton('section', classMergeAttributes('danger', attrs))}`;
}

export function overviewRoleStatuses(attrs: Record<string, string> = {}) {
  return `${roleStatus('section', classMergeAttributes('primary', attrs))}
${roleStatus('section', classMergeAttributes('secondary', attrs))}
${roleStatus('section', classMergeAttributes('contrast', attrs))}
${roleStatus('section', classMergeAttributes('success', attrs))}
${roleStatus('section', classMergeAttributes('info', attrs))}
${roleStatus('section', classMergeAttributes('warning', attrs))}
${roleStatus('section', classMergeAttributes('danger', attrs))}`;
}

export function overviewDropdowns(attrs: Record<string, string> = {}) {
  return `${dropdown(attrs)}
${dropdown(classMergeAttributes('secondary', attrs))}
${dropdown(classMergeAttributes('contrast', attrs))}
${dropdown(classMergeAttributes('success', attrs))}
${dropdown(classMergeAttributes('info', attrs))}
${dropdown(classMergeAttributes('warning', attrs))}
${dropdown(classMergeAttributes('danger', attrs))}`;
}

export function overviewAccordions(attrs: Record<string, string> = {}) {
  return `${accordion(attrs)}
${accordion(classMergeAttributes('secondary', attrs))}
${accordion(classMergeAttributes('contrast', attrs))}
${accordion(classMergeAttributes('success', attrs))}
${accordion(classMergeAttributes('info', attrs))}
${accordion(classMergeAttributes('warning', attrs))}
${accordion(classMergeAttributes('danger', attrs))}`;
}

export function overviewCards(attrs: Record<string, string> = {}) {
  return renderElement('section', {}, `${card('div', classMergeAttributes('primary', attrs))}
${card('div', classMergeAttributes('secondary', attrs))}
${card('div', classMergeAttributes('contrast', attrs))}
${card('div', classMergeAttributes('success', attrs))}
${card('div', classMergeAttributes('info', attrs))}
${card('div', classMergeAttributes('warning', attrs))}
${card('div', classMergeAttributes('danger', attrs))}`);
}

export function overviewCardsWithHeaderAndFooter(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${cardWithHeaderAndFooter('div', classMergeAttributes('primary', attrs))}
${cardWithHeaderAndFooter('div', classMergeAttributes('secondary', attrs))}
${cardWithHeaderAndFooter('div', classMergeAttributes('contrast', attrs))}
${cardWithHeaderAndFooter('div', classMergeAttributes('success', attrs))}
${cardWithHeaderAndFooter('div', classMergeAttributes('info', attrs))}
${cardWithHeaderAndFooter('div', classMergeAttributes('warning', attrs))}
${cardWithHeaderAndFooter('div', classMergeAttributes('danger', attrs))}`);
}

export function overviewPanes(attrs: Record<string, string> = {}) {
  return renderElement('section', {}, `${pane('div', classMergeAttributes('primary', attrs))}
${pane('div', classMergeAttributes('secondary', attrs))}
${pane('div', classMergeAttributes('contrast', attrs))}
${pane('div', classMergeAttributes('success', attrs))}
${pane('div', classMergeAttributes('info', attrs))}
${pane('div', classMergeAttributes('warning', attrs))}
${pane('div', classMergeAttributes('danger', attrs))}`);
}

export function overviewPanesWithHeaderAndFooter(_attrs: Record<string, string> = {}) {
  const { class: _class, ...attrs } = _attrs;

  return renderElement('section', {}, `${PaneDemo.withHeaderAndFooter('div', classMergeAttributes('primary', attrs))}
${PaneDemo.withHeaderAndFooter('div', classMergeAttributes('secondary', attrs))}
${PaneDemo.withHeaderAndFooter('div', classMergeAttributes('contrast', attrs))}
${PaneDemo.withHeaderAndFooter('div', classMergeAttributes('success', attrs))}
${PaneDemo.withHeaderAndFooter('div', classMergeAttributes('info', attrs))}
${PaneDemo.withHeaderAndFooter('div', classMergeAttributes('warning', attrs))}
${PaneDemo.withHeaderAndFooter('div', classMergeAttributes('danger', attrs))}`);
}
