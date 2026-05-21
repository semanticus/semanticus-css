import { ContrastDemo } from "@demos/overviews/variants/intent";
import { GhostDemo, SubtleDemo } from "@demos/variants/modifiers";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Variants/Intent/Contrast",
	parameters: {},
};

export default meta;

export const links: StoryObj = {
	render: () => ContrastDemo.links(),
};

export const buttons: StoryObj = {
	render: () => ContrastDemo.buttons(),
};

export const cards: StoryObj = {
	render: () => ContrastDemo.cards(),
};

export const subtleExamples: StoryObj = {
	render: () => SubtleDemo.main({ class: "contrast" }),
};

export const ghostExamples: StoryObj = {
	render: () => GhostDemo.main({ class: "contrast" }),
};
