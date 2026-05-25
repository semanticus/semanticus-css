import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleAlertDemo } from '@demos/semantics';

const meta: Meta = {
  title: "Semantics/Attributes/[role=alert]",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: RoleAlertDemo.main('div', { 'aria-live': 'polite' }) },
  render: (args) => args.html,
};

export const withCloseButton: StoryObj = {
  args: { html: RoleAlertDemo.overviewWithCloseButton() },
  render: (args) => args.html,
};

export const withIconAndCloseButton: StoryObj = {
  args: { html: RoleAlertDemo.overviewWithIconAndCloseButton() },
  render: (args) => args.html,
};

export const overviewToasts: StoryObj = {
  args: { html: RoleAlertDemo.overviewShowToasts() },
  render: (args) => args.html,
};

export const withTitleAndDescription: StoryObj = {
  args: { html: RoleAlertDemo.withHgroup() },
  render: (args) => args.html,
};

export const variants: StoryObj = {
  args: { html: RoleAlertDemo.overviewVariants() },
  render: (args) => args.html,
};
