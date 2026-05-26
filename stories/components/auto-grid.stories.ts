import type { Meta, StoryObj } from "@storybook/html-vite";
import { GridDemo } from "@demos/components";

const meta: Meta = {
  title: "Components/Auto Grid",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => GridDemo.main(),
};
