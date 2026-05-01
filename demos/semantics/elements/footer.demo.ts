import * as NavDemo from "@demos/semantics/elements/nav.demo";
import { renderElement } from "@demos/utils";

export function basic(attrs: Record<string, string> = {}) {
  return renderElement("footer", attrs, NavDemo.copyrightAndContactUs());
}
