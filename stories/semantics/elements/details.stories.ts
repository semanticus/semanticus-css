import type { Meta, StoryObj } from "@storybook/html-vite";
import { DetailsDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<details>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: DetailsDemo.main() },
  render: (args) => args.html,
};

export const faqExample: StoryObj = {
  args: { html: DetailsDemo.faqExample() },
  render: (args) => args.html,
};
