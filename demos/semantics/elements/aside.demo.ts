import * as NavDemo from "@demos/semantics/elements/nav.demo";
import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement("aside", attrs, slot || `<h4>BrandName</h4>
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

export function sidebarWithFixedSize(attrs: Record<string, string> = {}, slot: string = "") {
  const { height = "300px", width = "200px", ...rest } = attrs;

  return main(classMergeAttributes("", { ...rest, style: `height: ${height}; width: ${width}` }), slot);
}
