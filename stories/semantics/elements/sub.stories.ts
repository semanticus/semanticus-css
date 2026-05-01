import type { Meta, StoryObj } from "@storybook/html";
import { SubDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<sub>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: SubDemo.basic() },
  render: (args) => args.html,
};

export const Footnote: StoryObj = {
  args: { html: SubDemo.footnote() },
  render: (args) => args.html,
};
