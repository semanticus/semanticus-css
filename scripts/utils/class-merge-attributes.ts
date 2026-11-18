export function classMergeAttributes(cssClass: string, attrs: Record<string, string | undefined | null> = {}) {
  return { ...attrs, class: `${cssClass} ${attrs.class || ''}`.trim() };
}
