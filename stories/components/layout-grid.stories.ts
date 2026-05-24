import type { Meta, StoryObj } from "@storybook/html-vite";
import { LayoutGridDemo } from "@demos/components";

const meta: Meta = {
  title: "Components/Layout Grid",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => LayoutGridDemo.main(),
};

export const breakout: StoryObj = {
  render: () => LayoutGridDemo.breakout(),
};

export const fullWidth: StoryObj = {
  render: () => LayoutGridDemo.fullWidth(),
};

export const nested: StoryObj = {
  render: () => LayoutGridDemo.nested(),
};

export const nestedFullWidth: StoryObj = {
  render: () => LayoutGridDemo.nestedFullWidth(),
};
