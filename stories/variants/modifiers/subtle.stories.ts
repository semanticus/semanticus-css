import type { Meta, StoryObj } from "@storybook/html-vite";
import { SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Variants/Modifiers/Subtle",
  parameters: {},
};

export default meta;

export const ButtonExample: StoryObj = {
  render: () => SubtleDemo.overviewButtons(),
};

export const InputButtons: StoryObj = {
  render: () => SubtleDemo.overviewInputButtons(),
};

export const RoleButtons: StoryObj = {
  render: () => SubtleDemo.overviewRoleButtons(),
};

export const Dropdowns: StoryObj = {
  render: () => SubtleDemo.overviewDropdowns(),
};

export const Accordions: StoryObj = {
  render: () => SubtleDemo.overviewAccordions(),
};

export const Cards: StoryObj = {
  render: () => SubtleDemo.overviewCardsWithHeaderAndFooter(),
};
