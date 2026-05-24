import type { Meta, StoryObj } from "@storybook/html-vite";
import { PanelListDemo } from "@demos/components";

const meta: Meta = {
  title: "Composites/List Group",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => PanelListDemo.main(),
};

export const horizontalStack: StoryObj = {
  render: () => PanelListDemo.horizontalStack(),
};

export const variants: StoryObj = {
  render: () => PanelListDemo.overviewVariants(),
};
