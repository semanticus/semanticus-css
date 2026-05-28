import type { Meta, StoryObj } from "@storybook/html-vite";
import { AccordionsDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Accordions",
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => AccordionsDemo.main(),
};

export const entangledAccordions: StoryObj = {
  render: () => AccordionsDemo.entangledAccordions(),
};

export const faqExample: StoryObj = {
  render: () => AccordionsDemo.faqExample(),
};

export const asButton: StoryObj = {
  render: () => AccordionsDemo.asButton(),
};

export const asButtonIntentVariants: StoryObj = {
  render: () => AccordionsDemo.asButtonIntentVariants(),
};

export const asButtonGhostVariants: StoryObj = {
  render: () => AccordionsDemo.asButtonGhostVariants(),
};

export const asButtonSubtleVariants: StoryObj = {
  render: () => AccordionsDemo.asButtonSubtleVariants(),
};
