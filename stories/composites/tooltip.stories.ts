import type { Meta, StoryObj } from "@storybook/html";
import { TooltipDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Tooltip",
  parameters: {},
};

export default meta;

export const BasicTooltip: StoryObj = {
  render: () => TooltipDemo.basicTooltip(),
};
