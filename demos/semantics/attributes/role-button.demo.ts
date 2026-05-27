import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  return renderElement(
    tagName,
    { ...attrs, role: "button" },
    slot || `${tagName} as button`,
  );
}

export function intentVariants(
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return `${main("section", classMergeAttributes(`primary ${modifier}`.trim(), attrs), "&lt;section&gt; as button")}
${main("section", classMergeAttributes(`secondary ${modifier}`.trim(), attrs), "&lt;section&gt; as button")}
${main("section", classMergeAttributes(`contrast ${modifier}`.trim(), attrs), "&lt;section&gt; as button")}
${main("section", classMergeAttributes(`success ${modifier}`.trim(), attrs), "&lt;section&gt; as button")}
${main("section", classMergeAttributes(`info ${modifier}`.trim(), attrs), "&lt;section&gt; as button")}
${main("section", classMergeAttributes(`warning ${modifier}`.trim(), attrs), "&lt;section&gt; as button")}
${main("section", classMergeAttributes(`danger ${modifier}`.trim(), attrs), "&lt;section&gt; as button")}`;
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, "subtle");
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, "ghost");
}

export function overviewStatesAndModifiers(
  tagName: string = "div",
  attrs: Record<string, string> = {},
) {
  return renderElement(
    "section",
    { class: "auto-grid", style: "--auto-grid-min-column: 180px" },
    `${main(tagName, { ...attrs, disabled: "true" }, "Disabled")}
${main(tagName, attrs, "Primary")}
${main(tagName, { ...attrs, "aria-current": "false" }, "Not Current")}
${main(tagName, { ...attrs, "aria-current": "true" }, "Current")}

${main(tagName, classMergeAttributes("subtle", { ...attrs, disabled: "true" }), "Subtle Disabled")}
${main(tagName, classMergeAttributes("subtle", { ...attrs }), "Primary Subtle")}
${main(tagName, classMergeAttributes("subtle", { ...attrs, "aria-current": "false" }), "Subtle Not Current")}
${main(tagName, classMergeAttributes("subtle", { ...attrs, "aria-current": "true" }), "Subtle Current")}

${main(tagName, classMergeAttributes("ghost", { ...attrs, disabled: "true" }), "Ghost Disabled")}
${main(tagName, classMergeAttributes("ghost", { ...attrs }), "Primary Ghost")}
${main(tagName, classMergeAttributes("ghost", { ...attrs, "aria-current": "false" }), "Ghost Not Current")}
${main(tagName, classMergeAttributes("ghost", { ...attrs, "aria-current": "true" }), "Ghost Current")}
`,
  );
}
