import type { Meta, StoryObj } from "@storybook/html";
import { DetailsDemo } from "@demos/semantics/elements";

const meta: Meta = {
  title: "Composites/Dropdown",
  parameters: {},
};

export default meta;

export const BasicDropdown: StoryObj = {
  render: () => DetailsDemo.basicDropdown(),
};

export const dropdownWithRadios: StoryObj = {
  render: () => DetailsDemo.dropdownWithRadios(),
};

export const dropdownWithCheckboxes: StoryObj = {
  render: () => DetailsDemo.dropdownWithCheckboxes(),
};

export const dropdownInNav: StoryObj = {
  render: () => DetailsDemo.dropdownInNav(),
};

export const dropdownAsButton: StoryObj = {
  render: () => DetailsDemo.dropdownAsButton(),
};

export const dropdownValidationStates: StoryObj = {
  render: () => DetailsDemo.dropdownValidationStates(),
};
