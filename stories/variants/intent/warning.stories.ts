import type { Meta, StoryObj } from "@storybook/html-vite";
import { WarningDemo, GhostDemo, SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Variants/Intent/Warning",
  parameters: {},
};

export default meta;

export const links: StoryObj = {
  render: () => WarningDemo.overviewLinks(),
};

export const buttons: StoryObj = {
  render: () => WarningDemo.overviewButtons(),
};

export const cards: StoryObj = {
  render: () => WarningDemo.overviewCards(),
};

export const subtleExamples: StoryObj = {
  render: () => SubtleDemo.overview({ class: 'warning' }),
};

export const ghostExamples: StoryObj = {
  render: () => GhostDemo.overview({ class: 'warning' }),
};
