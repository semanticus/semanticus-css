import { renderElement } from "@scripts/utils";

export function main(tagName: string = "div", attrs: Record<string, string> = {}, slot: string = undefined) {
  const mergedAttrs = { ...attrs, "aria-disabled": "true" };

  return renderElement(tagName, mergedAttrs, slot || `Disabled ${tagName}`);
}

export function overview() {
  return renderElement('nav', { class: 'grid' }, `${main("button")}

<hr>

${main("button", { tabindex: "-1" }, 'unfocusable button')}

<hr>

${main("a", {}, "Disabled link")}`);
}
