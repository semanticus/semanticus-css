import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  return renderElement(
    tagName,
    classMergeAttributes("pane", attrs),
    slot ||
      `<p>This is a pane component. It can be used to group related content together.</p>`,
  );
}

export function withColoredWrapper(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  return renderElement(
    "div",
    { class: "card secondary" },
    main(tagName, attrs, slot),
  );
}

export function withHgroup(
  tagName: string = "div",
  attrs: Record<string, string> = {},
  title: string = "Pane title",
  description: string = "This is the pane description",
) {
  return main(
    tagName,
    attrs,
    `<hgroup>
  <h2>${title}</h2>
  <p>${description}</p>
</hgroup>`,
  );
}

export function overviewVariants(attrs: Record<string, string> = {}) {
  return renderElement(
    "section",
    attrs,
    `<div class="auto-grid">
  ${withHgroup()}
  ${withHgroup("div", { class: "subtle" })}
  ${withHgroup("div", { class: "ghost" })}
</div>

<div class="auto-grid">
  ${withHgroupIntentVariants()}
  ${withHgroupSubtleVariants()}
  ${withHgroupGhostVariants()}
</div>`,
  );
}

export function intentVariants(
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return renderElement(
    "section",
    {},
    `${main("div", classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
${main("div", classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
${main("div", classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
${main("div", classMergeAttributes(`success ${modifier}`.trim(), attrs))}
${main("div", classMergeAttributes(`info ${modifier}`.trim(), attrs))}
${main("div", classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
${main("div", classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`,
  );
}

export function subtleVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, "subtle");
}

export function ghostVariants(attrs: Record<string, string> = {}) {
  return intentVariants(attrs, "ghost");
}

export function withHgroupIntentVariants(
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return renderElement(
    "section",
    {},
    `${withHgroup("div", classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
${withHgroup("div", classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
${withHgroup("div", classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
${withHgroup("div", classMergeAttributes(`success ${modifier}`.trim(), attrs))}
${withHgroup("div", classMergeAttributes(`info ${modifier}`.trim(), attrs))}
${withHgroup("div", classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
${withHgroup("div", classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`,
  );
}

export function withHgroupSubtleVariants(attrs: Record<string, string> = {}) {
  return withHgroupIntentVariants(attrs, "subtle");
}

export function withHgroupGhostVariants(attrs: Record<string, string> = {}) {
  return withHgroupIntentVariants(attrs, "ghost");
}
