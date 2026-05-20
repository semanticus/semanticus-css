import { renderAttributes } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}, slot: string = 'Regular Link') {
  const attributes = { href: "#", ...attrs };

  return `<a ${renderAttributes(attributes)}>${slot}</a>`;
}

export function active(attrs: Record<string, string> = {}, slot: string = 'Active link') {
  const attributes = { href: "#", "aria-current": "page", ...attrs };

  return `<a ${renderAttributes(attributes)}>${slot}</a>`;
}
