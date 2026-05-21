import { TableDemo } from "@demos/semantics/elements";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Semantics/Elements/<table>",
};

export default meta;

export const BasicUsage: StoryObj = {
	args: { html: TableDemo.main() },
	render: (args) => args.html,
};
