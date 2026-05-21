import { AriaBusyDemo } from "@demos/semantics/attributes";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Semantics/Attributes/[aria-busy]",
	parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
	args: { html: AriaBusyDemo.main() },
	render: (args) => args.html,
};

export const button: StoryObj = {
	args: { html: AriaBusyDemo.button() },
	render: (args) => args.html,
};

export const card: StoryObj = {
	args: { html: AriaBusyDemo.card() },
	render: (args) => args.html,
};

export const form: StoryObj = {
	args: { html: AriaBusyDemo.form() },
	render: (args) => args.html,
};
