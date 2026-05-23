import type { Meta, StoryObj } from "@storybook/html-vite";
import { FieldsetDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<fieldset>",
};

export default meta;

export const FormInput: StoryObj = {
  args: { html: FieldsetDemo.formInput() },
  render: (args) => args.html,
};

export const GroupInputButton: StoryObj = {
  args: { html: FieldsetDemo.groupInputButton() },
  render: (args) => args.html,
};

export const GroupSelectButton: StoryObj = {
  args: { html: FieldsetDemo.groupSelectButton() },
  render: (args) => args.html,
};

export const GroupDropdownButton: StoryObj = {
  args: { html: FieldsetDemo.groupDropdownButton() },
  render: (args) => args.html,
};

export const GroupMultipleInputs: StoryObj = {
  args: { html: FieldsetDemo.groupMultipleInputs() },
  render: (args) => args.html,
};

export const FormExample: StoryObj = {
  args: { html: FieldsetDemo.formExample() },
  render: (args) => args.html,
};

export const Disabled: StoryObj = {
  args: { html: FieldsetDemo.disabled() },
  render: (args) => args.html,
};

export const Section: StoryObj = {
  args: { html: FieldsetDemo.section() },
  render: (args) => args.html,
};
