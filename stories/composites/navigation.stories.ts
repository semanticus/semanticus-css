import type { Meta, StoryObj } from "@storybook/html-vite";
import { NavigationDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Navigation",
};

export default meta;

export const topBar: StoryObj = {
  render: () => NavigationDemo.topBar(),
};

export const sidebar: StoryObj = {
  render: () => NavigationDemo.sidebar(),
};

export const bottomBar: StoryObj = {
  render: () => NavigationDemo.bottomBar(),
};

export const pageTitleAndControls: StoryObj = {
  render: () => NavigationDemo.pageTitleAndControls(),
};

export const breadcrumbs: StoryObj = {
  render: () => NavigationDemo.breadcrumbs(),
};

export const formControls: StoryObj = {
  render: () => NavigationDemo.formControls(),
};
