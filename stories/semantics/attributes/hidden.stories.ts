import type { Meta, StoryObj } from "@storybook/html";
import { HiddenDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[hidden]",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: HiddenDemo.basic() },
  render: (args) => args.html,
};

export const toggle: StoryObj = {
  args: { html: HiddenDemo.toggle() },
  render: (args) => args.html,
};
