import { renderElement, classMergeAttributes } from "@scripts/utils";
import { CardDemo } from '@demos/components';
import { ADemo, ButtonDemo, InputDemo } from '@demos/semantics/elements';
import { RoleLinkDemo, RoleButtonDemo, RoleStatusDemo } from '@demos/semantics/attributes';

/* Overviews */

export function overviewButtons(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${ButtonDemo.main(classMergeAttributes('primary', attrs))}
${ButtonDemo.main(classMergeAttributes('secondary', attrs))}
${ButtonDemo.main(classMergeAttributes('contrast', attrs))}
${ButtonDemo.main(classMergeAttributes('success', attrs))}
${ButtonDemo.main(classMergeAttributes('info', attrs))}
${ButtonDemo.main(classMergeAttributes('warning', attrs))}
${ButtonDemo.main(classMergeAttributes('danger', attrs))}`);
}

export function overviewInputButtons(attrs: Record<string, string> = {}) {
  return renderElement('section', {}, InputDemo.buttons(attrs));
}

export function overviewRoleButtonsAndDropdowns(attrs: Record<string, string> = {}) {
  return renderElement('section', {}, `${overviewRoleButtons(attrs)}

<hr>

${overviewDropdowns(attrs)}`);
}

export function overviewRoleButtons(attrs: Record<string, string> = {}) {
  return `${RoleButtonDemo.main('section', classMergeAttributes('primary', attrs), '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', classMergeAttributes('secondary', attrs), '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', classMergeAttributes('contrast', attrs), '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', classMergeAttributes('success', attrs), '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', classMergeAttributes('info', attrs), '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', classMergeAttributes('warning', attrs), '&lt;section&gt; as button')}
${RoleButtonDemo.main('section', classMergeAttributes('danger', attrs), '&lt;section&gt; as button')}`;
}

export function overviewDropdowns(attrs: Record<string, string> = {}) {
  return `${RoleButtonDemo.dropdown(classMergeAttributes('primary', attrs))}
${RoleButtonDemo.dropdown(classMergeAttributes('secondary', attrs))}
${RoleButtonDemo.dropdown(classMergeAttributes('contrast', attrs))}
${RoleButtonDemo.dropdown(classMergeAttributes('success', attrs))}
${RoleButtonDemo.dropdown(classMergeAttributes('info', attrs))}
${RoleButtonDemo.dropdown(classMergeAttributes('warning', attrs))}
${RoleButtonDemo.dropdown(classMergeAttributes('danger', attrs))}`;
}

export function overviewAccordions(attrs: Record<string, string> = {}) {
  return `${RoleButtonDemo.accordion(classMergeAttributes('primary', attrs))}
${RoleButtonDemo.accordion(classMergeAttributes('secondary', attrs))}
${RoleButtonDemo.accordion(classMergeAttributes('contrast', attrs))}
${RoleButtonDemo.accordion(classMergeAttributes('success', attrs))}
${RoleButtonDemo.accordion(classMergeAttributes('info', attrs))}
${RoleButtonDemo.accordion(classMergeAttributes('warning', attrs))}
${RoleButtonDemo.accordion(classMergeAttributes('danger', attrs))}`;
}

export function overviewCards(attrs: Record<string, string> = {}) {
  return renderElement('section', {}, `${CardDemo.main('div', classMergeAttributes('primary', attrs))}
${CardDemo.main('div', classMergeAttributes('secondary', attrs))}
${CardDemo.main('div', classMergeAttributes('contrast', attrs))}
${CardDemo.main('div', classMergeAttributes('success', attrs))}
${CardDemo.main('div', classMergeAttributes('info', attrs))}
${CardDemo.main('div', classMergeAttributes('warning', attrs))}
${CardDemo.main('div', classMergeAttributes('danger', attrs))}`);
}

export function overviewCardsWithHeaderAndFooter(attrs: Record<string, string> = {}) {
  return renderElement('section', {}, `${CardDemo.withHeaderAndFooter('div', classMergeAttributes('primary', attrs))}
${CardDemo.withHeaderAndFooter('div', classMergeAttributes('secondary', attrs))}
${CardDemo.withHeaderAndFooter('div', classMergeAttributes('contrast', attrs))}
${CardDemo.withHeaderAndFooter('div', classMergeAttributes('success', attrs))}
${CardDemo.withHeaderAndFooter('div', classMergeAttributes('info', attrs))}
${CardDemo.withHeaderAndFooter('div', classMergeAttributes('warning', attrs))}
${CardDemo.withHeaderAndFooter('div', classMergeAttributes('danger', attrs))}`);
}

export function overviewAnchorsAndRoleLinks(attrs: Record<string, string> = {}) {
  return `${overviewAnchors(attrs)}

<hr>

${overviewRoleLinks(attrs)}`;
}

export function overviewAnchors(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${ADemo.main(classMergeAttributes('primary', attrs), 'Primary')}
${ADemo.main(classMergeAttributes('secondary', attrs), 'Secondary')}
${ADemo.main(classMergeAttributes('contrast', attrs), 'Contrast')}
${ADemo.main(classMergeAttributes('success', attrs), 'Success')}
${ADemo.main(classMergeAttributes('info', attrs), 'Info')}
${ADemo.main(classMergeAttributes('warning', attrs), 'Warning')}
${ADemo.main(classMergeAttributes('danger', attrs), 'Danger')}`);
}

export function overviewRoleLinks(attrs: Record<string, string> = {}) {
    return renderElement('section', { role: 'toolbar' }, `${RoleLinkDemo.main('div', classMergeAttributes('primary', attrs), 'Primary')}
${RoleLinkDemo.main('div', classMergeAttributes('secondary', attrs), 'Secondary')}
${RoleLinkDemo.main('div', classMergeAttributes('contrast', attrs), 'Contrast')}
${RoleLinkDemo.main('div', classMergeAttributes('success', attrs), 'Success')}
${RoleLinkDemo.main('div', classMergeAttributes('info', attrs), 'Info')}
${RoleLinkDemo.main('div', classMergeAttributes('warning', attrs), 'Warning')}
${RoleLinkDemo.main('div', classMergeAttributes('danger', attrs), 'Danger')}`);
}

export function overviewRoleStatuses(attrs: Record<string, string> = {}) {
    return `${RoleStatusDemo.main('div', classMergeAttributes('primary', attrs), 'Primary')}
${RoleStatusDemo.main('div', classMergeAttributes('secondary', attrs), 'Secondary')}
${RoleStatusDemo.main('div', classMergeAttributes('contrast', attrs), 'Contrast')}
${RoleStatusDemo.main('div', classMergeAttributes('success', attrs), 'Success')}
${RoleStatusDemo.main('div', classMergeAttributes('info', attrs), 'Info')}
${RoleStatusDemo.main('div', classMergeAttributes('warning', attrs), 'Warning')}
${RoleStatusDemo.main('div', classMergeAttributes('danger', attrs), 'Danger')}`;
}
