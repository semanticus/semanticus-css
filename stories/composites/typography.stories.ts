import type { Meta, StoryObj } from "@storybook/html-vite";
import { TypographyDemo } from "@demos/composites";
import { TextDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Composites/Typography",
};

export default meta;

export const Headings: StoryObj = {
  args: { html: TextDemo.headings() },
  render: (args) => args.html,
};

export const Paragraphs: StoryObj = {
  args: { html: TextDemo.paragraphs() },
  render: (args) => args.html,
};

export const Variants: StoryObj = {
  args: { html: TypographyDemo.overviewVariants() },
  render: (args) => args.html,
};

export const Address: StoryObj = {
  args: { html: TextDemo.address() },
  render: (args) => args.html,
};

export const Blockquote: StoryObj = {
  args: { html: TextDemo.blockquote() },
  render: (args) => args.html,
};

export const CodeBlock: StoryObj = {
  args: { html: TextDemo.codeBlock() },
  render: (args) => args.html,
};

export const InlineElements: StoryObj = {
  args: { html: TextDemo.inlineElements() },
  render: (args) => args.html,
};
