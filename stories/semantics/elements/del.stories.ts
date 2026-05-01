import type { Meta, StoryObj } from "@storybook/html";
import { DelDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<del>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: DelDemo.basic() },
  render: (args) => args.html,
};

export const Editorial: StoryObj = {
  args: { html: DelDemo.editorial() },
  render: (args) => args.html,
};
