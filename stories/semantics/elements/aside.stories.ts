import type { Meta, StoryObj } from "@storybook/html";
import { AsideDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<aside>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: AsideDemo.basic() },
  render: (args) => args.html,
};

export const LeftSidebar: StoryObj = {
  args: { html: AsideDemo.leftSidebar() },
  render: (args) => args.html,
};

export const RightSidebar: StoryObj = {
  args: { html: AsideDemo.rightSidebar() },
  render: (args) => args.html,
};
