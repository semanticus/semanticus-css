import type { Meta, StoryObj } from "@storybook/html";
import { HgroupDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<hgroup>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: HgroupDemo.basic() },
  render: (args) => args.html,
};
