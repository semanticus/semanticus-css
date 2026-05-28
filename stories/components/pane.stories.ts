import type { Meta, StoryObj } from "@storybook/html-vite";
import { PaneDemo } from "@demos/components";

const meta: Meta = {
  title: "Components/Pane",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => PaneDemo.main(),
};

export const withHgroup: StoryObj = {
  render: () => PaneDemo.withHgroup("div", { class: "primary" }),
};
