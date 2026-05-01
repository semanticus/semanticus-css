import type { Meta, StoryObj } from "@storybook/html";
import { AddressDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<address>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: AddressDemo.basic() },
  render: (args) => args.html,
};

export const ContactInfo: StoryObj = {
  args: { html: AddressDemo.contactInfo() },
  render: (args) => args.html,
};
