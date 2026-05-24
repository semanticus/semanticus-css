import type { Meta, StoryObj } from "@storybook/html-vite";
import { SelectDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<select>",
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: SelectDemo.main() },
  render: (args) => args.html,
};

export const multipleSelect: StoryObj = {
  args: { html: SelectDemo.multipleSelect() },
  render: (args) => args.html,
};

export const withOptgroup: StoryObj = {
  args: { html: SelectDemo.withOptgroup() },
  render: (args) => args.html,
};

export const withLabel: StoryObj = {
  args: { html: SelectDemo.withLabel() },
  render: (args) => args.html,
};

export const withHelperText: StoryObj = {
  args: { html: SelectDemo.withHelperText() },
  render: (args) => args.html,
};

export const validationStates: StoryObj = {
  args: { html: SelectDemo.validationStates() },
  render: (args) => args.html,
};

export const validationStatesWithTextHelper: StoryObj = {
  args: { html: SelectDemo.validationStatesWithTextHelper() },
  render: (args) => args.html,
};
