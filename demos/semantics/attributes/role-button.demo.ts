import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as DetailsDemo from "@demos/semantics/elements/details.demo";
import * as DropdownDemo from "@demos/composites/dropdown.demo";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "button" }, slot || `${tagName} as button`);
}

export function dropdown(attrs: Record<string, string> = {}) {
  return DropdownDemo.asButton(attrs);
}

export function accordion(attrs: Record<string, string> = {}, slot: string = '') {
  return DetailsDemo.asButton(attrs);
}

export function intentVariants(attrs: Record<string, string> = {}, modifier: string = '') {
    return `${main('section', classMergeAttributes(`primary ${modifier}`.trim(), attrs), '&lt;section&gt; as button')}
${main('section', classMergeAttributes(`secondary ${modifier}`.trim(), attrs), '&lt;section&gt; as button')}
${main('section', classMergeAttributes(`contrast ${modifier}`.trim(), attrs), '&lt;section&gt; as button')}
${main('section', classMergeAttributes(`success ${modifier}`.trim(), attrs), '&lt;section&gt; as button')}
${main('section', classMergeAttributes(`info ${modifier}`.trim(), attrs), '&lt;section&gt; as button')}
${main('section', classMergeAttributes(`warning ${modifier}`.trim(), attrs), '&lt;section&gt; as button')}
${main('section', classMergeAttributes(`danger ${modifier}`.trim(), attrs), '&lt;section&gt; as button')}`;
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'subtle');
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, 'ghost');
}

export function accordionIntentVariants(attrs: Record<string, string> = {}, modifier: string = '') {
  return `${accordion(classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
${accordion(classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
${accordion(classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
${accordion(classMergeAttributes(`success ${modifier}`.trim(), attrs))}
${accordion(classMergeAttributes(`info ${modifier}`.trim(), attrs))}
${accordion(classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
${accordion(classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`;
}

export function accordionSubtleVariants(attrs: Record<string, string> = {}) {
  return accordionIntentVariants(attrs, 'subtle');
}

export function accordionGhostVariants(attrs: Record<string, string> = {}) {
  return accordionIntentVariants(attrs, 'ghost');
}
