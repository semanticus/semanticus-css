import type { Meta, StoryObj } from "@storybook/html-vite";
import { SecondaryDemo, GhostDemo, SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Variants/Intent/Secondary",
  parameters: {},
};

export default meta;

export const links: StoryObj = {
  render: () => SecondaryDemo.overviewLinks(),
};

export const buttons: StoryObj = {
  render: () => SecondaryDemo.overviewButtons(),
};

export const cards: StoryObj = {
  render: () => SecondaryDemo.overviewCards(),
};

export const subtleExamples: StoryObj = {
  render: () => SubtleDemo.overview({ class: 'Secondary' }),
};

export const ghostExamples: StoryObj = {
  render: () => GhostDemo.overview({ class: 'Secondary' }),
};
