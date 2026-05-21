import { ArticleDemo } from "@demos/semantics/elements";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Semantics/Elements/<article>",
};

export default meta;

export const BasicUsage: StoryObj = {
	args: { html: ArticleDemo.main() },
	render: (args) => args.html,
};
