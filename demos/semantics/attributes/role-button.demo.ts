import { renderElement } from "@scripts/utils";

export function main(tagName: string = "div", attrs: Record<string, string> = {}) {
  return renderElement(tagName, { ...attrs, role: "button" }, `${tagName} as button`);
}
