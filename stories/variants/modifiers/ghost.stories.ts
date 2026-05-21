import { GhostDemo } from "@demos/overviews/variants/modifiers";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Variants/Modifiers/Ghost",
	parameters: {},
};

export default meta;

export const ButtonExample: StoryObj = {
	render: () => GhostDemo.buttons(),
};

export const InputButtons: StoryObj = {
	render: () => GhostDemo.inputButtons(),
};

export const RoleButtons: StoryObj = {
	render: () => GhostDemo.roleButtons(),
};

export const Dropdowns: StoryObj = {
	render: () => GhostDemo.dropdowns(),
};

export const Accordions: StoryObj = {
	render: () => GhostDemo.accordions(),
};

export const Cards: StoryObj = {
	render: () => GhostDemo.cardsWithHeaderAndFooter(),
};
