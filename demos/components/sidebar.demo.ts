import { renderElement, classMergeAttributes } from "@scripts/utils";
import * as NavDemo from "@demos/semantics/elements/nav.demo";
import * as AsideDemo from "@demos/semantics/elements/aside.demo";

export function main(
  tagName: string = "aside",
  attrs: Record<string, string> = {},
  slot: string = "",
) {
  return renderElement(
    tagName,
    classMergeAttributes("sidebar", attrs),
    slot || NavDemo.simpleVerticalSidebarNavigation(),
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
          "border: 2px dashed var(--info-color); height:500px; width:200px;",
      },
      main(tagName, classMergeAttributes("pane", attrs)),
    ),
  );
}

export function popoverExample(attrs: Record<string, string> = {}) {
  const mergedAttrs = classMergeAttributes("pane w-25", {
    id: "left-sidebar",
    ...attrs,
    hidden: "true",
    popover: "auto",
  });

  return renderElement(
    "div",
    { style: "height:300px;" },
    `<button class="mx-auto d-block" popovertarget="${mergedAttrs["id"]}">Open Sidebar</button>

${main("aside", mergedAttrs)}`,
  );
}


export function verticalSidebarNavigation(attrs: Record<string, string> = {}) {
  return AsideDemo.sidebarWithFixedSize(
    { ...attrs },
    `<nav>
  <ul>
    <li>
      <div class="hstack gap-1">
        <img style="width: 30px" src="https://semanticus.design/logo.svg" alt="Brand logo" />
        <strong class="fs-6">Semanticus CSS</strong>
      </div>
    </li>
    <li><hr /></li>

    <li><a href="#about">About</a></li>
    <li><a href="#getting-started" aria-current="page">Getting Started</a></li>
    <li><a href="#advanced-usage">Advanced Usage</a></li>
    <li><a href="#uninstall">Uninstall</a></li>

    <li class="flex-grow-1"></li>
    <li><button class="ghost">Support</button></li>
  </ul>
</nav>`,
  );
}
