import type { Meta, StoryObj } from "@storybook/html";
import { BodyDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<body>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: BodyDemo.basic() },
  render: (args) => args.html,
};
