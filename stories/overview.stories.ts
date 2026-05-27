import type { Meta, StoryObj } from "@storybook/html-vite";
import { AllComponentsDemo, ColorsDemo } from "@demos/overview";

const meta: Meta = {
  title: "Overview",
  tags: ["!autodocs"],
};

export default meta;

export const allComponents: StoryObj = {
  render: () => AllComponentsDemo.main(),
};

export const colors: StoryObj = {
  render: () => ColorsDemo.main(),
};
