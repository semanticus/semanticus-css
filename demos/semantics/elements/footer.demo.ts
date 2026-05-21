import * as NavDemo from "@demos/semantics/elements/nav.demo";
import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
	return renderElement("footer", attrs, NavDemo.copyrightAndContactUs());
}
