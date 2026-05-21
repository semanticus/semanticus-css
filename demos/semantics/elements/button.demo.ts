import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}, slot: string = "Button") {
  return renderElement("button", { ...attrs }, slot);
}
