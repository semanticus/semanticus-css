import type { Meta, StoryObj } from "@storybook/html";
import { RoleToolbarDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[role=toolbar]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: RoleToolbarDemo.basic() },
  render: (args) => args.html,
};
