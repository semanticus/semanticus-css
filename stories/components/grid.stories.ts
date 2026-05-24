import type { Meta, StoryObj } from "@storybook/html-vite";
import { GridDemo } from "@demos/components";

const meta: Meta = {
  title: "Components/Grid",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => GridDemo.main(),
};
