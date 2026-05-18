import type { Meta, StoryObj } from "@storybook/html-vite";
import { SubtleDemo } from "@demos/variants/modifiers";

const meta: Meta = {
  title: "Variants/Modifiers/Subtle",
  parameters: {},
};

export default meta;

export const ButtonExample: StoryObj = {
  render: () => SubtleDemo.buttons(),
};

export const InputButtons: StoryObj = {
  render: () => SubtleDemo.inputButtons(),
};

export const RoleButtons: StoryObj = {
  render: () => SubtleDemo.roleButtons(),
};

export const Dropdowns: StoryObj = {
  render: () => SubtleDemo.dropdowns(),
};

export const Accordions: StoryObj = {
  render: () => SubtleDemo.accordions(),
};

export const Cards: StoryObj = {
  render: () => SubtleDemo.cards(),
};
