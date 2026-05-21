import { DangerDemo } from "@demos/overviews/variants/intent";
import { GhostDemo, SubtleDemo } from "@demos/variants/modifiers";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Variants/Intent/Danger",
	parameters: {},
};

export default meta;

export const links: StoryObj = {
	render: () => DangerDemo.links(),
};

export const buttons: StoryObj = {
	render: () => DangerDemo.buttons(),
};

export const cards: StoryObj = {
	render: () => DangerDemo.cards(),
};

export const subtleExamples: StoryObj = {
	render: () => SubtleDemo.main({ class: "danger" }),
};

export const ghostExamples: StoryObj = {
	render: () => GhostDemo.main({ class: "danger" }),
};
