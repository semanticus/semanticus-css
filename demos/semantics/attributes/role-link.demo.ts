import { renderAttributes } from "@scripts/utils";
import { unescape } from "querystring";

export function main(tagName: string = "button", attrs: Record<string, string> = {}, slot: string = undefined) {
  const attributes = { role: "link", ...attrs };

  return `<${tagName} ${renderAttributes(attributes)}>${slot || `&lt;${tagName}&gt; as a regular link`}</${tagName}>`;
}

export function active(tagName: string = "button", attrs: Record<string, string> = {}, slot: string = undefined) {
  const attributes = { role: "link", "aria-current": "page", ...attrs };

  return `<${tagName} ${renderAttributes(attributes)}>${slot || `&lt;${tagName}&gt; as an active link`}</${tagName}>`;
}
