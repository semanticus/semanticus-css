import type { Meta, StoryObj } from "@storybook/html-vite";
import { ButtonDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<button>",
};

export default meta;

export const overview: StoryObj = {
  render: () => ButtonDemo.overviewStatesAndModifiers(),
};

export const primary: StoryObj = {
  render: () => ButtonDemo.overviewStatesAndModifiers("primary"),
};

export const secondary: StoryObj = {
  render: () => ButtonDemo.overviewStatesAndModifiers("secondary"),
};

export const contrast: StoryObj = {
  render: () => ButtonDemo.overviewStatesAndModifiers("contrast"),
};

export const success: StoryObj = {
  render: () => ButtonDemo.overviewStatesAndModifiers("success"),
};

export const info: StoryObj = {
  render: () => ButtonDemo.overviewStatesAndModifiers("info"),
};

export const warning: StoryObj = {
  render: () => ButtonDemo.overviewStatesAndModifiers("warning"),
};

export const danger: StoryObj = {
  render: () => ButtonDemo.overviewStatesAndModifiers("danger"),
};
