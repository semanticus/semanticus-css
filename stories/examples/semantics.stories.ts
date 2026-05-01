import type { Meta, StoryObj } from "@storybook/html";
import rawDemoSemanticsHtml from "./semantics.html?raw";

const meta: Meta = {
  title: "Examples/Semantics",
  tags: ["!autodocs"],
};

export default meta;

export const Semantics: StoryObj = {
  render: () => rawDemoSemanticsHtml,
};
