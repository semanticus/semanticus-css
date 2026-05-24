import type { Meta, StoryObj } from "@storybook/html-vite";
import { ListGroupDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/List Group",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => ListGroupDemo.main(),
};

export const horizontalStack: StoryObj = {
  render: () => ListGroupDemo.horizontalStack(),
};

export const variants: StoryObj = {
  render: () => ListGroupDemo.overviewVariants(),
};
