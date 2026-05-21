import { FooterDemo } from "@demos/semantics/elements";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Semantics/Elements/<footer>",
};

export default meta;

export const BasicUsage: StoryObj = {
	args: { html: FooterDemo.main() },
	render: (args) => args.html,
};
