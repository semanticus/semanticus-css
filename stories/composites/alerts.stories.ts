import type { Meta, StoryObj } from "@storybook/html-vite";
import { AlertsDemo } from '@demos/composites';

const meta: Meta = {
  title: "Composites/Alerts",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => `${AlertsDemo.savedItemExample()}

<hr>

${AlertsDemo.failedToSaveItemExample()}`,
};

export const withHgroupExample: StoryObj = {
  render: () => AlertsDemo.withHgroupExample(),
};

export const withCloseButtonExample: StoryObj = {
  render: () => AlertsDemo.withCloseButtonExample(),
};

export const withIconAndOrCloseButtonExample: StoryObj = {
  render: () => AlertsDemo.withIconAndOrCloseButtonExample(),
};

export const littleBitOfEverything: StoryObj = {
  render: () => AlertsDemo.littleBitOfEverything(),
};
