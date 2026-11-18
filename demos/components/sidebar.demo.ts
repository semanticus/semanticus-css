import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as NavDemo from "@demos/semantics/elements/nav.demo";

export function main(
  tagName: string = "aside",
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  return renderElement(
    tagName,
    classMergeAttributes("sidebar", attrs),
    slot || NavDemo.docsAndHelpLinks(),
  );
}

export function stickyBehavior(
  tagName: string = "aside",
  attrs: Record<string, string> = {},
) {
  return renderElement(
    "div",
    {
      class: "pane contrast overflow-auto",
      style: "height:300px;",
    },
    renderElement(
      "div",
      {
        style:
          "border: 2px dashed var(--info-color); height:500px; width:250px;",
      },
      main(tagName, classMergeAttributes("pane", attrs), NavDemo.docsLinks()),
    ),
  );
}

export function popoverExample(attrs: Record<string, string> = {}) {
  const mergedAttrs = classMergeAttributes("pane w-50", {
    id: "left-sidebar",
    ...attrs,
    hidden: undefined,
    popover: undefined,
  });

  return renderElement(
    "div",
    { style: "height:400px;" },
    `<button popovertarget="${mergedAttrs["id"]}">Open Sidebar</button>

${main("aside", mergedAttrs)}`,
  );
}
