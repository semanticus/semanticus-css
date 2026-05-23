import type { Meta, StoryObj } from "@storybook/html-vite";
import { ListGroupDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/List Group",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  render: () => ListGroupDemo.main(),
};

export const Variants: StoryObj = {
  render: () => ListGroupDemo.overviewVariants(),
};
