import { PaneDemo } from "@demos/components";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Components/Pane",
	parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
	render: () => PaneDemo.main(),
};
