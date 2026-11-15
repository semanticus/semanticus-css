import * as NavDemo from "@demos/semantics/elements/nav.demo";
import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement("footer", attrs, `<strong>Acme Corp</strong>

<p>&copy; all rights reserved.</p>

<nav>
  <a href="#contact">Contact Us</a>
</nav>`);
}
