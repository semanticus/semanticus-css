import type { Meta, StoryObj } from "@storybook/html-vite";
import { ListsDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<ul> - <ol> - <dl>",
};

export default meta;

export const unordered: StoryObj = {
  args: { html: ListsDemo.unordered() },
  render: (args) => args.html,
};

export const ordered: StoryObj = {
  args: { html: ListsDemo.ordered() },
  render: (args) => args.html,
};

export const definition: StoryObj = {
  args: { html: ListsDemo.definition() },
  render: (args) => args.html,
};
