import type { Meta, StoryObj } from "@storybook/html-vite";
import { PaneDemo } from "@demos/components";
import { IntentDemo, GhostDemo, SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Components/Pane",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  render: () => PaneDemo.main(),
};

export const heroSection: StoryObj = {
  render: () => PaneDemo.heroSection(),
};

export const intentVariants: StoryObj = {
  args: { html: IntentDemo.overviewPanes() },
  render: (args) => args.html,
};

export const subtleModifier: StoryObj = {
  args: { html: SubtleDemo.overviewPanes() },
  render: (args) => args.html,
};

export const ghostModifier: StoryObj = {
  args: { html: GhostDemo.overviewPanes() },
  render: (args) => args.html,
};
