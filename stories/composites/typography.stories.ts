import type { Meta, StoryObj } from "@storybook/html-vite";
import { TypographyDemo } from "@demos/composites";
import { TextDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Composites/Typography",
};

export default meta;

export const headings: StoryObj = {
  args: { html: TextDemo.headings() },
  render: (args) => args.html,
};

export const paragraphs: StoryObj = {
  args: { html: TextDemo.paragraphs() },
  render: (args) => args.html,
};

export const variants: StoryObj = {
  args: { html: TypographyDemo.overviewVariants() },
  render: (args) => args.html,
};

export const address: StoryObj = {
  args: { html: TextDemo.address() },
  render: (args) => args.html,
};

export const blockquote: StoryObj = {
  args: { html: TextDemo.blockquote() },
  render: (args) => args.html,
};

export const codeBlock: StoryObj = {
  args: { html: TextDemo.codeBlock() },
  render: (args) => args.html,
};

export const inlineElements: StoryObj = {
  args: { html: TextDemo.inlineElements() },
  render: (args) => args.html,
};
