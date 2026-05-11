import type { Meta, StoryObj } from "@storybook/html";
import {
  FooterDemo,
  AsideDemo,
  HeaderDemo,
  ArticleDemo,
} from "@demos/semantics/elements";

const meta: Meta = {
  title: "Examples/DocsPage",
  tags: ["!autodocs"],
};

export default meta;

export const DocsPage: StoryObj = {
  render() {
    return `<div class="flow-h container">
  ${AsideDemo.leftSidebar({
    class: "start-0 bg-secondary-subtle d-none d-md-flex",
    popover: "auto",
    id: "left-sidebar"
  })}

  <main>
    ${HeaderDemo.withSearchDropdownAndLinks({ class: "border-bottom ps-0 ps-md-d bg-body" })}

    <nav class="d-flex d-xl-none border-bottom pb-d px-0 px-md-d mb-d">
      <button class="d-inline-block d-md-none" popovertarget="left-sidebar">l</button>
      <p></p>
      <button popovertarget="right-sidebar">r</button>
    </nav>

    <div class="flow-h pt-d">
      <div class="flow-v mx-0 mx-md-5">
        ${ArticleDemo.multipleParagraphs({ class: "pb-d" })}

        ${FooterDemo.basic({ class: "border-top" })}
      </div>

      ${AsideDemo.rightSidebar({
        class: "end-0 border-start d-none d-xl-flex",
        popover: "auto",
        id: "right-sidebar"
      })}
    </div>
  </main>
</div>`;
  },
};
