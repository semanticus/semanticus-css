import type { Meta, StoryObj } from "@storybook/html-vite";
import { HiddenDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[hidden]",
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: HiddenDemo.main() },
  render: (args) => args.html,
};
