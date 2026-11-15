import type { Meta, StoryObj } from "@storybook/html-vite";
import { NavigationDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Navigation",
};

export default meta;

export const headings: StoryObj = {
  render: () => NavigationDemo.header(),
};

export const paragraphs: StoryObj = {
  render: () => NavigationDemo.sidebar(),
};

export const address: StoryObj = {
  render: () => NavigationDemo.breadcrumbs(),
};
