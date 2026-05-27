import type { Meta, StoryObj } from "@storybook/html-vite";
import { LinksDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Links",
  parameters: {},
};

export default meta;

export const overview: StoryObj = {
  render: () => LinksDemo.overviewStatesAndModifiers(),
};

export const primary: StoryObj = {
  render: () => LinksDemo.overviewStatesAndModifiers("primary"),
};

export const secondary: StoryObj = {
  render: () => LinksDemo.overviewStatesAndModifiers("secondary"),
};

export const contrast: StoryObj = {
  render: () => LinksDemo.overviewStatesAndModifiers("contrast"),
};

export const success: StoryObj = {
  render: () => LinksDemo.overviewStatesAndModifiers("success"),
};

export const info: StoryObj = {
  render: () => LinksDemo.overviewStatesAndModifiers("info"),
};

export const warning: StoryObj = {
  render: () => LinksDemo.overviewStatesAndModifiers("warning"),
};

export const danger: StoryObj = {
  render: () => LinksDemo.overviewStatesAndModifiers("danger"),
};
