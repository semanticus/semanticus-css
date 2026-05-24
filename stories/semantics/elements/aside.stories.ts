import type { Meta, StoryObj } from "@storybook/html-vite";
import { AsideDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<aside>",
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: AsideDemo.main() },
  render: (args) => args.html,
};

export const leftSidebar: StoryObj = {
  args: { html: AsideDemo.leftSidebar() },
  render: (args) => args.html,
};

export const rightSidebar: StoryObj = {
  args: { html: AsideDemo.rightSidebar() },
  render: (args) => args.html,
};
