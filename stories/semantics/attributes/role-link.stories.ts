import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleLinkDemo } from "@demos/semantics/attributes";
import { IntentDemo } from '@demos/overviews/variants';

const meta: Meta = {
  title: "Semantics/Attributes/[role=link]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: RoleLinkDemo.main() },
  render: (args) => args.html,
};

export const intentVariants: StoryObj = {
  args: { html: IntentDemo.roleLinks() },
  render: (args) => args.html,
};
