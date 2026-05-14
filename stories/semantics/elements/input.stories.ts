import type { Meta, StoryObj } from "@storybook/html";
import { InputDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<input>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: InputDemo.main() },
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

export const checkboxBasicUsage: StoryObj = {
  args: { html: InputDemo.checkboxBasic() },
  render: (args) => args.html,
};

export const checkboxVerticalStack: StoryObj = {
  args: { html: InputDemo.checkboxVertical() },
  render: (args) => args.html,
};

export const checkboxHorizontalStack: StoryObj = {
  args: { html: InputDemo.checkboxHorizontal() },
  render: (args) => args.html,
};

export const radioBasicUsage: StoryObj = {
  args: { html: InputDemo.radioBasic() },
  render: (args) => args.html,
};

export const radioVerticalStack: StoryObj = {
  args: { html: InputDemo.radioVertical() },
  render: (args) => args.html,
};

export const radioHorizontalStack: StoryObj = {
  args: { html: InputDemo.radioHorizontal() },
  render: (args) => args.html,
};

export const rangeBasicUsage: StoryObj = {
  args: { html: InputDemo.rangeBasic() },
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

export const switchBasicUsage: StoryObj = {
  args: { html: InputDemo.switchBasic() },
  render: (args) => args.html,
};
