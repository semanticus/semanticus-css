import { renderAttributes } from "./render-attributes";

function sanitizeNewLines(str: string): string {
  return `\n${str.replace(/^\n*(.*)\n*$/, "$1")}\n`;
}

function ident(str: string, spaces: number): string {
  return str.replace(/^/gm, " ".repeat(spaces));
}

export function renderElement(
  tagName: string,
  attrs: Record<string, string>,
  slot?: string,
): string {
  const content = slot?.length > 0 ? sanitizeNewLines(ident(slot, 2)) : slot;

  // This is necessary for self-closing tags like <img> or <input>. If there is no content, we can render it as a self-closing tag.
  if (content === undefined) {
    return `<${tagName}${renderAttributes(attrs)} />`;
  }

  return `<${tagName}${renderAttributes(attrs)}>${content}</${tagName}>`;
}
