import type { Meta, StoryObj } from "@storybook/html-vite";
import { GhostDemo, SubtleDemo } from "@demos/variants/modifiers";
import { PrimaryDemo } from "@demos/overviews/variants/intent";

const meta: Meta = {
  title: "Variants/Intent/Primary",
  parameters: {},
};

export default meta;

export const links: StoryObj = {
  render: () => PrimaryDemo.links(),
};

export const buttons: StoryObj = {
  render: () => PrimaryDemo.buttons(),
};

export const cards: StoryObj = {
  render: () => PrimaryDemo.cards(),
};

export const subtleExamples: StoryObj = {
  render: () => SubtleDemo.main({ class: 'primary' }),
};

export const ghostExamples: StoryObj = {
  render: () => GhostDemo.main({ class: 'primary' }),
};
