import type { Meta, StoryObj } from "@storybook/html-vite";
import { OverviewDemo } from "@demos/index";

const meta: Meta = {
  title: "Overview",
  tags: ["!autodocs"],
};

export default meta;

export const fullBundle: StoryObj = {
  render: () => OverviewDemo.fullBundle(),
};

export const fullBundleColors: StoryObj = {
  render: () => OverviewDemo.fullBundleColors(),
};
