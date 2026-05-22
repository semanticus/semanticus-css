import type { Meta, StoryObj } from "@storybook/html-vite";
import { ButtonDemo } from "@demos/semantics/elements";
import { IntentDemo, GhostDemo, SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Semantics/Elements/<button>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: ButtonDemo.main() },
  render: (args) => args.html,
};

export const intentVariants: StoryObj = {
  args: { html: IntentDemo.overviewButtons() },
  render: (args) => args.html,
};

export const subtleModifier: StoryObj = {
  args: { html: SubtleDemo.overviewButtons() },
  render: (args) => args.html,
};

export const ghostModifier: StoryObj = {
  args: { html: GhostDemo.overviewButtons() },
  render: (args) => args.html,
};
