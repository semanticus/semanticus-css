import type { Meta, StoryObj } from "@storybook/html-vite";
import { PaneDemo } from "@demos/components";

const meta: Meta = {
  title: "Components/Pane",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  render: () => PaneDemo.main(),
};

export const heroSection: StoryObj = {
  render: () => PaneDemo.heroSection({ class: 'primary subtle' }),
};

export const Variants: StoryObj = {
  args: { html: PaneDemo.overviewVariants() },
  render: (args) => args.html,
};
