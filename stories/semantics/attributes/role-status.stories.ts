import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleStatusDemo } from '@demos/semantics';
import { IntentDemo, GhostDemo, SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Semantics/Attributes/[role=status]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: RoleStatusDemo.main('div', { 'aria-live': 'polite' }) },
  render: (args) => args.html,
};

export const intentVariants: StoryObj = {
  args: { html: IntentDemo.overviewRoleStatuses() },
  render: (args) => args.html,
};

export const subtleModifier: StoryObj = {
  args: { html: SubtleDemo.overviewRoleStatuses() },
  render: (args) => args.html,
};

export const ghostModifier: StoryObj = {
  args: { html: GhostDemo.overviewRoleStatuses() },
  render: (args) => args.html,
};
