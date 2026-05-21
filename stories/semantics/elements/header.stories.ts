import { HeaderDemo } from "@demos/semantics/elements";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Semantics/Elements/<header>",
};

export default meta;

export const BasicUsage: StoryObj = {
	args: { html: HeaderDemo.main() },
	render: (args) => args.html,
};

export const WithSearchDropdownAndLinks: StoryObj = {
	args: { html: HeaderDemo.withSearchDropdownAndLinks() },
	render: (args) => args.html,
};
