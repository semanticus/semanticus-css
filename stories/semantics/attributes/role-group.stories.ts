import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleGroupDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Semantics/Attributes/[role=group]",
  parameters: {},
};

export default meta;

export const relatedControls: StoryObj = {
  args: { html: RoleGroupDemo.relatedControls() },
  render: (args) => args.html,
};

export const textFormattingButtons: StoryObj = {
  args: { html: RoleGroupDemo.textFormattingButtons() },
  render: (args) => args.html,
};
