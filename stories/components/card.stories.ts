import type { Meta, StoryObj } from "@storybook/html-vite";
import { CardDemo } from "@demos/components";

const meta: Meta = {
  title: "Components/Card",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  render: () => CardDemo.main(),
};

export const withHeader: StoryObj = {
  render: () => CardDemo.withHeader(),
};

export const withFooter: StoryObj = {
  render: () => CardDemo.withFooter(),
};

export const withHeaderAndFooter: StoryObj = {
  render: () => CardDemo.withHeaderAndFooter(),
};
