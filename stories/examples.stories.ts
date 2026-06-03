import type { Meta, StoryObj } from "@storybook/html-vite";
import { StarterHtmlTemplateDemo } from "@demos/examples";
import demoPageHtml from "../docs/public/examples/demo-page.html?raw";

const meta: Meta = {
  title: "Examples",
  tags: ["!autodocs"],
};

export default meta;

export const demoPage: StoryObj = {
  render: () => demoPageHtml,
};

export const starterHtmlTemplate: StoryObj = {
  render: () => StarterHtmlTemplateDemo.main("div"),
};
