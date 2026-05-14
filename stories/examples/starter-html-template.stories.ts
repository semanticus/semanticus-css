import type { Meta, StoryObj } from "@storybook/html";
import { StarterHtmlTemplateDemo } from "@demos/examples";

const meta: Meta = {
  title: "Examples/StarterHtmlTemplate",
  tags: ["!autodocs"],
};

export default meta;

export const StarterHtmlTemplate: StoryObj = {
  render: () => StarterHtmlTemplateDemo.main("div"),
};
