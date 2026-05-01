import type { Meta, StoryObj } from "@storybook/html";
import { AbbrDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<abbr>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: AbbrDemo.basic() },
  render: (args) => args.html,
};
