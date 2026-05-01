import type { Meta, StoryObj } from "@storybook/html";
import { TextareaDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<textarea>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: TextareaDemo.basic() },
  render: (args) => args.html,
};

export const withLabel: StoryObj = {
  args: { html: TextareaDemo.withLabel() },
  render: (args) => args.html,
};

export const withRows: StoryObj = {
  args: { html: TextareaDemo.withRows() },
  render: (args) => args.html,
};
