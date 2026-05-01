import type { Meta, StoryObj } from "@storybook/html";
import { InputDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<input>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: InputDemo.basic() },
  render: (args) => args.html,
};

export const email: StoryObj = {
  args: { html: InputDemo.email() },
  render: (args) => args.html,
};

export const number: StoryObj = {
  args: { html: InputDemo.number() },
  render: (args) => args.html,
};

export const password: StoryObj = {
  args: { html: InputDemo.password() },
  render: (args) => args.html,
};

export const telephone: StoryObj = {
  args: { html: InputDemo.telephone() },
  render: (args) => args.html,
};

export const url: StoryObj = {
  args: { html: InputDemo.url() },
  render: (args) => args.html,
};

export const date: StoryObj = {
  args: { html: InputDemo.date() },
  render: (args) => args.html,
};

export const datetime: StoryObj = {
  args: { html: InputDemo.datetime() },
  render: (args) => args.html,
};

export const month: StoryObj = {
  args: { html: InputDemo.month() },
  render: (args) => args.html,
};

export const time: StoryObj = {
  args: { html: InputDemo.time() },
  render: (args) => args.html,
};

export const search: StoryObj = {
  args: { html: InputDemo.search() },
  render: (args) => args.html,
};

export const color: StoryObj = {
  args: { html: InputDemo.color() },
  render: (args) => args.html,
};

export const file: StoryObj = {
  args: { html: InputDemo.file() },
  render: (args) => args.html,
};

export const checkbox: StoryObj = {
  args: { html: InputDemo.checkbox() },
  render: (args) => args.html,
};

export const horizontalCheckbox: StoryObj = {
  args: { html: InputDemo.horizontalCheckbox() },
  render: (args) => args.html,
};

export const singleCheckbox: StoryObj = {
  args: { html: InputDemo.singleCheckbox() },
  render: (args) => args.html,
};

export const basicRadio: StoryObj = {
  args: { html: InputDemo.basicRadio() },
  render: (args) => args.html,
};

export const horizontalRadio: StoryObj = {
  args: { html: InputDemo.horizontalRadio() },
  render: (args) => args.html,
};

export const basicRange: StoryObj = {
  args: { html: InputDemo.basicRange() },
  render: (args) => args.html,
};

export const rangeWithMinMax: StoryObj = {
  args: { html: InputDemo.rangeWithMinMax() },
  render: (args) => args.html,
};

export const rangeWithStep: StoryObj = {
  args: { html: InputDemo.rangeWithStep() },
  render: (args) => args.html,
};

export const basicSwitch: StoryObj = {
  args: { html: InputDemo.basicSwitch() },
  render: (args) => args.html,
};
