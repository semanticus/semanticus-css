import type { Meta, StoryObj } from "@storybook/html";
import * as LayoutDemo from "@demos/layout.demo";

const meta: Meta = {
  title: "Composites/Layout",
};

export default meta;

export const Header: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Header</h3>
    ${LayoutDemo.withHeader({
      class: "bg-danger",
      headerClass: "text-bg-contrast",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Header</h3>
    ${LayoutDemo.withLeftSidebarAndHeader({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      headerClass: "text-bg-contrast",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Aside And Header And Right Sidebar</h3>
    ${LayoutDemo.withLeftSidebarAndHeaderAndRightSidebar({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      headerClass: "text-bg-contrast",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Header And Right Sidebar</h3>
    ${LayoutDemo.withHeaderAndRightSidebar({
      class: "bg-danger",
      headerClass: "text-bg-contrast",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`,
};

export const Footer: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Footer</h3>
    ${LayoutDemo.withFooter({
      class: "bg-danger",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Footer</h3>
    ${LayoutDemo.withLeftSidebarAndFooter({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Aside And Footer And Right Sidebar</h3>
    ${LayoutDemo.withLeftSidebarAndFooterAndRightSidebar({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Footer And Right Sidebar</h3>
    ${LayoutDemo.withFooterAndRightSidebar({
      class: "bg-danger",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`,
};

export const Main: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Main</h3>
    ${LayoutDemo.withMain({
      class: "bg-danger",
      mainClass: "bg-success",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main</h3>
    ${LayoutDemo.withLeftSidebarAndMain({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Aside And Main And Right Sidebar</h3>
    ${LayoutDemo.withLeftSidebarAndMainAndRightSidebar({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Main And Right Sidebar</h3>
    ${LayoutDemo.withMainAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`,
};

export const MainWithHeader: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Main With Header</h3>
    ${LayoutDemo.withMainWithHeader({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Header</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithHeader({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Aside And Main With Header And Right Sidebar</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithHeaderAndRightSidebar({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Main With Header And Right Sidebar</h3>
    ${LayoutDemo.withMainWithHeaderAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`,
};

export const MainWithFooter: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Main With Footer</h3>
    ${LayoutDemo.withMainWithFooter({
      class: "bg-danger",
      mainClass: "bg-success",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Footer</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithFooter({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Aside And Main With Footer And Right Sidebar</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithFooterAndRightSidebar({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Main With Footer And Right Sidebar</h3>
    ${LayoutDemo.withMainWithFooterAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`,
};

export const MainWithHeaderPlusFooter: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Main With Header Plus Footer</h3>
    ${LayoutDemo.withMainWithHeaderPlusFooter({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Header Plus Footer</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithHeaderPlusFooter({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Aside And Main With Header Plus Footer And Right Sidebar</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithHeaderPlusFooterAndRightSidebar({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Main With Header Plus Footer And Right Sidebar</h3>
    ${LayoutDemo.withMainWithHeaderPlusFooterAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`,
};

export const MainWithArticle: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Main With Article</h3>
    ${LayoutDemo.withMainWithArticle({
      class: "bg-danger",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Article</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithArticle({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Aside And Main With Article And Right Sidebar</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithArticleAndRightSidebar({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Main With Article And Right Sidebar</h3>
    ${LayoutDemo.withMainWithArticleAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`,
};

export const MainWithHeaderPlusArticle: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Main With Header Plus Article</h3>
    ${LayoutDemo.withMainWithHeaderPlusArticle({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      articleClass: "bg-secondary",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Header Plus Article</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithHeaderPlusArticle({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      articleClass: "bg-secondary",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Main With Header Plus Article And Right Sidebar</h3>
    ${LayoutDemo.withMainWithHeaderPlusArticleAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      articleClass: "bg-secondary",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`,
};

export const MainWithArticlePlusFooter: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Main With Article Plus Footer</h3>
    ${LayoutDemo.withMainWithArticlePlusFooter({
      class: "bg-danger",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Article Plus Footer</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithArticlePlusFooter({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Aside And Main With Article Plus Footer And Right Sidebar</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithArticlePlusFooterAndRightSidebar({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Main With Article Plus Footer And Right Sidebar</h3>
    ${LayoutDemo.withMainWithArticlePlusFooterAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`,
};

export const MainWithHeaderPlusArticlePlusFooter: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Main With Header Plus Article Plus Footer</h3>
    ${LayoutDemo.withMainWithHeaderPlusArticlePlusFooter({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      articleClass: "bg-secondary",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Header Plus Article Plus Footer</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithHeaderPlusArticlePlusFooter({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      articleClass: "bg-secondary",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Main With Header Plus Article Plus Footer And Right Sidebar</h3>
    ${LayoutDemo.withMainWithHeaderPlusArticlePlusFooterAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      articleClass: "bg-secondary",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Header Plus Article Plus Footer And Right Sidebar</h3>
    ${LayoutDemo.withLeftSidebarAndMainWithHeaderPlusArticlePlusFooterAndRightSidebar(
      {
        class: "bg-danger",
        leftSidebarClass: "bg-warning",
        rightSidebarClass: "bg-warning",
        mainClass: "bg-success",
        headerClass: "text-bg-contrast",
        articleClass: "bg-secondary",
        footerClass: "text-bg-contrast-subtle",
        style: "width: 100%; height: 400px;",
      },
    )}
  </div>
</section>`,
};
