import * as NavDemo from "@demos/semantics/elements/nav.demo";
import { renderElement } from "@demos/utils";

export function basic(attrs: Record<string, string> = {}) {
  return renderElement("aside", attrs, `<h4>BrandName</h4>
  <a href="#">Dashboard</a>`);
}

export function leftSidebar(attrs: Record<string, string> = {}) {
  return renderElement("aside", { ...attrs, class: `sidebar ${attrs.class || ""}`.trim() }, `<h4>Guide</h4>
  ${NavDemo.pagesLinks()}

  <a href="#" role="button" class="ghost">Support</a>`);
}

export function rightSidebar(attrs: Record<string, string> = {}) {
  return renderElement("aside", { ...attrs, class: `sidebar ${attrs.class || ""}`.trim() }, `<h4>On this page</h4>
  ${NavDemo.pageLinks()}`);
}
