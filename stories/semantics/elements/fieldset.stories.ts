import type { Meta, StoryObj } from "@storybook/html-vite";
import { FieldsetDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<fieldset>",
};

export default meta;

export const formInput: StoryObj = {
  args: { html: FieldsetDemo.formInput() },
  render: (args) => args.html,
};

export const groupInputButton: StoryObj = {
  args: { html: FieldsetDemo.groupInputButton() },
  render: (args) => args.html,
};

export const groupSelectButton: StoryObj = {
  args: { html: FieldsetDemo.groupSelectButton() },
  render: (args) => args.html,
};

export const groupDropdownButton: StoryObj = {
  args: { html: FieldsetDemo.groupDropdownButton() },
  render: (args) => args.html,
};

export const groupMultipleInputs: StoryObj = {
  args: { html: FieldsetDemo.groupMultipleInputs() },
  render: (args) => args.html,
};

export const loginFormExample: StoryObj = {
  args: { html: FieldsetDemo.loginFormExample() },
  render: (args) => args.html,
};

export const disabled: StoryObj = {
  args: { html: FieldsetDemo.disabled() },
  render: (args) => args.html,
};

export const section: StoryObj = {
  args: { html: FieldsetDemo.section() },
  render: (args) => args.html,
};
