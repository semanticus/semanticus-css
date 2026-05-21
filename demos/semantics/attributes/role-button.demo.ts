import { renderElement } from "@scripts/utils";
import * as DetailsDemo from "../elements/details.demo";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = '') {
  return renderElement(tagName, { ...attrs, role: "button" }, slot || `${tagName} as button`);
}

export function dropdown(attrs: Record<string, string> = {}) {
  return DetailsDemo.dropdownAsButton(attrs);
}

export function accordion(attrs: Record<string, string> = {}, slot: string = '') {
  return DetailsDemo.asButton(attrs);
}
