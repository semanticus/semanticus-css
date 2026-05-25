import type { Meta, StoryObj } from "@storybook/html-vite";
import { ToastsDemo } from '@demos/composites';

const meta: Meta = {
  title: "Composites/Toasts",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => ToastsDemo.showToast(),
};

export const overviewShowToasts: StoryObj = {
  render: () => ToastsDemo.overviewShowToasts(),
};
