import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleButtonDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[role=button]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: RoleButtonDemo.main() },
  render: (args) => args.html,
};
