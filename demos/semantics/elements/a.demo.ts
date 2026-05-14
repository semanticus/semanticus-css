import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement("a", { href: "#", ...attrs }, 'Regular link');
}

export function active(attrs: Record<string, string> = {}) {
  return renderElement("a", { href: "#", "aria-current": "page", ...attrs }, 'Active link');
}
