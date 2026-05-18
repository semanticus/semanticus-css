import type { Meta, StoryObj } from "@storybook/html-vite";
import { PanelDemo } from "@demos/components";

const meta: Meta = {
  title: "Variants/Modifiers/Panel",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  render: () => PanelDemo.main(),
};
