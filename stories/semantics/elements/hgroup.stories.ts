import { HgroupDemo } from "@demos/semantics/elements";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Semantics/Elements/<hgroup>",
};

export default meta;

export const BasicUsage: StoryObj = {
	args: { html: HgroupDemo.main() },
	render: (args) => args.html,
};
