import type { Meta, StoryObj } from "@storybook/html";
import { HrDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<hr>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: HrDemo.basic() },
  render: (args) => args.html,
};
