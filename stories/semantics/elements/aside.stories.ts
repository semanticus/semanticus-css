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

export const withDocsLinks: StoryObj = {
  args: { html: AsideDemo.withDocsLinks() },
  render: (args) => args.html,
};
