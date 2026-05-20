import type { Meta, StoryObj } from "@storybook/html-vite";
import { ButtonDemo } from "@demos/semantics/elements";
import { GhostDemo, SubtleDemo } from "@demos/overviews/variants/modifiers";
import { IntentDemo } from '@demos/overviews/variants';

const meta: Meta = {
  title: "Semantics/Elements/<button>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: ButtonDemo.main() },
  render: (args) => args.html,
};

export const intentVariants: StoryObj = {
  args: { html: IntentDemo.buttons() },
  render: (args) => args.html,
};

export const subtleModifer: StoryObj = {
  args: { html: SubtleDemo.buttons() },
  render: (args) => args.html,
};

export const ghostModifer: StoryObj = {
  args: { html: GhostDemo.buttons() },
  render: (args) => args.html,
};
