import type { Meta, StoryObj } from "@storybook/html";
import { BlockquoteDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<blockquote>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: BlockquoteDemo.basic() },
  render: (args) => args.html,
};

export const WithAttribution: StoryObj = {
  args: { html: BlockquoteDemo.withAttribution() },
  render: (args) => args.html,
};
