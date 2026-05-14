import type { Meta, StoryObj } from "@storybook/html";
import { DialogDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<dialog>",
  tags: ["!autodocs"],
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: DialogDemo.main({ open: 'true' }) },
  render: (args) => args.html,
};

export const withHeaderAndFooter: StoryObj = {
  args: { html: DialogDemo.withHeaderAndFooter({ open: 'true' }) },
  render: (args) => args.html,
};
