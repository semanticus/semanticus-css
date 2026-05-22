import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleAlertDemo } from '@demos/semantics';

const meta: Meta = {
  title: "Semantics/Attributes/[role=alert]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: RoleAlertDemo.main('div', { 'aria-live': 'polite' }) },
  render: (args) => args.html,
};

export const WithCloseButton: StoryObj = {
  args: { html: RoleAlertDemo.withCloseButton() },
  render: (args) => args.html,
};

export const OverviewToasts: StoryObj = {
  args: { html: RoleAlertDemo.overviewShowToasts() },
  render: (args) => args.html,
};

export const WithTitleAndDescription: StoryObj = {
  args: { html: RoleAlertDemo.withHgroup() },
  render: (args) => args.html,
};

export const Variants: StoryObj = {
  args: { html: RoleAlertDemo.overviewVariants() },
  render: (args) => args.html,
};
