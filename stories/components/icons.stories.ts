import type { Meta, StoryObj } from "@storybook/html-vite";
import { IconsDemo } from "@demos/components";

const meta: Meta = {
  title: "Components/Icons",
  parameters: {},
};

export default meta;

export const UsageOverview: StoryObj = {
  render: () => IconsDemo.overview(),
};

export const All: StoryObj = {
  render: () => IconsDemo.allIcons(),
};
