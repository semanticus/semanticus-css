import type { Meta, StoryObj } from "@storybook/html";
import { FieldsetDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<fieldset>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: FieldsetDemo.basic },
  render: (args) => args.html,
};

export const insideForm: StoryObj = {
  args: { html: FieldsetDemo.insideForm },
  render: (args) => args.html,
};

export const disabled_: StoryObj = {
  name: "Disabled",
  args: { html: FieldsetDemo.disabled_ },
  render: (args) => args.html,
};

export const withGroup: StoryObj = {
  args: { html: FieldsetDemo.withGroup },
  render: (args) => args.html,
};
