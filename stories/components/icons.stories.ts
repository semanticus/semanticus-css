import type { Meta, StoryObj } from "@storybook/html-vite";
import { IconsDemo } from "@demos/components";

const meta: Meta = {
  title: "Components/Icons",
  parameters: {},
};

export default meta;

export const usageOverview: StoryObj = {
  render: () => IconsDemo.overview(),
};

export const all: StoryObj = {
  render: () => IconsDemo.allIcons(),
};
