import { SectionDemo } from "@demos/semantics/elements";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Semantics/Elements/<section>",
};

export default meta;

export const BasicUsage: StoryObj = {
	args: { html: SectionDemo.main() },
	render: (args) => args.html,
};
