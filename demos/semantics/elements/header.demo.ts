import * as NavDemo from "@demos/semantics/elements/nav.demo";
import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
	return renderElement("header", attrs, NavDemo.logoTaglineLinks());
}

export function withSearchDropdownAndLinks(attrs: Record<string, string> = {}) {
	return renderElement("header", attrs, NavDemo.searchDropdownAndLinks());
}
