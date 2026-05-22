import type { Meta, StoryObj } from "@storybook/html-vite";
import { DropdownDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Dropdown",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  render: () => DropdownDemo.main(),
};

export const Variants: StoryObj = {
  render: () => DropdownDemo.overviewVariants(),
};
