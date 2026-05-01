import type { Meta, StoryObj } from "@storybook/html";
import { AriaInvalidDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[aria-invalid]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: AriaInvalidDemo.basic },
  render: (args) => args.html,
};

export const inputHelper: StoryObj = {
  args: { html: AriaInvalidDemo.inputHelper },
  render: (args) => args.html,
};

export const checkbox: StoryObj = {
  args: { html: AriaInvalidDemo.checkbox },
  render: (args) => args.html,
};

export const radio: StoryObj = {
  args: { html: AriaInvalidDemo.radio },
  render: (args) => args.html,
};

export const select: StoryObj = {
  args: { html: AriaInvalidDemo.select },
  render: (args) => args.html,
};

export const switch_: StoryObj = {
  name: "Switch",
  args: { html: AriaInvalidDemo.switch_ },
  render: (args) => args.html,
};

export const textarea: StoryObj = {
  args: { html: AriaInvalidDemo.textarea },
  render: (args) => args.html,
};

export const textareaHelper: StoryObj = {
  args: { html: AriaInvalidDemo.textareaHelper },
  render: (args) => args.html,
};
