import {
  renderElement,
  classMergeAttributes,
  renderGrid,
} from "@scripts/utils";

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

export function intentVariants(
  attrs: Record<string, string> = {},
  modifier: string = "",
) {
  return renderElement(
    "section",
    {},
    `${main("section", classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
${main("section", classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
${main("section", classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
${main("section", classMergeAttributes(`success ${modifier}`.trim(), attrs))}
${main("section", classMergeAttributes(`info ${modifier}`.trim(), attrs))}
${main("section", classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
${main("section", classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`,
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
    `${withHgroup("section", classMergeAttributes(`primary ${modifier}`.trim(), attrs))}
${withHgroup("section", classMergeAttributes(`secondary ${modifier}`.trim(), attrs))}
${withHgroup("section", classMergeAttributes(`contrast ${modifier}`.trim(), attrs))}
${withHgroup("section", classMergeAttributes(`success ${modifier}`.trim(), attrs))}
${withHgroup("section", classMergeAttributes(`info ${modifier}`.trim(), attrs))}
${withHgroup("section", classMergeAttributes(`warning ${modifier}`.trim(), attrs))}
${withHgroup("section", classMergeAttributes(`danger ${modifier}`.trim(), attrs))}`,
  );
}

export function withHgroupSubtleVariants(attrs: Record<string, string> = {}) {
  return withHgroupIntentVariants(attrs, "subtle");
}

export function withHgroupGhostVariants(attrs: Record<string, string> = {}) {
  return withHgroupIntentVariants(attrs, "ghost");
}

export function overviewDefaultAndModifiersVariants(
  attrs: Record<string, string> = {},
) {
  return renderElement(
    "section",
    attrs,
    `${renderGrid(`${withHgroup()}
${withHgroup("section", { class: "subtle" })}
${withHgroup("section", { class: "ghost" })}`)}`,
  );
}

export function overviewIntentAndModifiersVariants(
  attrs: Record<string, string> = {},
) {
  return renderElement(
    "section",
    attrs,
    `${renderGrid(`
${withHgroupIntentVariants()}
${withHgroupSubtleVariants()}
${withHgroupGhostVariants()}`)}`,
  );
}
