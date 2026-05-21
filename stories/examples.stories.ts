import {
	DocumentationPageDemo,
	StarterHtmlTemplateDemo,
} from "@demos/examples";
import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
	title: "Examples",
	tags: ["!autodocs"],
};

export default meta;

export const DocumentationPage: StoryObj = {
	render: () => DocumentationPageDemo.main("div"),
};

export const StarterHtmlTemplate: StoryObj = {
	render: () => StarterHtmlTemplateDemo.main("div"),
};
