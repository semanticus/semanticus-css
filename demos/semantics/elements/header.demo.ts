import * as NavDemo from "@demos/semantics/elements/nav.demo";
import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement("header", attrs, NavDemo.logoTaglineLinks());
}

export function withSearchAndDropdownExample(
  attrs: Record<string, string> = {},
) {
  return renderElement("header", attrs, NavDemo.searchAndDropdownExample());
}
