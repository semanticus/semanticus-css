import { renderElement } from "@scripts/utils";
import { DetailsDemo } from "@demos/semantics";
import { DropdownDemo } from "@demos/composites";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "button" }, slot || `${tagName} as button`);
}

export function dropdown(attrs: Record<string, string> = {}) {
  return DropdownDemo.asButton(attrs);
}

export function accordion(attrs: Record<string, string> = {}, slot: string = '') {
  return DetailsDemo.asButton(attrs);
}
