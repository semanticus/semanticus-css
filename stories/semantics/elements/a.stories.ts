import type { Meta, StoryObj } from "@storybook/html";
import { ADemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<a>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: ADemo.basic() },
  render: (args) => args.html,
};

export const Active: StoryObj = {
  args: { html: ADemo.active() },
  render: (args) => args.html,
};
