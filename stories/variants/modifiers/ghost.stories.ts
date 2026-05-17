import type { Meta, StoryObj } from "@storybook/html";
import { GhostDemo } from "@demos/variants/modifiers";

const meta: Meta = {
  title: "Variants/Modifiers/Ghost",
  parameters: {},
};

export default meta;

export const ButtonExample: StoryObj = {
  render: () => GhostDemo.button(),
};

export const SecondaryButtonExample: StoryObj = {
  render: () => GhostDemo.button({ class: "secondary" }),
};

export const ContrastButtonExample: StoryObj = {
  render: () => GhostDemo.button({ class: "contrast" }),
};

export const ButtonWithoutBorderExample: StoryObj = {
  render: () => GhostDemo.button({ class: "border-0" }),
};

export const SecondaryButtonWithoutBorderExample: StoryObj = {
  render: () => GhostDemo.button({ class: "secondary border-0" }),
};

export const ContrastButtonWithoutBorderExample: StoryObj = {
  render: () => GhostDemo.button({ class: "contrast border-0" }),
};

export const PanelExample: StoryObj = {
  render: () => GhostDemo.panel(),
};

export const SecondaryPanelExample: StoryObj = {
  render: () => GhostDemo.panel({ class: "secondary" }),
};

export const ContrastPanelExample: StoryObj = {
  render: () => GhostDemo.panel({ class: "contrast" }),
};
