import { ProgressDemo } from "@demos/semantics/elements";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Semantics/Elements/<progress>",
};

export default meta;

export const BasicUsage: StoryObj = {
	args: { html: ProgressDemo.main() },
	render: (args) => args.html,
};

export const indeterminate: StoryObj = {
	args: { html: ProgressDemo.indeterminate() },
	render: (args) => args.html,
};

export const card: StoryObj = {
	args: { html: ProgressDemo.card() },
	render: (args) => args.html,
};

export const withLabel: StoryObj = {
	args: { html: ProgressDemo.withLabel() },
	render: (args) => args.html,
};
