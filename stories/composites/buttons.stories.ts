import type { Meta, StoryObj } from "@storybook/html-vite";
import { ButtonDemo, InputDemo, RoleButtonDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Composites/Buttons",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => ButtonDemo.main(),
};

export const intentVariants: StoryObj = {
  render: () => InputDemo.buttons(),
};

export const ghostVariants: StoryObj = {
  render: () => RoleButtonDemo.main(),
};

export const subtleVariants: StoryObj = {
  render: () => ButtonDemo.overviewCloseButton(),
};
