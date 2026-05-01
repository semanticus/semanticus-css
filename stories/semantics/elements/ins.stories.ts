import type { Meta, StoryObj } from "@storybook/html";
import { InsDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<ins>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: InsDemo.basic() },
  render: (args) => args.html,
};

export const Editorial: StoryObj = {
  args: { html: InsDemo.editorial() },
  render: (args) => args.html,
};
