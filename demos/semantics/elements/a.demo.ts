import {
  renderElement,
  renderGrid,
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

export function overviewStatesAndModifiers(intent: string = "") {
  const namePrefix = intent
    ? `${intent[0].toUpperCase() + intent.slice(1)}`
    : "";

  return `${renderGrid(
    `${main({ class: intent }, `${namePrefix} Link`)}
${main({ class: intent, "aria-current": "false" }, "Not Current")}
${main({ class: intent, "aria-current": "true" }, "Current")}
${main({ class: intent, "aria-disabled": "true" }, "Disabled")}`,
  )}

${renderGrid(
  `${main(classMergeAttributes("subtle", { class: intent }), `${namePrefix} Subtle Link`)}
${main(classMergeAttributes("subtle", { class: intent, "aria-current": "false" }), "Not Current Subtle")}
${main(classMergeAttributes("subtle", { class: intent, "aria-current": "true" }), "Current Subtle")}
${main(classMergeAttributes("subtle", { class: intent, "aria-disabled": "true" }), "Disabled Subtle")}`,
)}

${renderGrid(
  `${main(classMergeAttributes("ghost", { class: intent }), `${namePrefix} Ghost Link`)}
${main(classMergeAttributes("ghost", { class: intent, "aria-current": "false" }), "Not Current Ghost")}
${main(classMergeAttributes("ghost", { class: intent, "aria-current": "true" }), "Current Ghost")}
${main(classMergeAttributes("ghost", { class: intent, "aria-disabled": "true" }), "Disabled Ghost")}`,
)}
`;
}
