import type { Meta, StoryObj } from "@storybook/html-vite";
import { TextDemo } from "@demos/semantics";

const meta: Meta = {
  title: "Composites/Typography",
};

export default meta;

export const headings: StoryObj = {
  render: () => TextDemo.headings(),
};

export const paragraphs: StoryObj = {
  render: () => TextDemo.paragraphs(),
};

export const address: StoryObj = {
  render: () => TextDemo.address(),
};

export const blockquote: StoryObj = {
  render: () => TextDemo.blockquote(),
};

export const codeBlock: StoryObj = {
  render: () => TextDemo.codeBlock(),
};

export const inlineElements: StoryObj = {
  render: () => TextDemo.inlineElements(),
};
