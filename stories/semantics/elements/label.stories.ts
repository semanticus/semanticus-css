import type { Meta, StoryObj } from "@storybook/html-vite";
import { LabelDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<label>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: LabelDemo.main() },
  render: (args) => args.html,
};

export const inputInside: StoryObj = {
  args: { html: LabelDemo.inputInside() },
  render: (args) => args.html,
};
