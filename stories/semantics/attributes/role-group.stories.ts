import type { Meta, StoryObj } from "@storybook/html";
import { RoleGroupDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[role=group]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: RoleGroupDemo.basic() },
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

export const multipleInputs: StoryObj = {
  args: { html: RoleGroupDemo.multipleInputs() },
  render: (args) => args.html,
};

export const paginationExample: StoryObj = {
  args: { html: RoleGroupDemo.paginationExample() },
  render: (args) => args.html,
};

export const newsletterExample: StoryObj = {
  args: { html: RoleGroupDemo.newsletterExample() },
  render: (args) => args.html,
};
