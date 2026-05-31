import type { Meta, StoryObj } from "@storybook/html-vite";
import {
  AllButtonsVariationsDemo,
  AllCardGroupsVariationsDemo,
  AllCardListsVariationsDemo,
  AllCardsVariationsDemo,
  AllComponentsDemo,
  AllInputsVariationsDemo,
  AllLinksVariationsDemo,
  NestedVariationsDemo,
  VariantsDemo,
  UtilitiesColorsDemo,
} from "@demos/overview";

const meta: Meta = {
  title: "Overview",
  tags: ["!autodocs"],
};

export default meta;

export const allComponents: StoryObj = {
  render: () => AllComponentsDemo.main(),
};

export const variants: StoryObj = {
  render: () => VariantsDemo.main(),
};

export const nestedVariations: StoryObj = {
  render: () => NestedVariationsDemo.main(),
};

export const allButtonsVariations: StoryObj = {
  render: () => AllButtonsVariationsDemo.main(),
};

export const allInputsVariations: StoryObj = {
  render: () => AllInputsVariationsDemo.main(),
};

export const allCardsVariations: StoryObj = {
  render: () => AllCardsVariationsDemo.main(),
};

export const allCardListsVariations: StoryObj = {
  render: () => AllCardListsVariationsDemo.main(),
};

export const allCardGroupsVariations: StoryObj = {
  render: () => AllCardGroupsVariationsDemo.main(),
};

export const allLinksVariations: StoryObj = {
  render: () => AllLinksVariationsDemo.main(),
};

export const utilitiesColors: StoryObj = {
  render: () => UtilitiesColorsDemo.main(),
};
