import type { Meta, StoryObj } from "@storybook/html-vite";
import { PrimaryDemo, GhostDemo, SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Variants/Intent/Primary",
  parameters: {},
};

export default meta;

export const links: StoryObj = {
  render: () => PrimaryDemo.overviewLinks(),
};

export const buttons: StoryObj = {
  render: () => PrimaryDemo.overviewButtons(),
};

export const cards: StoryObj = {
  render: () => PrimaryDemo.overviewCards(),
};

export const subtleExamples: StoryObj = {
  render: () => SubtleDemo.overview({ class: 'Primary' }),
};

export const ghostExamples: StoryObj = {
  render: () => GhostDemo.overview({ class: 'Primary' }),
};
