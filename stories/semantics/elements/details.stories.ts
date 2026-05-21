import type { Meta, StoryObj } from "@storybook/html-vite";
import { DetailsDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Semantics/Elements/<details>",
};

export default meta;

export const BasicUsage: StoryObj = {
  args: { html: DetailsDemo.main() },
  render: (args) => args.html,
};

export const basicDropdown: StoryObj = {
  args: { html: DetailsDemo.basicDropdown() },
  render: (args) => args.html,
};

export const dropdownWithRadios: StoryObj = {
  args: { html: DetailsDemo.dropdownWithRadios() },
  render: (args) => args.html,
};

export const dropdownWithCheckboxes: StoryObj = {
  args: { html: DetailsDemo.dropdownWithCheckboxes() },
  render: (args) => args.html,
};

export const dropdownAsButton: StoryObj = {
  args: { html: DetailsDemo.dropdownAsButton() },
  render: (args) => args.html,
};

export const dropdownValidationStates: StoryObj = {
  args: { html: DetailsDemo.dropdownValidationStates() },
  render: (args) => args.html,
};

export const dropdownInNav: StoryObj = {
  args: { html: DetailsDemo.dropdownInNav() },
  render: (args) => args.html,
};

export const faqExample: StoryObj = {
  args: { html: DetailsDemo.faqExample() },
  render: (args) => args.html,
};
