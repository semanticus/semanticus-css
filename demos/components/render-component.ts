import { renderElement } from "@scripts/utils";

export function renderComponent(tagName: string, componentClass: string, attrs: Record<string, string>, slot: string) {
  const attributes = { ...attrs };
  attributes.class = [componentClass, attrs.class].filter(Boolean).join(" ");

  return renderElement(tagName, attributes, slot);
}
