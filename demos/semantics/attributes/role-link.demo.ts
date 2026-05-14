import { renderElement } from "@scripts/utils";

export function main(tagName: string = "button", attrs: Record<string, string> = {}) {
  return renderElement(tagName, { ...attrs, role: "link" }, `${tagName} as link`);
}
