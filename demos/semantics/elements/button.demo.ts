import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(
  attrs: Record<string, string> = {},
  slot: string = "Button",
) {
  return renderElement("button", attrs, slot);
}

export function overviewCloseButton() {
  return `${closeButton()}

<hr>

${closeButton({ class: "secondary" }, "Close")}`;
}

export function closeButton(
  attrs: Record<string, string> = {},
  text: string = "",
) {
  const mergedAttrs = { "aria-label": "Close", ...attrs };

  if (text) {
    return renderElement(
      "button",
      mergedAttrs,
      `${text} <span class="icon-close" aria-hidden="true"></span>`,
    );
  }

  return renderElement(
    "button",
    { ...mergedAttrs, class: `icon-close ${attrs.class || ""}`.trim() },
    "",
  );
}

export function intentVariants(
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return renderElement(
    "section",
    { class: "auto-grid" },
    `${main(classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
${main(classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
${main(classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
${main(classMergeAttributes(`success ${modifier}`.trim(), attrs))}
${main(classMergeAttributes(`info ${modifier}`.trim(), attrs))}
${main(classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
${main(classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`,
  );
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, "subtle");
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, "ghost");
}

export function overviewStatesAndModifiers(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "auto-grid", style: "--auto-grid-min-column: 180px" },
    `${main({ ...attrs, disabled: "true" }, "Disabled")}
${main(attrs, "Primary")}
${main({ ...attrs, "aria-current": "false" }, "Not Current")}
${main({ ...attrs, "aria-current": "true" }, "Current")}

${main(classMergeAttributes("subtle", { ...attrs, disabled: "true" }), "Subtle Disabled")}
${main(classMergeAttributes("subtle", { ...attrs }), "Primary Subtle")}
${main(classMergeAttributes("subtle", { ...attrs, "aria-current": "false" }), "Subtle Not Current")}
${main(classMergeAttributes("subtle", { ...attrs, "aria-current": "true" }), "Subtle Current")}

${main(classMergeAttributes("ghost", { ...attrs, disabled: "true" }), "Ghost Disabled")}
${main(classMergeAttributes("ghost", { ...attrs }), "Primary Ghost")}
${main(classMergeAttributes("ghost", { ...attrs, "aria-current": "false" }), "Ghost Not Current")}
${main(classMergeAttributes("ghost", { ...attrs, "aria-current": "true" }), "Ghost Current")}
`,
  );
}
