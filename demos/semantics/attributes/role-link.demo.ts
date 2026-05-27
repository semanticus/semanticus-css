import {
  renderElement,
  renderAttributes,
  classMergeAttributes,
} from "@scripts/utils";

export function main(
  tagName: string = "button",
  attrs: Record<string, string> = {},
  slot: string = undefined,
) {
  const attributes = { role: "link", ...attrs };

  return `<${tagName} ${renderAttributes(attributes)}>${slot || `${tagName[0].toUpperCase() + tagName.slice(1)} Link`}</${tagName}>`;
}

export function overview(attrs: Record<string, string> = {}) {
  return `${main("button", attrs)}
<hr>
${active("button", attrs)}
<hr>
${main("div", attrs)}
<hr>
${active("div", attrs)}`;
}

export function active(
  tagName: string = "button",
  attrs: Record<string, string> = {},
  slot: string = undefined,
) {
  const attributes = { role: "link", "aria-current": "page", ...attrs };

  return `<${tagName} ${renderAttributes(attributes)}>${slot || `Active ${tagName}`}</${tagName}>`;
}

export function intentVariants(
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return renderElement(
    "section",
    { class: "auto-grid" },
    `${main("div", classMergeAttributes(`primary ${modifier}`.trim(), attrs), "Primary")}
${main("div", classMergeAttributes(`secondary ${modifier}`.trim(), attrs), "Secondary")}
${main("div", classMergeAttributes(`contrast ${modifier}`.trim(), attrs), "Contrast")}
${main("div", classMergeAttributes(`success ${modifier}`.trim(), attrs), "Success")}
${main("div", classMergeAttributes(`info ${modifier}`.trim(), attrs), "Info")}
${main("div", classMergeAttributes(`warning ${modifier}`.trim(), attrs), "Warning")}
${main("div", classMergeAttributes(`danger ${modifier}`.trim(), attrs), "Danger")}`,
  );
}

export function overviewStatesAndModifiers(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    { class: "auto-grid", style: "--auto-grid-min-column: 180px" },
    `${main("div", { ...attrs, "aria-disabled": "true" }, "ARIA Disabled")}
${main("div", attrs, "Primary")}
${main("div", { ...attrs, "aria-current": "false" }, "Not Current")}
${main("div", { ...attrs, "aria-current": "true" }, "Current")}

${main("div", classMergeAttributes("subtle", { ...attrs, "aria-disabled": "true" }), "Subtle ARIA Disabled")}
${main("div", classMergeAttributes("subtle", { ...attrs }), "Primary Subtle")}
${main("div", classMergeAttributes("subtle", { ...attrs, "aria-current": "false" }), "Subtle Not Current")}
${main("div", classMergeAttributes("subtle", { ...attrs, "aria-current": "true" }), "Subtle Current")}

${main("div", classMergeAttributes("ghost", { ...attrs, "aria-disabled": "true" }), "Ghost ARIA Disabled")}
${main("div", classMergeAttributes("ghost", { ...attrs }), "Primary Ghost")}
${main("div", classMergeAttributes("ghost", { ...attrs, "aria-current": "false" }), "Ghost Not Current")}
${main("div", classMergeAttributes("ghost", { ...attrs, "aria-current": "true" }), "Ghost Current")}
`,
  );
}
