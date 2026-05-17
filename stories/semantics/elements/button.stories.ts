import type { Meta, StoryObj } from "@storybook/html";
import { ButtonDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<button>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: ButtonDemo.main() },
  render: (args) => args.html,
};
