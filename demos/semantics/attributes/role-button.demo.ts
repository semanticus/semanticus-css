import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  return renderElement(
    tagName,
    { ...attrs, role: "button" },
    slot || `&lt;${tagName}&gt; as button`,
  );
}

export function intentVariants(
  tagName: string = "section",
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return `${main(tagName, classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
  ${main(tagName, classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
  ${main(tagName, classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
  ${main(tagName, classMergeAttributes(`success ${modifier}`.trim(), attrs))}
${main(tagName, classMergeAttributes(`info ${modifier}`.trim(), attrs))}
${main(tagName, classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
${main(tagName, classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`;
}

export function subtleVariants(
  tagName: string = "section",
  attrs: Record<string, string> = {},
) {
  return intentVariants(tagName, attrs, "subtle");
}

export function ghostVariants(
  tagName: string = "section",
  attrs: Record<string, string> = {},
) {
  return intentVariants(tagName, attrs, "ghost");
}

export function overviewStatesAndModifiers(
  tagName: string = "div",
  intent: string = "",
) {
  const namePrefix = `&lt;${tagName}&gt; as ${intent ? `${intent[0].toUpperCase() + intent.slice(1)}` : ""}`;

  return renderElement(
    "section",
    { class: "auto-grid", style: "--auto-grid-min-column: 180px" },
    `${main(tagName, { class: intent }, `${namePrefix} Button`)}
${main(tagName, { class: intent, "aria-current": "false" }, "Not Current")}
${main(tagName, { class: intent, "aria-current": "true" }, "Current")}
${main(tagName, { class: intent, disabled: "true" }, "Disabled")}

${main(tagName, classMergeAttributes("subtle", { class: intent }), `${namePrefix} Subtle Button`)}
${main(tagName, classMergeAttributes("subtle", { class: intent, "aria-current": "false" }), "Not Current Subtle")}
${main(tagName, classMergeAttributes("subtle", { class: intent, "aria-current": "true" }), "Current Subtle")}
${main(tagName, classMergeAttributes("subtle", { class: intent, disabled: "true" }), "Disabled Subtle")}

${main(tagName, classMergeAttributes("ghost", { class: intent }), `${namePrefix} Ghost Button`)}
${main(tagName, classMergeAttributes("ghost", { class: intent, "aria-current": "false" }), "Not Current Ghost")}
${main(tagName, classMergeAttributes("ghost", { class: intent, "aria-current": "true" }), "Current Ghost")}
${main(tagName, classMergeAttributes("ghost", { class: intent, disabled: "true" }), "Disabled Ghost")}
`,
  );
}
