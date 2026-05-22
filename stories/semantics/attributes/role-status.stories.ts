import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleStatusDemo } from '@demos/semantics';

const meta: Meta = {
  title: "Semantics/Attributes/[role=status]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: RoleStatusDemo.main('div', { 'aria-live': 'polite' }) },
  render: (args) => args.html,
};

export const WithCloseButton: StoryObj = {
  args: { html: RoleStatusDemo.withCloseButton() },
  render: (args) => args.html,
};

export const OverviewToasts: StoryObj = {
  args: { html: RoleStatusDemo.overviewShowToasts() },
  render: (args) => args.html,
};

export const WithTitleAndDescription: StoryObj = {
  args: { html: RoleStatusDemo.withHgroup() },
  render: (args) => args.html,
};

export const Variants: StoryObj = {
  args: { html: RoleStatusDemo.overviewVariants() },
  render: (args) => args.html,
};
