import type { Meta, StoryObj } from "@storybook/html-vite";
import { SectionDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<section>",
};

export default meta;

export const basicUsage: StoryObj = {
  args: { html: SectionDemo.main() },
  render: (args) => args.html,
};
