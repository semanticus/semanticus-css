import type { Meta, StoryObj } from "@storybook/html";
import { StrongDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<strong>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: StrongDemo.basic() },
  render: (args) => args.html,
};

export const Bold: StoryObj = {
  args: { html: StrongDemo.bold() },
  render: (args) => args.html,
};
