import type { Meta, StoryObj } from "@storybook/html-vite";
import { InfoDemo, GhostDemo, SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Variants/Intent/Info",
  parameters: {},
};

export default meta;

export const links: StoryObj = {
  render: () => InfoDemo.overviewLinks(),
};

export const buttons: StoryObj = {
  render: () => InfoDemo.overviewButtons(),
};

export const cards: StoryObj = {
  render: () => InfoDemo.overviewCards(),
};

export const subtleExamples: StoryObj = {
  render: () => SubtleDemo.overview({ class: 'info' }),
};

export const ghostExamples: StoryObj = {
  render: () => GhostDemo.overview({ class: 'info' }),
};
