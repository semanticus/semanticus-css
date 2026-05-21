import { HrDemo } from "@demos/semantics/elements";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Semantics/Elements/<hr>",
};

export default meta;

export const BasicUsage: StoryObj = {
	args: { html: HrDemo.main() },
	render: (args) => args.html,
};
