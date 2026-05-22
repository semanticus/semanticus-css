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

export const intentVariants: StoryObj = {
  render: () => ListGroupDemo.intentVariants(),
};

export const ghostVariants: StoryObj = {
  render: () => ListGroupDemo.ghostVariants(),
};

export const subtleVariants: StoryObj = {
  render: () => ListGroupDemo.subtleVariants(),
};
