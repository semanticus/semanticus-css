import type { Meta, StoryObj } from "@storybook/html";
import { PaneDemo } from "@demos/components";

const meta: Meta = {
  title: "Variants/Modifiers/Pane",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  render: () => PaneDemo.main(),
};
