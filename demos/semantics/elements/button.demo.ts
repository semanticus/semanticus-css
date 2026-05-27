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

export function overviewStatesAndModifiers(intent: string = "") {
  const namePrefix = intent
    ? `${intent[0].toUpperCase() + intent.slice(1)}`
    : "";

  return renderElement(
    "section",
    { class: "auto-grid", style: "--auto-grid-min-column: 180px" },
    `${main({ class: intent }, `${namePrefix} Button`)}
${main({ class: intent, "aria-current": "false" }, "Not Current")}
${main({ class: intent, "aria-current": "true" }, "Current")}
${main({ class: intent, disabled: "true" }, "Disabled")}

${main(classMergeAttributes("subtle", { class: intent }), `${namePrefix} Subtle Button`)}
${main(classMergeAttributes("subtle", { class: intent, "aria-current": "false" }), "Not Current Subtle")}
${main(classMergeAttributes("subtle", { class: intent, "aria-current": "true" }), "Current Subtle")}
${main(classMergeAttributes("subtle", { class: intent, disabled: "true" }), "Disabled Subtle")}

${main(classMergeAttributes("ghost", { class: intent }), `${namePrefix} Ghost Button`)}
${main(classMergeAttributes("ghost", { class: intent, "aria-current": "false" }), "Not Current Ghost")}
${main(classMergeAttributes("ghost", { class: intent, "aria-current": "true" }), "Current Ghost")}
${main(classMergeAttributes("ghost", { class: intent, disabled: "true" }), "Disabled Ghost")}
`,
  );
}
