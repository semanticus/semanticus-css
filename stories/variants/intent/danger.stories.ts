import type { Meta, StoryObj } from "@storybook/html-vite";
import { DangerDemo, GhostDemo, SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Variants/Intent/Danger",
  parameters: {},
};

export default meta;

export const links: StoryObj = {
  render: () => DangerDemo.overviewLinks(),
};

export const buttons: StoryObj = {
  render: () => DangerDemo.overviewButtons(),
};

export const cards: StoryObj = {
  render: () => DangerDemo.overviewCards(),
};

export const subtleExamples: StoryObj = {
  render: () => SubtleDemo.overview({ class: 'Danger' }),
};

export const ghostExamples: StoryObj = {
  render: () => GhostDemo.overview({ class: 'Danger' }),
};
