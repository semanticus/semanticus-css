import {
  renderElement,
  renderGrid,
  renderAttributes,
  classMergeAttributes,
} from "@scripts/utils";

export function main(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  return renderElement(
    tagName,
    { ...attrs, role: "link" },
    slot || `&lt;${tagName}&gt; as link`,
  );
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
    `${main(tagName, classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
${main(tagName, classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
${main(tagName, classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
${main(tagName, classMergeAttributes(`success ${modifier}`.trim(), attrs))}
${main(tagName, classMergeAttributes(`info ${modifier}`.trim(), attrs))}
${main(tagName, classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
${main(tagName, classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`,
  );
}

export function overviewStatesAndModifiers(
  tagName: string = "button",
  intent: string = "",
) {
  const namePrefix = `&lt;${tagName}&gt; as ${intent ? `${intent[0].toUpperCase() + intent.slice(1)}` : ""}`;

  return `${renderGrid(
    `${main(tagName, { class: intent }, `${namePrefix} Link`)}
${main(tagName, { class: intent, "aria-current": "false" }, "Not Current")}
${main(tagName, { class: intent, "aria-current": "true" }, "Current")}
${main(tagName, { class: intent, disabled: "true" }, "Disabled")}`,
  )}

${renderGrid(
  `${main(tagName, classMergeAttributes("subtle", { class: intent }), `${namePrefix} Subtle Link`)}
${main(tagName, classMergeAttributes("subtle", { class: intent, "aria-current": "false" }), "Not Current Subtle")}
${main(tagName, classMergeAttributes("subtle", { class: intent, "aria-current": "true" }), "Current Subtle")}
${main(tagName, classMergeAttributes("subtle", { class: intent, disabled: "true" }), "Disabled Subtle")}`,
)}

${renderGrid(
  `${main(tagName, classMergeAttributes("ghost", { class: intent }), `${namePrefix} Ghost Link`)}
${main(tagName, classMergeAttributes("ghost", { class: intent, "aria-current": "false" }), "Not Current Ghost")}
${main(tagName, classMergeAttributes("ghost", { class: intent, "aria-current": "true" }), "Current Ghost")}
${main(tagName, classMergeAttributes("ghost", { class: intent, disabled: "true" }), "Disabled Ghost")}`,
)}
`;
}
