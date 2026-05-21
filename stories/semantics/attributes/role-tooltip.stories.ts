import { RoleTooltipDemo } from "@demos/semantics/attributes";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Semantics/Attributes/[role=tooltip]",
	parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
	args: { html: RoleTooltipDemo.main() },
	render: (args) => args.html,
};

export const placement: StoryObj = {
	args: { html: RoleTooltipDemo.placement() },
	render: (args) => args.html,
};
