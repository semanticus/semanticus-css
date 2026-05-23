import { renderElement, classMergeAttributes } from "@scripts/utils";

function renderLi(attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement('li', attrs, slot);
}

export function main(attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement('ul', { ...attrs, role: "group" }, slot || `<li>Item 1</li>
<li>Item 2</li>
<li aria-current="true">Item 3</li>
<li>Item 4</li>`);
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<section role="toolbar">
  ${listOfSeven()}
  ${stripedVariant()}
  ${intentVariants()}
  ${subtleVariants()}
  ${ghostVariants()}
  ${ghostVariants({ class: 'striped' })}
</section>`);
}

export function listOfSeven(attrs: Record<string, string> = {}) {
  return main(attrs, `<li>Item 1</li>
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
  return renderElement('ul', { ...attrs, role: "group" }, `${renderLi(classMergeAttributes(`primary ${modifier}`.trim()), 'Primary')}
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
