import type { Meta, StoryObj } from "@storybook/html";
import {
  FooterDemo,
  AsideDemo,
  HeaderDemo,
  ArticleDemo,
} from "@demos/semantics/elements";
import { placement } from "@demos/semantics/attributes/role-tooltip.demo";

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

    <nav class="d-flex d-xl-none border-bottom pb-d mb-d ps-0 ps-md-d">
      <button role="link" class="d-inline-block d-md-none" popovertarget="left-sidebar">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h14"/></svg>
        <small>menu</small>
      </button>
      <p></p>
      <button role="link" popovertarget="right-sidebar">
        <small>on this page</small>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16m-10 6h10M6 18h14"/></svg>
      </button>
    </nav>

    <div class="flow-h pt-d">
      <div class="flow-v mx-0 mx-md-5">
        ${ArticleDemo.multipleParagraphs({ class: "pb-d" })}

        ${FooterDemo.basic({ class: "border-top" })}
      </div>

      ${AsideDemo.rightSidebar({
        class: "end-0 border-start d-none d-xl-flex",
        popover: "auto",
        id: "right-sidebar",
        "data-placement": "right"
      })}
    </div>
  </main>
</div>`;
  },
};
