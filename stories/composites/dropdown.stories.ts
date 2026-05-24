import type { Meta, StoryObj } from "@storybook/html-vite";
import { DropdownDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Dropdown",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => DropdownDemo.main(),
};

export const variants: StoryObj = {
  render: () => DropdownDemo.overviewVariants(),
};
