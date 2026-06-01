import { classMergeAttributes } from "./class-merge-attributes";
import { renderElement } from "./render-element";

export function renderGrid(slot: string, attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    classMergeAttributes("auto-grid", {
      ...attrs,
      style: "--auto-grid-min-column: 180px",
    }),
    slot,
  );
}
