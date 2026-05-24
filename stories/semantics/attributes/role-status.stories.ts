import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleStatusDemo } from '@demos/semantics';

const meta: Meta = {
  title: "Semantics/Attributes/[role=status]",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: RoleStatusDemo.main('div', { 'aria-live': 'polite' }) },
  render: (args) => args.html,
};

export const withCloseButton: StoryObj = {
  args: { html: RoleStatusDemo.withCloseButton() },
  render: (args) => args.html,
};

export const overviewToasts: StoryObj = {
  args: { html: RoleStatusDemo.overviewShowToasts() },
  render: (args) => args.html,
};

export const withTitleAndDescription: StoryObj = {
  args: { html: RoleStatusDemo.withHgroup() },
  render: (args) => args.html,
};

export const variants: StoryObj = {
  args: { html: RoleStatusDemo.overviewVariants() },
  render: (args) => args.html,
};
