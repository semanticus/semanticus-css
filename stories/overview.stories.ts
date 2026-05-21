import { Demo } from "@demos/overviews";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Overview",
	tags: ["!autodocs"],
};

export default meta;

export const FullBundle: StoryObj = {
	render: () => Demo.fullBundle(),
};

export const FullBundleColors: StoryObj = {
	render: () => Demo.fullBundleColors(),
};
