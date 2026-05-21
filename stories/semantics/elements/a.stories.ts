import type { Meta, StoryObj } from "@storybook/html-vite";
import { ADemo } from "@demos/semantics/elements";
import { IntentDemo } from '@demos/variants';

const meta: Meta = {
  title: "Semantics/Elements/<a>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: ADemo.main() },
  render: (args) => args.html,
};

export const Active: StoryObj = {
  args: { html: ADemo.active() },
  render: (args) => args.html,
};

export const intentVariants: StoryObj = {
  args: { html: IntentDemo.anchors() },
  render: (args) => args.html,
};
