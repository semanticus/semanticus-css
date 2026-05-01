import type { Meta, StoryObj } from "@storybook/html";
import { ArticleDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<article>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: ArticleDemo.basic() },
  render: (args) => args.html,
};

export const BasicCard: StoryObj = {
  args: { html: ArticleDemo.card() },
  render: (args) => args.html,
};

export const CardWithHeader: StoryObj = {
  args: { html: ArticleDemo.cardWithHeader() },
  render: (args) => args.html,
};

export const CardWithFooter: StoryObj = {
  args: { html: ArticleDemo.cardWithFooter() },
  render: (args) => args.html,
};

export const CompleteCard: StoryObj = {
  args: { html: ArticleDemo.completeCard() },
  render: (args) => args.html,
}
