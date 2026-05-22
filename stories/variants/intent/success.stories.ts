import type { Meta, StoryObj } from "@storybook/html-vite";
import { SuccessDemo, GhostDemo, SubtleDemo } from "@demos/variants";

const meta: Meta = {
  title: "Variants/Intent/Success",
  parameters: {},
};

export default meta;

export const links: StoryObj = {
  render: () => SuccessDemo.overviewLinks(),
};

export const buttons: StoryObj = {
  render: () => SuccessDemo.overviewButtons(),
};

export const cards: StoryObj = {
  render: () => SuccessDemo.overviewCards(),
};

export const subtleExamples: StoryObj = {
  render: () => SubtleDemo.overview({ class: 'success' }),
};

export const ghostExamples: StoryObj = {
  render: () => GhostDemo.overview({ class: 'success' }),
};
