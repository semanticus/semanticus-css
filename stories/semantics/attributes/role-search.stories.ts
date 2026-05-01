import type { Meta, StoryObj } from "@storybook/html";
import { RoleSearchDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[role=search]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: RoleSearchDemo.basic },
  render: (args) => args.html,
};

export const withIconButton: StoryObj = {
  args: { html: RoleSearchDemo.withIconButton },
  render: (args) => args.html,
};

export const filterSearch: StoryObj = {
  args: { html: RoleSearchDemo.filterSearch },
  render: (args) => args.html,
};
