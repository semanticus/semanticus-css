import { TextareaDemo } from "@demos/semantics/elements";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Semantics/Elements/<textarea>",
};

export default meta;

export const BasicUsage: StoryObj = {
	args: { html: TextareaDemo.main() },
	render: (args) => args.html,
};

export const withRows: StoryObj = {
	args: { html: TextareaDemo.withRows() },
	render: (args) => args.html,
};

export const withLabel: StoryObj = {
	args: { html: TextareaDemo.withLabel() },
	render: (args) => args.html,
};

export const withHelperText: StoryObj = {
	args: { html: TextareaDemo.withHelperText() },
	render: (args) => args.html,
};

export const validationStates: StoryObj = {
	args: { html: TextareaDemo.validationStates() },
	render: (args) => args.html,
};

export const validationStatesWithTextHelper: StoryObj = {
	args: { html: TextareaDemo.validationStatesWithTextHelper() },
	render: (args) => args.html,
};
