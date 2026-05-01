import type { Meta, StoryObj } from "@storybook/html";
import { DialogDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<dialog>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: DialogDemo.basic() },
  render: (args) => args.html,
};

export const WithForm: StoryObj = {
  args: { html: DialogDemo.withForm() },
  render: (args) => args.html,
};
