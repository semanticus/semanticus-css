import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleButtonDemo } from "@demos/semantics/attributes";
import { IntentDemo, GhostDemo, SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Semantics/Attributes/[role=button]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: RoleButtonDemo.main() },
  render: (args) => args.html,
};

export const accordion: StoryObj = {
  args: { html: RoleButtonDemo.accordion() },
  render: (args) => args.html,
};

export const dropdown: StoryObj = {
  args: { html: RoleButtonDemo.dropdown() },
  render: (args) => args.html,
};

export const intentVariants: StoryObj = {
  args: { html: IntentDemo.overviewRoleButtons() },
  render: (args) => args.html,
};

export const subtleModifier: StoryObj = {
  args: { html: SubtleDemo.overviewRoleButtons() },
  render: (args) => args.html,
};

export const ghostModifier: StoryObj = {
  args: { html: GhostDemo.overviewRoleButtons() },
  render: (args) => args.html,
};
