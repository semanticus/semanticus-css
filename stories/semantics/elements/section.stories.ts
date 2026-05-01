import type { Meta, StoryObj } from "@storybook/html";
import { SectionDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<section>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: SectionDemo.basic() },
  render: (args) => args.html,
};
