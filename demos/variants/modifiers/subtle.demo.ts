import { renderElement } from "@scripts/utils";

function render(tagName: string, attrs: Record<string, string>, slot: string) {
  const attributes = { ...attrs };
  attributes.class = ['subtle', attrs.class].filter(Boolean).join(" ");

  return renderElement(tagName, attributes, slot);
}

export function button(attrs: Record<string, string> = {}, slot: string = "subtle button") {
  return render("button", attrs, slot);
}

export function panel(attrs: Record<string, string> = {}, slot: string = "subtle panel") {
  return render("div", { ...attrs, class: ['panel', attrs.class].filter(Boolean).join(" ") }, slot);
}
