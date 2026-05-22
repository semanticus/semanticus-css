export function classMergeAttributes(cssClass: string, attrs: Record<string, string> = {}) {
  return { ...attrs, class: `${cssClass} ${attrs.class || ''}`.trim() };
}
