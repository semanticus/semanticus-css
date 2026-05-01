import type { Meta, StoryObj } from "@storybook/html";
import { FigureDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<figure>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: FigureDemo.basic() },
  render: (args) => args.html,
};

export const WithCode: StoryObj = {
  args: { html: FigureDemo.withCode() },
  render: (args) => args.html,
};
