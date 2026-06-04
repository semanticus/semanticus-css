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

export const logoTaglineLinks: StoryObj = {
  args: { html: NavDemo.logoTaglineLinks() },
  render: (args) => args.html,
};

export const searchAndDropdownExample: StoryObj = {
  args: { html: NavDemo.searchAndDropdownExample() },
  render: (args) => args.html,
};

export const copyrightAndContactUs: StoryObj = {
  args: { html: NavDemo.copyrightAndContactUs() },
  render: (args) => args.html,
};

export const pagesLinks: StoryObj = {
  args: { html: NavDemo.pagesLinks() },
  render: (args) => args.html,
};

export const pageLinks: StoryObj = {
  args: { html: NavDemo.pageLinks() },
  render: (args) => args.html,
};

export const sidebarExample: StoryObj = {
  args: { html: NavDemo.sidebarExample() },
  render: (args) => args.html,
};

export const breadcrumbs: StoryObj = {
  args: { html: NavDemo.breadcrumbs() },
  render: (args) => args.html,
};
