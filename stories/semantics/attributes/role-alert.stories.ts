import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleAlertDemo } from '@demos/semantics';

const meta: Meta = {
  title: "Semantics/Attributes/[role=alert]",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: RoleAlertDemo.overview() },
  render: (args) => args.html,
};

export const overviewVariants: StoryObj = {
  args: { html: RoleAlertDemo.overviewVariants() },
  render: (args) => args.html,
};
