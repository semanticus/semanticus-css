import type { Meta, StoryObj } from "@storybook/html-vite";
import { LayoutDemo } from "@demos/composites";

const meta: Meta = {
  title: "Composites/Layout",
};

export default meta;

export const Header: StoryObj = {
  render: () => LayoutDemo.headerExample({ style: "min-width: 1024px;" }),
};

export const Footer: StoryObj = {
  render: () => LayoutDemo.footerExample({ style: "min-width: 1024px;" }),
};

export const Main: StoryObj = {
  render: () => LayoutDemo.mainExample({ style: "min-width: 1024px;" }),
};

export const MainWithHeader: StoryObj = {
  render: () => LayoutDemo.mainWithHeaderExample({ style: "min-width: 1024px;" }),
};

export const MainWithFooter: StoryObj = {
  render: () => LayoutDemo.mainWithFooterExample({ style: "min-width: 1024px;" }),
};

export const MainWithHeaderPlusFooter: StoryObj = {
  render: () => LayoutDemo.mainWithHeaderPlusFooterExample({ style: "min-width: 1024px;" }),
};

export const MainWithArticle: StoryObj = {
  render: () => LayoutDemo.mainWithArticleExample({ style: "min-width: 1024px;" }),
};

export const MainWithHeaderPlusArticle: StoryObj = {
  render: () => LayoutDemo.mainWithHeaderPlusArticleExample({ style: "min-width: 1024px;" }),
};

export const MainWithArticlePlusFooter: StoryObj = {
  render: () => LayoutDemo.mainWithArticlePlusFooterExample({ style: "min-width: 1024px;" }),
};

export const MainWithHeaderPlusArticlePlusFooter: StoryObj = {
  render: () => LayoutDemo.mainWithHeaderPlusArticlePlusFooterExample({ style: "min-width: 1024px;" }),
};
