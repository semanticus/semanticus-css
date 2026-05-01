import type { Meta, StoryObj } from "@storybook/html";
import { MarkDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<mark>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: MarkDemo.basic() },
  render: (args) => args.html,
};
