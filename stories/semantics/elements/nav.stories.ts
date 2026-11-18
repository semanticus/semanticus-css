import type { Meta, StoryObj } from "@storybook/html-vite";
import { NavDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<nav>",
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: NavDemo.main() },
  render: (args) => args.html,
};

export const horizontalNavigation: StoryObj = {
  args: { html: NavDemo.horizontalNavigation() },
  render: (args) => args.html,
};

export const verticalNavigation: StoryObj = {
  args: { html: NavDemo.verticalNavigation() },
  render: (args) => args.html,
};

export const breadcrumbs: StoryObj = {
  args: { html: NavDemo.breadcrumbs() },
  render: (args) => args.html,
};
