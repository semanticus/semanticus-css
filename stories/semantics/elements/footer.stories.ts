import type { Meta, StoryObj } from "@storybook/html-vite";
import { FooterDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<footer>",
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: FooterDemo.main() },
  render: (args) => args.html,
};
