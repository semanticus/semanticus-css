import { PanelDemo } from "@demos/components";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Components/Panel",
	parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
	render: () => PanelDemo.main(),
};
