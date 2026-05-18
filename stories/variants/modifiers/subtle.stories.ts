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

export const inputButtons: StoryObj = {
  render: () => SubtleDemo.inputButtons(),
};

export const roleButtons: StoryObj = {
  render: () => SubtleDemo.roleButtons(),
};

export const dropdowns: StoryObj = {
  render: () => SubtleDemo.dropdowns(),
};

export const accordions: StoryObj = {
  render: () => SubtleDemo.accordions(),
};

export const cards: StoryObj = {
  render: () => SubtleDemo.cards(),
};
