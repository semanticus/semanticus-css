import type { Meta, StoryObj } from "@storybook/html";
import { SelectDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<select>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: SelectDemo.basic() },
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

export const dropdown: StoryObj = {
  args: { html: SelectDemo.dropdown() },
  render: (args) => args.html,
};
