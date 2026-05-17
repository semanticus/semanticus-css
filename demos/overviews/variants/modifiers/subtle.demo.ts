import { renderElement } from "@scripts/utils";

import * as IntentDemo from '@demos/variants/intent/demo';
import { SubtleDemo } from '@demos/variants/modifiers';

export function buttons(attrs: Record<string, string> = {}) {
  return renderElement('section', {}, `${renderElement('div', {}, IntentDemo.buttons(attrs))}

<hr>

${renderElement('div', {}, SubtleDemo.buttons(attrs))}`);
}

export function inputButtons(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${renderElement('div', {}, IntentDemo.inputButtons(attrs))}
${renderElement('div', {}, SubtleDemo.inputButtons(attrs))}`);
}

export function roleButtonsAndDropdowns(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${renderElement('div', {}, IntentDemo.roleButtonsAndDropdowns(attrs))}

${renderElement('div', {}, SubtleDemo.roleButtonsAndDropdowns(attrs))}`);
}

export function roleButtons(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${renderElement('div', {}, IntentDemo.roleButtons(attrs))}

${renderElement('div', {}, SubtleDemo.roleButtons(attrs))}`);
}

export function dropdowns(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${renderElement('div', {}, IntentDemo.dropdowns(attrs))}

${renderElement('div', {}, SubtleDemo.dropdowns(attrs))}`);
}

export function cards(attrs: Record<string, string> = {}) {
  return renderElement('section', { role: 'toolbar' }, `${renderElement('div', {}, IntentDemo.cards(attrs))}

${renderElement('div', {}, SubtleDemo.cards(attrs))}`);
}
