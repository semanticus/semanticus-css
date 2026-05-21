import { WarningDemo } from "@demos/overviews/variants/intent";
import { GhostDemo, SubtleDemo } from "@demos/variants/modifiers";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Variants/Intent/Warning",
	parameters: {},
};

export default meta;

export const links: StoryObj = {
	render: () => WarningDemo.links(),
};

export const buttons: StoryObj = {
	render: () => WarningDemo.buttons(),
};

export const cards: StoryObj = {
	render: () => WarningDemo.cards(),
};

export const subtleExamples: StoryObj = {
	render: () => SubtleDemo.main({ class: "warning" }),
};

export const ghostExamples: StoryObj = {
	render: () => GhostDemo.main({ class: "warning" }),
};
