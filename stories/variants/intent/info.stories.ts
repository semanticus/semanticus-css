import type { Meta, StoryObj } from "@storybook/html-vite";
import { GhostDemo, SubtleDemo } from "@demos/variants/modifiers";
import { InfoDemo } from "@demos/overviews/variants/intent";

const meta: Meta = {
  title: "Variants/Intent/Info",
  parameters: {},
};

export default meta;

export const links: StoryObj = {
  render: () => InfoDemo.links(),
};

export const buttons: StoryObj = {
  render: () => InfoDemo.buttons(),
};

export const cards: StoryObj = {
  render: () => InfoDemo.cards(),
};

export const subtleExamples: StoryObj = {
  render: () => SubtleDemo.main({ class: 'info' }),
};

export const ghostExamples: StoryObj = {
  render: () => GhostDemo.main({ class: 'info' }),
};
