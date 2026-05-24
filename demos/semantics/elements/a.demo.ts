import { renderElement, renderAttributes, classMergeAttributes } from "@scripts/utils";

export function overview(attrs: Record<string, string> = {}) {
  return `${main(attrs)}
<hr>
${active(attrs)}`;
}

export function main(attrs: Record<string, string> = {}, slot: string = 'Regular Link') {
  const attributes = { href: "#", ...attrs };

  return `<a ${renderAttributes(attributes)}>${slot}</a>`;
}

export function active(attrs: Record<string, string> = {}, slot: string = 'Active link') {
  const attributes = { href: "#", "aria-current": "page", ...attrs };

  return `<a ${renderAttributes(attributes)}>${slot}</a>`;
}

export function intentVariants(attrs: Record<string, string> = {}) {
  return renderElement('section', { class: 'grid' }, `${main(classMergeAttributes('primary', attrs), 'Primary')}
${main(classMergeAttributes('secondary', attrs), 'Secondary')}
${main(classMergeAttributes('contrast', attrs), 'Contrast')}
${main(classMergeAttributes('success', attrs), 'Success')}
${main(classMergeAttributes('info', attrs), 'Info')}
${main(classMergeAttributes('warning', attrs), 'Warning')}
${main(classMergeAttributes('danger', attrs), 'Danger')}`);
}
