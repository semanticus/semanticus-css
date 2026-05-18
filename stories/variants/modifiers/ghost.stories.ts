import type { Meta, StoryObj } from "@storybook/html-vite";
import { GhostDemo } from "@demos/variants/modifiers";

const meta: Meta = {
  title: "Variants/Modifiers/Ghost",
  parameters: {},
};

export default meta;

export const ButtonExample: StoryObj = {
  render: () => GhostDemo.buttons(),
};

export const inputButtons: StoryObj = {
  render: () => GhostDemo.inputButtons(),
};

export const roleButtons: StoryObj = {
  render: () => GhostDemo.roleButtons(),
};

export const dropdowns: StoryObj = {
  render: () => GhostDemo.dropdowns(),
};

export const accordions: StoryObj = {
  render: () => GhostDemo.accordions(),
};

export const cards: StoryObj = {
  render: () => GhostDemo.cards(),
};
