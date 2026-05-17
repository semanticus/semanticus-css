import type { Meta, StoryObj } from "@storybook/html";
import { SubtleDemo } from "@demos/variants/modifiers";

const meta: Meta = {
  title: "Variants/Modifiers/Subtle",
  parameters: {},
};

export default meta;

export const ButtonExample: StoryObj = {
  render: () => SubtleDemo.button(),
};

export const SecondaryButtonExample: StoryObj = {
  render: () => SubtleDemo.button({ class: "secondary" }),
};

export const ContrastButtonExample: StoryObj = {
  render: () => SubtleDemo.button({ class: "contrast" }),
};

export const ButtonWithoutBorderExample: StoryObj = {
  render: () => SubtleDemo.button({ class: "border-0" }),
};

export const SecondaryButtonWithoutBorderExample: StoryObj = {
  render: () => SubtleDemo.button({ class: "secondary border-0" }),
};

export const ContrastButtonWithoutBorderExample: StoryObj = {
  render: () => SubtleDemo.button({ class: "contrast border-0" }),
};

export const PanelExample: StoryObj = {
  render: () => SubtleDemo.panel(),
};

export const SecondaryPanelExample: StoryObj = {
  render: () => SubtleDemo.panel({ class: "secondary" }),
};

export const ContrastPanelExample: StoryObj = {
  render: () => SubtleDemo.panel({ class: "contrast" }),
};
