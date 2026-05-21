import { renderElement } from "@scripts/utils";

export function main(tagName: string = "div", _attrs: Record<string, string> = {}, slot: string = undefined) {
  const attrs = { ..._attrs, "aria-disabled": "true" };

  return renderElement(tagName, attrs, slot || `Disabled ${tagName}`);
}

export function overview() {
  return renderElement('nav', { role: 'toolbar' }, `${main("button")}

${main("button", { tabindex: "-1" }, 'unfocusable button')}

${main("a", {}, "Disabled link")}`);
}
