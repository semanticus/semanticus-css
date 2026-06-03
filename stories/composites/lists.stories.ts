import type { Meta, StoryObj } from "@storybook/html-vite";
import { ListsDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Lists",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => ListsDemo.overview(),
};
