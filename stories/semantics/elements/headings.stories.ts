import type { Meta, StoryObj } from "@storybook/html";
import { HeadingsDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<h1> – <h6>",
};

export default meta;

export const AllLevels: StoryObj = {
  args: { html: HeadingsDemo.allLevels() },
  render: (args) => args.html,
};

export const InContext: StoryObj = {
  args: { html: HeadingsDemo.inContext() },
  render: (args) => args.html,
};
