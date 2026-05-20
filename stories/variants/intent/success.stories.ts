import type { Meta, StoryObj } from "@storybook/html-vite";
import { GhostDemo, SubtleDemo } from "@demos/variants/modifiers";
import { SuccessDemo } from "@demos/overviews/variants/intent";

const meta: Meta = {
  title: "Variants/Intent/Success",
  parameters: {},
};

export default meta;

export const links: StoryObj = {
  render: () => SuccessDemo.links(),
};

export const buttons: StoryObj = {
  render: () => SuccessDemo.buttons(),
};

export const cards: StoryObj = {
  render: () => SuccessDemo.cards(),
};

export const subtleExamples: StoryObj = {
  render: () => SubtleDemo.main({ class: 'success' }),
};

export const ghostExamples: StoryObj = {
  render: () => GhostDemo.main({ class: 'success' }),
};
