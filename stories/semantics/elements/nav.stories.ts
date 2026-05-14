import type { Meta, StoryObj } from "@storybook/html";
import { NavDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<nav>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: NavDemo.main() },
  render: (args) => args.html,
};

export const LogoTaglineLinks: StoryObj = {
  args: { html: NavDemo.logoTaglineLinks() },
  render: (args) => args.html,
};

export const SearchDropdownAndLinks: StoryObj = {
  args: { html: NavDemo.searchDropdownAndLinks() },
  render: (args) => args.html,
};

export const CopyrightAndContactUs: StoryObj = {
  args: { html: NavDemo.copyrightAndContactUs() },
  render: (args) => args.html,
};

export const PagesLinks: StoryObj = {
  args: { html: NavDemo.pagesLinks() },
  render: (args) => args.html,
};

export const PageLinks: StoryObj = {
  args: { html: NavDemo.pageLinks() },
  render: (args) => args.html,
};

export const VerticalInAside: StoryObj = {
    args: { html: NavDemo.verticalInAside() },
  render: (args) => args.html,
};

export const Breadcrumbs: StoryObj = {
    args: { html: NavDemo.breadcrumbs() },
  render: (args) => args.html,
};
