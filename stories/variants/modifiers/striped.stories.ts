import type { Meta, StoryObj } from "@storybook/html-vite";
import { TableDemo } from "@demos/semantics/elements";
import { CardListDemo } from "@demos/composites";

const meta: Meta = {
  title: "Variants/Modifiers/Striped",
  parameters: {},
};

export default meta;

export const bigTableExample: StoryObj = {
  render: () => TableDemo.bigExample(),
};

export const listExample: StoryObj = {
  render: () => CardListDemo.stripedVariant(),
};

export const divsExample: StoryObj = {
  render: () => CardListDemo.divs({ class: "striped" }),
};

export const ghostExample: StoryObj = {
  render: () => CardListDemo.ghostVariants({ class: "striped" }),
};
