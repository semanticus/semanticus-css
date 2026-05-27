import { renderElement } from "./render-element";

export function renderGrid(slot: string) {
  return renderElement(
    "section",
    { class: "auto-grid", style: "--auto-grid-min-column: 180px" },
    slot,
  );
}
