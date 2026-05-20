import type { Meta, StoryObj } from "@storybook/html-vite";
import { LinksDemo } from "@demos/composites";
import { IntentDemo } from '@demos/overviews/variants';

const meta: Meta = {
  title: "Semantics/Attributes/[role=link]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: LinksDemo.roleLinks() },
  render: (args) => args.html,
};

export const intentVariants: StoryObj = {
  args: { html: IntentDemo.roleLinks() },
  render: (args) => args.html,
};
