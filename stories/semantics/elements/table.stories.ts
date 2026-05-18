import type { Meta, StoryObj } from "@storybook/html-vite";
import { TableDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<table>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: TableDemo.main() },
  render: (args) => args.html,
};
