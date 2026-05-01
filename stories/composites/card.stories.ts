import type { Meta, StoryObj } from "@storybook/html";
import { CardDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Card",
  parameters: {},
};

export default meta;

export const BasicCard: StoryObj = {
  render: () => CardDemo.basicCard(),
};
