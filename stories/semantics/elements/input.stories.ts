import type { Meta, StoryObj } from "@storybook/html-vite";
import { InputDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<input>",
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => InputDemo.main(),
};

export const withLabel: StoryObj = {
  render: () => InputDemo.withLabel(),
};
export const withHelperText: StoryObj = {
  render: () => InputDemo.withHelperText(),
};
export const validationStatesWithTextHelper: StoryObj = {
  render: () => InputDemo.validationStatesWithTextHelper(),
};
export const miscellaneousTypes: StoryObj = {
  render: () => InputDemo.miscellaneousTypes(),
};
export const dateTypes: StoryObj = {
  render: () => InputDemo.dateTypes(),
};
