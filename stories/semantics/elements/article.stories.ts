import type { Meta, StoryObj } from "@storybook/html-vite";
import { ArticleDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<article>",
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: ArticleDemo.main() },
  render: (args) => args.html,
};
