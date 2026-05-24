import type { Meta, StoryObj } from "@storybook/html-vite";
import { AriaDisabledDemo } from "@demos/semantics/attributes";

const meta: Meta = {
  title: "Semantics/Attributes/[aria-disabled]",
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: AriaDisabledDemo.overview() },
  render: (args) => args.html,
};
