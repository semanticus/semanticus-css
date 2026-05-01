import type { Meta, StoryObj } from "@storybook/html";
import { SupDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<sup>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: SupDemo.basic() },
  render: (args) => args.html,
};

export const Footnote: StoryObj = {
  args: { html: SupDemo.footnote() },
  render: (args) => args.html,
};
