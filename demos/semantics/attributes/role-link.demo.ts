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
  tagName: string = "button",
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return renderElement(
    "section",
    { class: "auto-grid" },
    `${main(tagName, classMergeAttributes(`primary ${modifier}`.trim(), attrs), `&lt;${tagName}&gt; as link`)}
${main(tagName, classMergeAttributes(`secondary ${modifier}`.trim(), attrs), `&lt;${tagName}&gt; as link`)}
${main(tagName, classMergeAttributes(`contrast ${modifier}`.trim(), attrs), `&lt;${tagName}&gt; as link`)}
${main(tagName, classMergeAttributes(`success ${modifier}`.trim(), attrs), `&lt;${tagName}&gt; as link`)}
${main(tagName, classMergeAttributes(`info ${modifier}`.trim(), attrs), `&lt;${tagName}&gt; as link`)}
${main(tagName, classMergeAttributes(`warning ${modifier}`.trim(), attrs), `&lt;${tagName}&gt; as link`)}
${main(tagName, classMergeAttributes(`danger ${modifier}`.trim(), attrs), `&lt;${tagName}&gt; as link`)}`,
  );
}

export function overviewStatesAndModifiers(
  tagName: string = "button",
  intent: string = "",
) {
  const namePrefix = `&lt;${tagName}&gt; as ${intent ? `${intent[0].toUpperCase() + intent.slice(1)}` : ""}`;

  return renderElement(
    "section",
    { class: "auto-grid", style: "--auto-grid-min-column: 180px" },
    `${main(tagName, { class: intent }, `${namePrefix} Link`)}
${main(tagName, { class: intent, "aria-current": "false" }, "Not Current")}
${main(tagName, { class: intent, "aria-current": "true" }, "Current")}
${main(tagName, { class: intent, "aria-disabled": "true" }, "ARIA Disabled")}

${main(tagName, classMergeAttributes("subtle", { class: intent }), `${namePrefix} Subtle Link`)}
${main(tagName, classMergeAttributes("subtle", { class: intent, "aria-current": "false" }), "Not Current Subtle")}
${main(tagName, classMergeAttributes("subtle", { class: intent, "aria-current": "true" }), "Current Subtle")}
${main(tagName, classMergeAttributes("subtle", { class: intent, "aria-disabled": "true" }), "ARIA Disabled Subtle")}

${main(tagName, classMergeAttributes("ghost", { class: intent }), `${namePrefix} Ghost Link`)}
${main(tagName, classMergeAttributes("ghost", { class: intent, "aria-current": "false" }), "Not Current Ghost")}
${main(tagName, classMergeAttributes("ghost", { class: intent, "aria-current": "true" }), "Current Ghost")}
${main(tagName, classMergeAttributes("ghost", { class: intent, "aria-disabled": "true" }), "ARIA Disabled Ghost")}
`,
  );
}
