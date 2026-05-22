import type { Meta, StoryObj } from "@storybook/html-vite";
import { ContrastDemo, GhostDemo, SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Variants/Intent/Contrast",
  parameters: {},
};

export default meta;

export const links: StoryObj = {
  render: () => ContrastDemo.overviewLinks(),
};

export const buttons: StoryObj = {
  render: () => ContrastDemo.overviewButtons(),
};

export const cards: StoryObj = {
  render: () => ContrastDemo.overviewCards(),
};

export const subtleExamples: StoryObj = {
  render: () => SubtleDemo.overview({ class: 'contrast' }),
};

export const ghostExamples: StoryObj = {
  render: () => GhostDemo.overview({ class: 'contrast' }),
};
