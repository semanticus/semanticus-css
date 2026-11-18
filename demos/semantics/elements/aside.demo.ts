import * as NavDemo from "@demos/semantics/elements/nav.demo";
import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement("aside", attrs, slot || `<strong>Title</strong>
<span>Description</span>`);
}

export function withFixedSize(attrs: Record<string, string> = {}, slot: string = "") {
  attrs.style ||= "height: 400px; width: 300px";

  return main(attrs, slot);
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

export function withDocsLinks(attrs: Record<string, string> = {}) {
  return main(attrs, `${NavDemo.docsLinks()}`);
}

