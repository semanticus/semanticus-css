import type { Meta, StoryObj } from "@storybook/html-vite";
import { AlertsDemo } from '@demos/composites';
import { RoleStatusDemo } from '@demos/semantics';

const meta: Meta = {
  title: "Composites/Alerts",
  parameters: {},
};

export default meta;

export const inlineAlertsExample: StoryObj = {
  render: () => AlertsDemo.inlineAlertsExample(),
};

export const withHgroupExample: StoryObj = {
  render: () => AlertsDemo.withHgroupExample(),
};

export const withCloseButtonExample: StoryObj = {
  render: () => AlertsDemo.withCloseButtonExample(),
};

export const withIconAndCloseButtonExample: StoryObj = {
  render: () => AlertsDemo.withIconAndCloseButtonExample(),
};

export const overviewShowToasts: StoryObj = {
  render: () => AlertsDemo.overviewShowToasts(),
};
