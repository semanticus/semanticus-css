import { renderAttributes } from "@scripts/utils";

export function main(tagName: string = "button", attrs: Record<string, string> = {}, slot: string = undefined) {
  const attributes = { role: "link", ...attrs };

  return `<${tagName} ${renderAttributes(attributes)}>${slot || `${tagName[0].toUpperCase() + tagName.slice(1)} Link`}</${tagName}>`;
}

export function active(tagName: string = "button", attrs: Record<string, string> = {}, slot: string = undefined) {
  const attributes = { role: "link", "aria-current": "page", ...attrs };

  return `<${tagName} ${renderAttributes(attributes)}>${slot || `Active ${tagName}`}</${tagName}>`;
}
