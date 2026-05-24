import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleTooltipDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[role=tooltip]",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: RoleTooltipDemo.main() },
  render: (args) => args.html,
};

export const placement: StoryObj = {
  args: { html: RoleTooltipDemo.placement() },
  render: (args) => args.html,
};
