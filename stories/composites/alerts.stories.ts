import type { Meta, StoryObj } from "@storybook/html-vite";
import { AlertsDemo } from '@demos/composites';
import { RoleStatusDemo } from '@demos/semantics';

const meta: Meta = {
  title: "Composites/Alerts",
  parameters: {},
};

export default meta;

export const inlineAlerts: StoryObj = {
  render: () => AlertsDemo.inlineAlerts(),
};

export const overviewShowToasts: StoryObj = {
  render: () => RoleStatusDemo.overviewShowToasts(),
};
