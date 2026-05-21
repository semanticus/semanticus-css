import { TypographyDemo } from "@demos/semantics";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Semantics/Typography",
};

export default meta;

export const Headings: StoryObj = {
	args: { html: TypographyDemo.headings() },
	render: (args) => args.html,
};

export const Address: StoryObj = {
	args: { html: TypographyDemo.address() },
	render: (args) => args.html,
};

export const Blockquote: StoryObj = {
	args: { html: TypographyDemo.blockquote() },
	render: (args) => args.html,
};

export const CodeBlock: StoryObj = {
	args: { html: TypographyDemo.codeBlock() },
	render: (args) => args.html,
};

export const Paragraphs: StoryObj = {
	args: { html: TypographyDemo.paragraphs() },
	render: (args) => args.html,
};

export const InlineElements: StoryObj = {
	args: { html: TypographyDemo.inlineElements() },
	render: (args) => args.html,
};
