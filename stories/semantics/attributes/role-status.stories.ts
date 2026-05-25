import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleStatusDemo } from '@demos/semantics';

const meta: Meta = {
  title: "Semantics/Attributes/[role=status]",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: RoleStatusDemo.overview() },
  render: (args) => args.html,
};

export const overviewVariants: StoryObj = {
  args: { html: RoleStatusDemo.overviewVariants() },
  render: (args) => args.html,
};
