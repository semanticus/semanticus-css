import type { Meta, StoryObj } from "@storybook/html-vite";
import { Demo } from "@demos/overviews";

const meta: Meta = {
  title: "Overview",
  tags: ["!autodocs"],
};

export default meta;

export const fullBundle: StoryObj = {
  render: () => Demo.fullBundle(),
};

export const fullBundleColors: StoryObj = {
  render: () => Demo.fullBundleColors(),
};
