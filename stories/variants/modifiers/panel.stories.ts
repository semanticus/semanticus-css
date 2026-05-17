import type { Meta, StoryObj } from "@storybook/html";
import { PanelDemo } from "@demos/variants/modifiers";

const meta: Meta = {
  title: "Variants/Modifiers/Panel",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  render: () => PanelDemo.main(),
};

export const WithHeader: StoryObj = {
  render: () => PanelDemo.withHeader(),
};

export const WithFooter: StoryObj = {
  render: () => PanelDemo.withFooter(),
};

export const WithHeaderAndFooter: StoryObj = {
  render: () => PanelDemo.withHeaderAndFooter(),
};

export const SecondaryBasicUsage: StoryObj = {
  render: () => PanelDemo.main("div", { class: "secondary" }),
};

export const SecondaryWithHeader: StoryObj = {
  render: () => PanelDemo.withHeader("div", { class: "secondary" }),
};

export const SecondaryWithFooter: StoryObj = {
  render: () => PanelDemo.withFooter("div", { class: "secondary" }),
};

export const SecondaryWithHeaderAndFooter: StoryObj = {
  render: () => PanelDemo.withHeaderAndFooter("div", { class: "secondary" }),
};

export const ContrastBasicUsage: StoryObj = {
  render: () => PanelDemo.main("div", { class: "contrast" }),
};

export const ContrastWithHeader: StoryObj = {
  render: () => PanelDemo.withHeader("div", { class: "contrast" }),
};

export const ContrastWithFooter: StoryObj = {
  render: () => PanelDemo.withFooter("div", { class: "contrast" }),
};

export const ContrastWithHeaderAndFooter: StoryObj = {
  render: () => PanelDemo.withHeaderAndFooter("div", { class: "contrast" }),
};
