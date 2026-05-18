import { renderElement } from "@scripts/utils";

export function main(tagName: string = "button", attrs: Record<string, string> = {}) {
  return renderElement(tagName, { ...attrs, role: "link" }, `${tagName} as link`);
}

export function active(tagName: string = "button", attrs: Record<string, string> = {}) {
  return renderElement(tagName, { ...attrs, "aria-current": "page", role: "link" }, `${tagName} as an active link`);
}
