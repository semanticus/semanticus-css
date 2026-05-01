import type { Meta, StoryObj } from "@storybook/html";
import { HeaderDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<header>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: HeaderDemo.basic() },
  render: (args) => args.html,
};

export const WithSearchDropdownAndLinks: StoryObj = {
  args: { html: HeaderDemo.withSearchDropdownAndLinks() },
  render: (args) => args.html,
};
