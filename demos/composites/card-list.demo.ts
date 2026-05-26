import { renderElement, classMergeAttributes } from "@scripts/utils";

function renderLi(attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement('li', attrs, slot);
}

export function main(tagName: string = 'div', attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, classMergeAttributes('card', attrs), slot);
}

export function unorderedList(attrs: Record<string, string> = {}, slot: string = '') {
  return main('ul', attrs, slot || `<li>Item 1</li>
<li>Item 2</li>
<li aria-current="true">Item 3</li>
<li>Item 4</li>`);
}

export function divs(attrs: Record<string, string> = {}, slot: string = '') {
  return main('div', { role: 'list', ...attrs }, slot || `<div>Item 1</div>
<div aria-current="true"><p>Item 2</p></div>
<div>Item 3</div>
<div>Item 4</div>`);
}

export function overview(attrs: Record<string, string> = {}) {
  return renderElement('section', { class: 'auto-grid' }, `${unorderedList(attrs)}

${divs(attrs)}`);
}

export function overviewHorizontalStack(attrs: Record<string, string> = {}) {
  return `${divs({ ...attrs, role: 'group' })}`;
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<section class="auto-grid">
  ${listOfSeven()}
  ${stripedVariant()}
  ${intentVariants()}
  ${subtleVariants()}
  ${ghostVariants()}
  ${ghostVariants({ class: 'striped' })}
</section>`);
}

export function listOfSeven(attrs: Record<string, string> = {}) {
  return unorderedList(attrs, `<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>
<li>Item 5</li>
<li>Item 6</li>
<li>Item 7</li>`);
}

export function stripedVariant(attrs: Record<string, string> = {}) {
  return listOfSeven(classMergeAttributes('striped', attrs));
}

export function intentVariants(attrs: Record<string, string> = {}, modifier: string = '') {
  return unorderedList(attrs, `${renderLi(classMergeAttributes(`primary ${modifier}`.trim()), 'Primary')}
${renderLi(classMergeAttributes(`secondary ${modifier}`.trim()), 'Secondary')}
${renderLi(classMergeAttributes(`contrast ${modifier}`.trim()), 'Contrast')}
${renderLi(classMergeAttributes(`success ${modifier}`.trim()), 'Success')}
${renderLi(classMergeAttributes(`info ${modifier}`.trim()), 'Info')}
${renderLi(classMergeAttributes(`warning ${modifier}`.trim()), 'Warning')}
${renderLi(classMergeAttributes(`danger ${modifier}`.trim()), 'Danger')}`);
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'subtle');
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'ghost');
}
