import type { Meta, StoryObj } from "@storybook/html";
import { MainDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<main>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: MainDemo.basic() },
  render: (args) => args.html,
};

export const WithHeader: StoryObj = {
  args: { html: MainDemo.withHeader() },
  render: (args) => args.html,
};

export const WithFooter: StoryObj = {
  args: { html: MainDemo.withFooter() },
  render: (args) => args.html,
};

export const WithHeaderPlusFooter: StoryObj = {
  args: { html: MainDemo.withHeaderPlusFooter() },
  render: (args) => args.html,
};

export const WithArticle: StoryObj = {
  args: { html: MainDemo.withArticle() },
  render: (args) => args.html,
};

export const WithHeaderPlusArticle: StoryObj = {
  args: { html: MainDemo.withHeaderPlusArticle() },
  render: (args) => args.html,
};

export const WithArticlePlusFooter: StoryObj = {
  args: { html: MainDemo.withArticlePlusFooter() },
  render: (args) => args.html,
};

export const WithHeaderPlusArticlePlusFooter: StoryObj = {
  args: { html: MainDemo.withHeaderPlusArticlePlusFooter() },
  render: (args) => args.html,
};
