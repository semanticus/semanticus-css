import type { Meta, StoryObj } from "@storybook/html";
import { LoadingDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Loading",
  parameters: {},
};

export default meta;

export const LoadingCard: StoryObj = {
  render: () => LoadingDemo.loadingCard(),
};

export const LoadingButton: StoryObj = {
  render: () => LoadingDemo.loadingButton(),
};

export const LoadingWithProgress: StoryObj = {
  render: () => LoadingDemo.loadingWithProgress(),
};
