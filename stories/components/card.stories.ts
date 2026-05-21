import { CardDemo } from "@demos/components";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Components/Card",
	parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
	render: () => CardDemo.main(),
};

export const WithHeader: StoryObj = {
	render: () => CardDemo.withHeader(),
};

export const WithFooter: StoryObj = {
	render: () => CardDemo.withFooter(),
};

export const WithHeaderAndFooter: StoryObj = {
	render: () => CardDemo.withHeaderAndFooter(),
};
