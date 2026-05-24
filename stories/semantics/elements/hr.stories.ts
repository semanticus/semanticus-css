import type { Meta, StoryObj } from "@storybook/html-vite";
import { HrDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<hr>",
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: HrDemo.main() },
  render: (args) => args.html,
};
