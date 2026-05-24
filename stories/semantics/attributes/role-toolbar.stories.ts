import type { Meta, StoryObj } from "@storybook/html-vite";
import { RoleToolbarDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[role=toolbar]",
  parameters: {},
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: RoleToolbarDemo.main() },
  render: (args) => args.html,
};
