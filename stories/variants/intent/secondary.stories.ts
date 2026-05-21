import { SecondaryDemo } from "@demos/overviews/variants/intent";
import { GhostDemo, SubtleDemo } from "@demos/variants/modifiers";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Variants/Intent/Secondary",
	parameters: {},
};

export default meta;

export const links: StoryObj = {
	render: () => SecondaryDemo.links(),
};

export const buttons: StoryObj = {
	render: () => SecondaryDemo.buttons(),
};

export const cards: StoryObj = {
	render: () => SecondaryDemo.cards(),
};

export const subtleExamples: StoryObj = {
	render: () => SubtleDemo.main({ class: "secondary" }),
};

export const ghostExamples: StoryObj = {
	render: () => GhostDemo.main({ class: "secondary" }),
};
