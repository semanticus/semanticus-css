import type { Meta, StoryObj } from "@storybook/html-vite";
import { CardDemo } from "@demos/components";
import { IntentDemo, GhostDemo, SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Components/Card",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  render: () => CardDemo.main(),
};

export const WithHeader: StoryObj = {
  render: () => CardDemo.withHeader(),
};

export const WithFooter: StoryObj = {
  render: () => CardDemo.withFooter(),
};

export const WithHeaderAndFooter: StoryObj = {
  render: () => CardDemo.withHeaderAndFooter(),
};

export const intentVariants: StoryObj = {
  args: { html: IntentDemo.overviewCards() },
  render: (args) => args.html,
};

export const subtleModifier: StoryObj = {
  args: { html: SubtleDemo.overviewCards() },
  render: (args) => args.html,
};

export const ghostModifier: StoryObj = {
  args: { html: GhostDemo.overviewCards() },
  render: (args) => args.html,
};
