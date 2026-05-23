import type { Meta, StoryObj } from "@storybook/html-vite";
import { SearchDemo } from "@demos/composites";

const meta: Meta = {
  title: "Semantics/Attributes/[role=search]",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: SearchDemo.main() },
  render: (args) => args.html,
};

export const withIconButton: StoryObj = {
  args: { html: SearchDemo.withIconButton() },
  render: (args) => args.html,
};

export const filterSearch: StoryObj = {
  args: { html: SearchDemo.filterSearch() },
  render: (args) => args.html,
};
