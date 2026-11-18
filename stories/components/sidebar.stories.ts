import type { Meta, StoryObj } from "@storybook/html-vite";
import { SidebarDemo } from "@demos/components";

const meta: Meta = {
  title: "Components/Sidebar",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => SidebarDemo.main(),
};

export const stickyBehavior: StoryObj = {
  render: () => SidebarDemo.stickyBehavior(),
};

export const popoverExample: StoryObj = {
  render: () => SidebarDemo.popoverExample(),
};

export const popoverFromTheRightExample: StoryObj = {
  render: () => SidebarDemo.popoverExample({ 'data-placement': 'right' }),
};
