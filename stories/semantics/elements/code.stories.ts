import type { Meta, StoryObj } from "@storybook/html";
import { CodeDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<code>",
};

export default meta;

export const InlineCode: StoryObj = {
  args: { html: CodeDemo.inlineCode() },
  render: (args) => args.html,
};

export const CodeBlock: StoryObj = {
  args: { html: CodeDemo.codeBlock() },
  render: (args) => args.html,
};

export const Keyboard: StoryObj = {
  args: { html: CodeDemo.keyboard() },
  render: (args) => args.html,
};

export const Sample: StoryObj = {
  args: { html: CodeDemo.sample() },
  render: (args) => args.html,
};
