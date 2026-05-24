import type { Meta, StoryObj } from "@storybook/html-vite";
import { MainDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<main>",
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: MainDemo.main() },
  render: (args) => args.html,
};

export const withHeader: StoryObj = {
  args: { html: MainDemo.withHeader() },
  render: (args) => args.html,
};

export const withFooter: StoryObj = {
  args: { html: MainDemo.withFooter() },
  render: (args) => args.html,
};

export const withHeaderPlusFooter: StoryObj = {
  args: { html: MainDemo.withHeaderPlusFooter() },
  render: (args) => args.html,
};

export const withArticle: StoryObj = {
  args: { html: MainDemo.withArticle() },
  render: (args) => args.html,
};

export const withHeaderPlusArticle: StoryObj = {
  args: { html: MainDemo.withHeaderPlusArticle() },
  render: (args) => args.html,
};

export const withArticlePlusFooter: StoryObj = {
  args: { html: MainDemo.withArticlePlusFooter() },
  render: (args) => args.html,
};

export const withHeaderPlusArticlePlusFooter: StoryObj = {
  args: { html: MainDemo.withHeaderPlusArticlePlusFooter() },
  render: (args) => args.html,
};
