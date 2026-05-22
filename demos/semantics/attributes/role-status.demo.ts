import { renderElement, classMergeAttributes } from "@scripts/utils";
import { GhostDemo, SubtleDemo, IntentDemo } from '@demos/variants';

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "status" }, slot || `10 results found`);
}

export function withCloseButton(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "status" }, slot || `10 results found`);
}

export function intentVariants(attrs: Record<string, string> = {}, modifier: string = '') {
    return `${main('div', classMergeAttributes(`primary ${modifier}`.trim(), attrs), 'Primary')}
${main('div', classMergeAttributes(`secondary ${modifier}`.trim(), attrs), 'Secondary')}
${main('div', classMergeAttributes(`contrast ${modifier}`.trim(), attrs), 'Contrast')}
${main('div', classMergeAttributes(`success ${modifier}`.trim(), attrs), 'Success')}
${main('div', classMergeAttributes(`info ${modifier}`.trim(), attrs), 'Info')}
${main('div', classMergeAttributes(`warning ${modifier}`.trim(), attrs), 'Warning')}
${main('div', classMergeAttributes(`danger ${modifier}`.trim(), attrs), 'Danger')}`;
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'subtle');
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'ghost');
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<section class="mb-0" role="toolbar">
  ${main()}
  ${main('div', { class: 'subtle' })}
  ${main('div', { class: 'ghost' })}
</section>

<section role="toolbar">
  <div>
    ${intentVariants()}
  </div>

  <div>
    ${subtleVariants()}
  </div>

  <div>
    ${ghostVariants()}
  </div>
</section>`);
}
