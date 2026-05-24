import type { Meta, StoryObj } from "@storybook/html-vite";
import { EmbeddedDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<img> - <video> - <audio>",
};

export default meta;

export const image: StoryObj = {
  args: { html: EmbeddedDemo.image() },
  render: (args) => args.html,
};

export const responsiveImage: StoryObj = {
  args: { html: EmbeddedDemo.responsiveImage() },
  render: (args) => args.html,
};
