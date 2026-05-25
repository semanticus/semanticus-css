import type { Meta, StoryObj } from "@storybook/html-vite";
import { ContentGridDemo } from "@demos/components";

const meta: Meta = {
  title: "Components/Content Grid",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => ContentGridDemo.main(),
};

export const breakout: StoryObj = {
  render: () => ContentGridDemo.breakout(),
};

export const fullWidth: StoryObj = {
  render: () => ContentGridDemo.fullWidth(),
};

export const nested: StoryObj = {
  render: () => ContentGridDemo.nested(),
};

export const nestedFullWidth: StoryObj = {
  render: () => ContentGridDemo.nestedFullWidth(),
};
