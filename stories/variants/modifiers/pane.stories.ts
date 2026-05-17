import type { Meta, StoryObj } from "@storybook/html";
import { PaneDemo } from "@demos/variants/modifiers";

const meta: Meta = {
  title: "Variants/Modifiers/Pane",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  render: () => PaneDemo.main(),
};

export const WithHeader: StoryObj = {
  render: () => PaneDemo.withHeader(),
};

export const WithFooter: StoryObj = {
  render: () => PaneDemo.withFooter(),
};

export const WithHeaderAndFooter: StoryObj = {
  render: () => PaneDemo.withHeaderAndFooter(),
};

export const SecondaryBasicUsage: StoryObj = {
  render: () => PaneDemo.main("div", { class: "secondary" }),
};

export const SecondaryWithHeader: StoryObj = {
  render: () => PaneDemo.withHeader("div", { class: "secondary" }),
};

export const SecondaryWithFooter: StoryObj = {
  render: () => PaneDemo.withFooter("div", { class: "secondary" }),
};

export const SecondaryWithHeaderAndFooter: StoryObj = {
  render: () => PaneDemo.withHeaderAndFooter("div", { class: "secondary" }),
};

export const ContrastBasicUsage: StoryObj = {
  render: () => PaneDemo.main("div", { class: "contrast" }),
};

export const ContrastWithHeader: StoryObj = {
  render: () => PaneDemo.withHeader("div", { class: "contrast" }),
};

export const ContrastWithFooter: StoryObj = {
  render: () => PaneDemo.withFooter("div", { class: "contrast" }),
};

export const ContrastWithHeaderAndFooter: StoryObj = {
  render: () => PaneDemo.withHeaderAndFooter("div", { class: "contrast" }),
};
