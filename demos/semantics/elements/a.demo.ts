import {
  renderElement,
  renderAttributes,
  classMergeAttributes,
} from "@scripts/utils";

export function overview(attrs: Record<string, string> = {}) {
  return `${main(attrs)}
<hr>
${active(attrs)}`;
}

export function main(
  attrs: Record<string, string> = {},
  slot: string = "Regular Link",
) {
  const attributes = { href: "#", ...attrs };

  return `<a ${renderAttributes(attributes)}>${slot}</a>`;
}

export function active(
  attrs: Record<string, string> = {},
  slot: string = "Active link",
) {
  const attributes = { href: "#", "aria-current": "page", ...attrs };

  return `<a ${renderAttributes(attributes)}>${slot}</a>`;
}

export function intentVariants(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "auto-grid" },
    `${main(classMergeAttributes("primary", attrs), "Primary")}
${main(classMergeAttributes("secondary", attrs), "Secondary")}
${main(classMergeAttributes("contrast", attrs), "Contrast")}
${main(classMergeAttributes("success", attrs), "Success")}
${main(classMergeAttributes("info", attrs), "Info")}
${main(classMergeAttributes("warning", attrs), "Warning")}
${main(classMergeAttributes("danger", attrs), "Danger")}`,
  );
}

export function overviewStatesAndModifiers(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "auto-grid", style: "--auto-grid-min-column: 180px" },
    `${main({ ...attrs, "aria-disabled": "true" }, "ARIA Disabled")}
${main(attrs, "Primary")}
${main({ ...attrs, "aria-current": "false" }, "Not Current")}
${main({ ...attrs, "aria-current": "true" }, "Current")}

${main(classMergeAttributes("subtle", { ...attrs, "aria-disabled": "true" }), "Subtle ARIA Disabled")}
${main(classMergeAttributes("subtle", { ...attrs }), "Primary Subtle")}
${main(classMergeAttributes("subtle", { ...attrs, "aria-current": "false" }), "Subtle Not Current")}
${main(classMergeAttributes("subtle", { ...attrs, "aria-current": "true" }), "Subtle Current")}

${main(classMergeAttributes("ghost", { ...attrs, "aria-disabled": "true" }), "Ghost ARIA Disabled")}
${main(classMergeAttributes("ghost", { ...attrs }), "Primary Ghost")}
${main(classMergeAttributes("ghost", { ...attrs, "aria-current": "false" }), "Ghost Not Current")}
${main(classMergeAttributes("ghost", { ...attrs, "aria-current": "true" }), "Ghost Current")}
`,
  );
}
