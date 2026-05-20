import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleLinkDemo } from '@demos/semantics';
import { IntentDemo } from '@demos/variants';

const meta: Meta = {
  title: "Semantics/Attributes/[role=link]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: RoleLinkDemo.overview() },
  render: (args) => args.html,
};

export const intentVariants: StoryObj = {
  args: { html: IntentDemo.roleLinks() },
  render: (args) => args.html,
};
