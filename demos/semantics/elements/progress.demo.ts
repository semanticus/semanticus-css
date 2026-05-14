import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement("progress", { value: "50", max: "100", ...attrs }, '&nbsp;');
}

export function indeterminate(attrs: Record<string, string> = {}) {
  return renderElement("progress", attrs, '&nbsp;');
}

export function withLabel(attrs: Record<string, string> = {}) {
  return renderElement("label", {}, `Upload progress
${renderElement("progress", { value: "50", max: "100", ...attrs }, "50%")}`);
}
