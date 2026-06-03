import type { Meta, StoryObj } from "@storybook/html-vite";
import { UlDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Composites/Card List",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => UlDemo.cardList(),
};
export const intentVariants: StoryObj = {
  render: () => UlDemo.cardListIntentVariants(),
};
export const ghostIntentVariants: StoryObj = {
  render: () => UlDemo.cardListIntentVariants({}, "ghost"),
};
export const subtleIntentVariants: StoryObj = {
  render: () => UlDemo.cardListIntentVariants({}, "subtle"),
};
export const stripedSubtleIntentVariants: StoryObj = {
  render: () => UlDemo.cardListIntentVariants({}, "subtle striped"),
};
export const overviewCardListItemIntentVariants: StoryObj = {
  render: () => UlDemo.overviewCardListItemIntentVariants(),
};
