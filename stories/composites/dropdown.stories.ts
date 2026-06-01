import type { Meta, StoryObj } from "@storybook/html-vite";
import { DropdownDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Dropdown",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => DropdownDemo.main(),
};

export const withCheckboxes: StoryObj = {
  render: () => DropdownDemo.withCheckboxes(),
};

export const withRadios: StoryObj = {
  render: () => DropdownDemo.withRadios(),
};

export const inNav: StoryObj = {
  render: () => DropdownDemo.inNav(),
};

export const validationStates: StoryObj = {
  render: () => DropdownDemo.validationStates(),
};

export const asButton: StoryObj = {
  render: () => DropdownDemo.asButton(),
};

export const asButtonIntentVariants: StoryObj = {
  render: () => DropdownDemo.asButtonIntentVariants(),
};

export const asButtonGhostVariants: StoryObj = {
  render: () => DropdownDemo.asButtonGhostVariants(),
};

export const asButtonSubtleVariants: StoryObj = {
  render: () => DropdownDemo.asButtonSubtleVariants(),
};
