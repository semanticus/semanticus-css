import type { Meta, StoryObj } from "@storybook/html-vite";
import { ADemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<a>",
};

export default meta;

export const overview: StoryObj = {
  render: () => ADemo.overviewStatesAndModifiers(),
};

export const primary: StoryObj = {
  render: () => ADemo.overviewStatesAndModifiers("primary"),
};

export const secondary: StoryObj = {
  render: () => ADemo.overviewStatesAndModifiers("secondary"),
};

export const contrast: StoryObj = {
  render: () => ADemo.overviewStatesAndModifiers("contrast"),
};

export const success: StoryObj = {
  render: () => ADemo.overviewStatesAndModifiers("success"),
};

export const info: StoryObj = {
  render: () => ADemo.overviewStatesAndModifiers("info"),
};

export const warning: StoryObj = {
  render: () => ADemo.overviewStatesAndModifiers("warning"),
};

export const danger: StoryObj = {
  render: () => ADemo.overviewStatesAndModifiers("danger"),
};
