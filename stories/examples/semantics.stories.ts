import type { Meta, StoryObj } from "@storybook/html";
import { OverviewDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Examples/Semantics",
  tags: ["!autodocs"],
};

export default meta;

export const Semantics: StoryObj = {
  render: () => OverviewDemo.completeExample(),
};
