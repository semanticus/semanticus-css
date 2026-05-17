import { renderElement } from "@scripts/utils";

import * as IntentDemo from '@demos/variants/intent/demo';
import { GhostDemo } from '@demos/variants/modifiers';

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('section', {}, `${renderElement('div', {}, IntentDemo.buttons(attrs))}

<hr>

${renderElement('div', {}, GhostDemo.buttons(attrs))}`);
}

export function inputButtons(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${renderElement('div', {}, IntentDemo.inputButtons(attrs))}
${renderElement('div', {}, GhostDemo.inputButtons(attrs))}`);
}

export function roleButtonsAndDropdowns(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${renderElement('div', {}, IntentDemo.roleButtonsAndDropdowns(attrs))}

${renderElement('div', {}, GhostDemo.roleButtonsAndDropdowns(attrs))}`);
}

export function roleButtons(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${renderElement('div', {}, IntentDemo.roleButtons(attrs))}

${renderElement('div', {}, GhostDemo.roleButtons(attrs))}`);
}

export function dropdowns(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${renderElement('div', {}, IntentDemo.dropdowns(attrs))}

${renderElement('div', {}, GhostDemo.dropdowns(attrs))}`);
}

export function cards(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${renderElement('div', {}, IntentDemo.cards(attrs))}

${renderElement('div', {}, GhostDemo.cards(attrs))}`);
}
