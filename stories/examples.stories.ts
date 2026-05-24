import type { Meta, StoryObj } from "@storybook/html-vite";
import { DocumentationPageDemo } from "@demos/examples";
import { StarterHtmlTemplateDemo } from "@demos/examples";

const meta: Meta = {
  title: "Examples",
  tags: ["!autodocs"],
};

export default meta;

export const documentationPage: StoryObj = {
  render: () => DocumentationPageDemo.main("div"),
};

export const starterHtmlTemplate: StoryObj = {
  render: () => StarterHtmlTemplateDemo.main("div"),
};
