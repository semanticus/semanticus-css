import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleButtonDemo, DetailsDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Semantics/Elements/<details>",
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => DetailsDemo.main(),
};

export const entangledAccordions: StoryObj = {
  render: () => DetailsDemo.entangledAccordions(),
};
export const faqExample: StoryObj = {
  render: () => DetailsDemo.faqExample(),
};
export const asButton: StoryObj = {
  render: () => DetailsDemo.asButton(),
};
export const asButtonIntentVariants: StoryObj = {
  render: () => DetailsDemo.asButtonIntentVariants(),
};
export const asButtonGhostVariants: StoryObj = {
  render: () => DetailsDemo.asButtonGhostVariants(),
};
export const asButtonSubtleVariants: StoryObj = {
  render: () => DetailsDemo.asButtonSubtleVariants(),
};
