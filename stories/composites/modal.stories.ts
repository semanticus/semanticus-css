import type { Meta, StoryObj } from "@storybook/html";
import { ModalDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Modal",
  parameters: {},
};

export default meta;

export const BasicModal: StoryObj = {
  render: () => ModalDemo.basicModal(),
};

export const WithFooter: StoryObj = {
  render: () => ModalDemo.withFooter(),
};

export const CssOnlyModal: StoryObj = {
  render: () => ModalDemo.cssOnlyModal(),
};
