import type { Meta, StoryObj } from "@storybook/html";
import { TableDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<table>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: TableDemo.basic() },
  render: (args) => args.html,
};
