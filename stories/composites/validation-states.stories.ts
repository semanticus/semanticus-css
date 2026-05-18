import type { Meta, StoryObj } from "@storybook/html-vite";
import { ValidationStatesDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Validation States",
  parameters: {},
};

export default meta;

export const FormValidation: StoryObj = {
  render: () => ValidationStatesDemo.formValidation(),
};
