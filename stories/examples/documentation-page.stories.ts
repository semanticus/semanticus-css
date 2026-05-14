import type { Meta, StoryObj } from "@storybook/html";
import { DocumentationPageDemo } from "@demos/examples";

const meta: Meta = {
  title: "Examples/DocumentationPage",
  tags: ["!autodocs"],
};

export default meta;

export const DocumentationPage: StoryObj = {
  render: () => DocumentationPageDemo.main("div"),
};
