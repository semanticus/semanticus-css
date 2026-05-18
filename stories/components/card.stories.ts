import type { Meta, StoryObj } from "@storybook/html-vite";
import { CardDemo } from "@demos/components";

const meta: Meta = {
  title: "Components/Card",
  parameters: {},
};

export default meta;

export const BasicUsage: StoryObj = {
  render: () => CardDemo.main(),
};

export const WithHeader: StoryObj = {
  render: () => CardDemo.withHeader(),
};

export const WithFooter: StoryObj = {
  render: () => CardDemo.withFooter(),
};

export const WithHeaderAndFooter: StoryObj = {
  render: () => CardDemo.withHeaderAndFooter(),
};

export const SecondaryBasicUsage: StoryObj = {
  render: () => CardDemo.main("div", { class: "secondary" }),
};

export const SecondaryWithHeader: StoryObj = {
  render: () => CardDemo.withHeader("div", { class: "secondary" }),
};

export const SecondaryWithFooter: StoryObj = {
  render: () => CardDemo.withFooter("div", { class: "secondary" }),
};

export const SecondaryWithHeaderAndFooter: StoryObj = {
  render: () => CardDemo.withHeaderAndFooter("div", { class: "secondary" }),
};

export const ContrastBasicUsage: StoryObj = {
  render: () => CardDemo.main("div", { class: "contrast" }),
};

export const ContrastWithHeader: StoryObj = {
  render: () => CardDemo.withHeader("div", { class: "contrast" }),
};

export const ContrastWithFooter: StoryObj = {
  render: () => CardDemo.withFooter("div", { class: "contrast" }),
};

export const ContrastWithHeaderAndFooter: StoryObj = {
  render: () => CardDemo.withHeaderAndFooter("div", { class: "contrast" }),
};
