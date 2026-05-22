import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleLinkDemo } from '@demos/semantics';

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
  args: { html: RoleLinkDemo.intentVariants() },
  render: (args) => args.html,
};
