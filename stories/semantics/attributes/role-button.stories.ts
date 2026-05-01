import type { Meta, StoryObj } from "@storybook/html";
import { RoleButtonDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[role=button]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: RoleButtonDemo.basic },
  render: (args) => args.html,
};
