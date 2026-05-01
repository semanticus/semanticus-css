import type { Meta, StoryObj } from "@storybook/html";
import { FieldsetDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<fieldset>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: FieldsetDemo.basic() },
  render: (args) => args.html,
};

export const insideForm: StoryObj = {
  args: { html: FieldsetDemo.insideForm() },
  render: (args) => args.html,
};

export const disabled: StoryObj = {
  args: { html: FieldsetDemo.disabled() },
  render: (args) => args.html,
};

export const AsASection: StoryObj = {
  name: "As a section",
  args: { html: FieldsetDemo.section() },
  render: (args) => args.html,
};

export const UsageWithGroup: StoryObj = {
  args: { html: FieldsetDemo.withGroup() },
  render: (args) => args.html,
};
