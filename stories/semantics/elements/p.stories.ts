import type { Meta, StoryObj } from "@storybook/html";
import { PDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<p>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: PDemo.basic() },
  render: (args) => args.html,
};
