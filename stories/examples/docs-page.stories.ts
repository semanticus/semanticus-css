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
  ${AsideDemo.leftSidebar({ class: "bg-secondary-subtle py-4" })}

  <main>
    ${HeaderDemo.searchDropdownAndLinks({ class: "border-bottom ps-4 mb-4 bg-body" })}

    <div class="flow-h mt-5">
      <div class="flow-v w-60 mx-auto">
        ${ArticleDemo.multipleParagraphs()}

        ${FooterDemo.default({ class: "border-top mt-5" })}
      </div>

      ${AsideDemo.rightSidebar({ class: "border-start sticky-top" })}
    </div>
  </main>
</div>`;
  },
};
