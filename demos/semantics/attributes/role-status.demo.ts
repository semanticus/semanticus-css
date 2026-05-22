import { renderElement } from "@scripts/utils";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "status" }, slot || `10 results found`);
}
