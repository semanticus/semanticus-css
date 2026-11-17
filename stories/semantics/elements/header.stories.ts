import type { Meta, StoryObj } from "@storybook/html-vite";
import { HeaderDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<header>",
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: HeaderDemo.main() },
  render: (args) => args.html,
};

export const withSearchAndNavigation: StoryObj = {
  args: { html: HeaderDemo.withSearchAndNavigation() },
  render: (args) => args.html,
};
