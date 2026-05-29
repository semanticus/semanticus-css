import type { Meta, StoryObj } from "@storybook/html-vite";
import {
  AllButtonsStatesAndVariantsDemo,
  AllCardGroupsAndVariantsDemo,
  AllCardListsAndVariantsDemo,
  AllCardsAndVariantsDemo,
  AllComponentsDemo,
  AllLinksStatesAndVariantsDemo,
  StatesAndVariantsDemo,
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

export const statesAndVariants: StoryObj = {
  render: () => StatesAndVariantsDemo.main(),
};

export const allButtonsStatesVariants: StoryObj = {
  render: () => AllButtonsStatesAndVariantsDemo.main(),
};

export const allCardsAndVariants: StoryObj = {
  render: () => AllCardsAndVariantsDemo.main(),
};

export const allCardListsAndVariants: StoryObj = {
  render: () => AllCardListsAndVariantsDemo.main(),
};

export const allCardGroupsAndVariants: StoryObj = {
  render: () => AllCardGroupsAndVariantsDemo.main(),
};

export const allLinksStatesVariants: StoryObj = {
  render: () => AllLinksStatesAndVariantsDemo.main(),
};

export const utilitiesColors: StoryObj = {
  render: () => UtilitiesColorsDemo.main(),
};
