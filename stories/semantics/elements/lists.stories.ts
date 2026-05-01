import type { Meta, StoryObj } from "@storybook/html";
import { ListsDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<ul> - <ol> - <dl>",
};

export default meta;

export const Unordered: StoryObj = {
  args: { html: ListsDemo.unordered() },
  render: (args) => args.html,
};

export const Ordered: StoryObj = {
  args: { html: ListsDemo.ordered() },
  render: (args) => args.html,
};

export const Definition: StoryObj = {
  args: { html: ListsDemo.definition() },
  render: (args) => args.html,
};
