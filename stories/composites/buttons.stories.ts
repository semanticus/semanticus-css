import type { Meta, StoryObj } from "@storybook/html-vite";
import { ButtonsDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Buttons",
  parameters: {},
};

export default meta;

export const overview: StoryObj = {
  render: () => ButtonsDemo.overviewStatesAndModifiers(),
};

export const primary: StoryObj = {
  render: () => ButtonsDemo.overviewStatesAndModifiers("primary"),
};

export const secondary: StoryObj = {
  render: () => ButtonsDemo.overviewStatesAndModifiers("secondary"),
};

export const contrast: StoryObj = {
  render: () => ButtonsDemo.overviewStatesAndModifiers("contrast"),
};

export const success: StoryObj = {
  render: () => ButtonsDemo.overviewStatesAndModifiers("success"),
};

export const info: StoryObj = {
  render: () => ButtonsDemo.overviewStatesAndModifiers("info"),
};

export const warning: StoryObj = {
  render: () => ButtonsDemo.overviewStatesAndModifiers("warning"),
};

export const danger: StoryObj = {
  render: () => ButtonsDemo.overviewStatesAndModifiers("danger"),
};
