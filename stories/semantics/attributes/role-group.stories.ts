import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleGroupDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[role=group]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: RoleGroupDemo.main() },
  render: (args) => args.html,
};

export const inputWithButton: StoryObj = {
  args: { html: RoleGroupDemo.inputWithButton() },
  render: (args) => args.html,
};

export const selectWithButton: StoryObj = {
  args: { html: RoleGroupDemo.selectWithButton() },
  render: (args) => args.html,
};

export const twoInputsWithButton: StoryObj = {
  args: { html: RoleGroupDemo.twoInputsWithButton() },
  render: (args) => args.html,
};

export const pagination: StoryObj = {
  args: { html: RoleGroupDemo.pagination() },
  render: (args) => args.html,
};

export const newsletterForm: StoryObj = {
  args: { html: RoleGroupDemo.newsletterForm() },
  render: (args) => args.html,
};
