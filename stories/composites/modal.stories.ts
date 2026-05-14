import type { Meta, StoryObj } from "@storybook/html";
import { ModalDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Modal",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  render: () => ModalDemo.main(),
};

export const WithHeaderAndFooter: StoryObj = {
  render: () => ModalDemo.withHeaderAndFooter(),
};
