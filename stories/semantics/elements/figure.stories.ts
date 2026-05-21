import type { Meta, StoryObj } from "@storybook/html-vite";
import { FigureDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<figure>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: FigureDemo.main() },
  render: (args) => args.html,
};

export const WithCode: StoryObj = {
  args: { html: FigureDemo.withCode() },
  render: (args) => args.html,
};
