import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}, slot: string = "Button") {
  return renderElement("button", attrs, slot);
}

export function overviewCloseButton() {
  return `${closeButton()}

<hr>

${closeButton({ class: "secondary" }, "Close")}`;
}

export function closeButton(attrs: Record<string, string> = {}, text: string = "") {
  const mergedAttrs = { "aria-label": "Close", ...attrs };

  if (text) {
    return renderElement("button", mergedAttrs, `${text} <span class="icon-close" aria-hidden="true"></span>`);
  }

  return renderElement("button", { ...mergedAttrs, class: `icon-close ${attrs.class || ""}`.trim() });
}
