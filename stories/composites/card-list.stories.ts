import type { Meta, StoryObj } from "@storybook/html-vite";
import { CardListDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Card List",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => CardListDemo.overview(),
};

export const horizontalStack: StoryObj = {
  render: () => CardListDemo.overviewHorizontalStack(),
};

export const variants: StoryObj = {
  render: () => CardListDemo.overviewVariants(),
};
