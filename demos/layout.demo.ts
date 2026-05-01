import { renderElement } from "@demos/utils";
import * as AsideDemo from "@demos/semantics/elements/aside.demo";
import * as FooterDemo from "@demos/semantics/elements/footer.demo";
import * as HeaderDemo from "@demos/semantics/elements/header.demo";
import * as MainDemo from "@demos/semantics/elements/main.demo";

export type LayoutDemoArgsType = Record<string, any> & {
  class?: string;
  mainClass?: string;
  articleClass?: string;
  headerClass?: string;
  footerClass?: string;
  leftSidebarClass?: string;
  rightSidebarClass?: string;
};

export const LayoutDemoArgs = {
  default: {
    class: "",
    slot: "",
  },
};

export const LayoutDemo = {
  render(args: LayoutDemoArgsType = {}) {
    const cssClass = args.class || "";
    delete args.class;

    return renderElement("div", {
      ...args,
      class: `${cssClass} flow-h`.trim(),
    });
  },

  default(args: LayoutDemoArgsType = {}) {
    return this.render({ ...LayoutDemoArgs.default, ...args });
  },

  // Header

  withHeader(args: LayoutDemoArgsType = {}) {
    const { mainClass, articleClass, headerClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${HeaderDemo.default({ class: headerClass })}`,
    });
  },

  withLeftSidebarAndHeader(args: LayoutDemoArgsType = {}) {
    const { leftSidebarClass, mainClass, headerClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${HeaderDemo.default({ class: headerClass })}`,
    });
  },

  withHeaderAndRightSidebar(args: LayoutDemoArgsType = {}) {
    const { mainClass, headerClass, rightSidebarClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${HeaderDemo.default({ class: headerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  withLeftSidebarAndHeaderAndRightSidebar(args: LayoutDemoArgsType = {}) {
    const {
      leftSidebarClass,
      mainClass,
      headerClass,
      rightSidebarClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${HeaderDemo.default({ class: headerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  // Footer

  withFooter(args: LayoutDemoArgsType = {}) {
    const { mainClass, articleClass, footerClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${FooterDemo.default({ class: footerClass })}`,
    });
  },

  withLeftSidebarAndFooter(args: LayoutDemoArgsType = {}) {
    const { leftSidebarClass, mainClass, footerClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${FooterDemo.default({ class: footerClass })}`,
    });
  },

  withFooterAndRightSidebar(args: LayoutDemoArgsType = {}) {
    const { mainClass, footerClass, rightSidebarClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${FooterDemo.default({ class: footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  withLeftSidebarAndFooterAndRightSidebar(args: LayoutDemoArgsType = {}) {
    const {
      leftSidebarClass,
      mainClass,
      footerClass,
      rightSidebarClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${FooterDemo.default({ class: footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  // Main

  withMain(args: LayoutDemoArgsType = {}) {
    const { mainClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.default({ class: mainClass })}`,
    });
  },

  withLeftSidebarAndMain(args: LayoutDemoArgsType = {}) {
    const { leftSidebarClass, mainClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.default({ class: mainClass })}`,
    });
  },

  withMainAndRightSidebar(args: LayoutDemoArgsType = {}) {
    const { mainClass, rightSidebarClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.default({ class: mainClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  withLeftSidebarAndMainAndRightSidebar(args: LayoutDemoArgsType = {}) {
    const { leftSidebarClass, mainClass, rightSidebarClass, ...restArgs } =
      args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.default({ class: mainClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  // Main With Header

  withMainWithHeader(args: LayoutDemoArgsType = {}) {
    const { mainClass, articleClass, headerClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withHeader({ class: `${mainClass} flow-v`.trim(), headerClass })}`,
    });
  },

  withLeftSidebarAndMainWithHeader(args: LayoutDemoArgsType = {}) {
    const { leftSidebarClass, mainClass, headerClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeader({ class: `${mainClass} flow-v`.trim(), headerClass })}`,
    });
  },

  withMainWithHeaderAndRightSidebar(args: LayoutDemoArgsType = {}) {
    const { mainClass, headerClass, rightSidebarClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withHeader({ class: `${mainClass} flow-v`.trim(), headerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  withLeftSidebarAndMainWithHeaderAndRightSidebar(
    args: LayoutDemoArgsType = {},
  ) {
    const {
      leftSidebarClass,
      mainClass,
      headerClass,
      rightSidebarClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeader({ class: `${mainClass} flow-v`.trim(), headerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  // Main With Footer

  withMainWithFooter(args: LayoutDemoArgsType = {}) {
    const { mainClass, articleClass, footerClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withFooter({ class: `${mainClass} flow-v`.trim(), footerClass })}`,
    });
  },

  withLeftSidebarAndMainWithFooter(args: LayoutDemoArgsType = {}) {
    const { leftSidebarClass, mainClass, footerClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withFooter({ class: `${mainClass} flow-v`.trim(), footerClass })}`,
    });
  },

  withMainWithFooterAndRightSidebar(args: LayoutDemoArgsType = {}) {
    const { mainClass, footerClass, rightSidebarClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withFooter({ class: `${mainClass} flow-v`.trim(), footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  withLeftSidebarAndMainWithFooterAndRightSidebar(
    args: LayoutDemoArgsType = {},
  ) {
    const {
      leftSidebarClass,
      mainClass,
      footerClass,
      rightSidebarClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withFooter({ class: `${mainClass} flow-v`.trim(), footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  // Main With Header Plus Footer

  withMainWithHeaderPlusFooter(args: LayoutDemoArgsType = {}) {
    const { mainClass, articleClass, headerClass, footerClass, ...restArgs } =
      args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withHeaderPlusFooter({ class: `${mainClass} flow-v`.trim(), headerClass, footerClass })}`,
    });
  },

  withLeftSidebarAndMainWithHeaderPlusFooter(args: LayoutDemoArgsType = {}) {
    const {
      leftSidebarClass,
      mainClass,
      headerClass,
      footerClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeaderPlusFooter({ class: `${mainClass} flow-v`.trim(), headerClass, footerClass })}`,
    });
  },

  withMainWithHeaderPlusFooterAndRightSidebar(args: LayoutDemoArgsType = {}) {
    const {
      mainClass,
      headerClass,
      footerClass,
      rightSidebarClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withHeaderPlusFooter({ class: `${mainClass} flow-v`.trim(), headerClass, footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  withLeftSidebarAndMainWithHeaderPlusFooterAndRightSidebar(
    args: LayoutDemoArgsType = {},
  ) {
    const {
      leftSidebarClass,
      mainClass,
      headerClass,
      footerClass,
      rightSidebarClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeaderPlusFooter({ class: `${mainClass} flow-v`.trim(), headerClass, footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  // Main With Article

  withMainWithArticle(args: LayoutDemoArgsType = {}) {
    const { mainClass, articleClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withArticle({ class: `${mainClass} flow-v`.trim(), articleClass })}`,
    });
  },

  withLeftSidebarAndMainWithArticle(args: LayoutDemoArgsType = {}) {
    const { leftSidebarClass, mainClass, articleClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withArticle({ class: `${mainClass} flow-v`.trim(), articleClass })}`,
    });
  },

  withMainWithArticleAndRightSidebar(args: LayoutDemoArgsType = {}) {
    const { mainClass, articleClass, rightSidebarClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withArticle({ class: `${mainClass} flow-v`.trim(), articleClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  withLeftSidebarAndMainWithArticleAndRightSidebar(
    args: LayoutDemoArgsType = {},
  ) {
    const {
      leftSidebarClass,
      mainClass,
      articleClass,
      rightSidebarClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withArticle({ class: `${mainClass} flow-v`.trim(), articleClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  // Main With Header Plus Article

  withMainWithHeaderPlusArticle(args: LayoutDemoArgsType = {}) {
    const { mainClass, articleClass, headerClass, footerClass, ...restArgs } =
      args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withHeaderPlusArticle({ class: `${mainClass} flow-v`.trim(), articleClass, headerClass })}`,
    });
  },

  withLeftSidebarAndMainWithHeaderPlusArticle(args: LayoutDemoArgsType = {}) {
    const {
      leftSidebarClass,
      mainClass,
      articleClass,
      headerClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeaderPlusArticle({ class: `${mainClass} flow-v`.trim(), articleClass, headerClass })}`,
    });
  },

  withMainWithHeaderPlusArticleAndRightSidebar(args: LayoutDemoArgsType = {}) {
    const {
      mainClass,
      articleClass,
      headerClass,
      rightSidebarClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withHeaderPlusArticle({ class: `${mainClass} flow-v`.trim(), articleClass, headerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  // Main With Article Plus Footer

  withMainWithArticlePlusFooter(args: LayoutDemoArgsType = {}) {
    const { mainClass, articleClass, footerClass, ...restArgs } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), articleClass, footerClass })}`,
    });
  },

  withLeftSidebarAndMainWithArticlePlusFooter(args: LayoutDemoArgsType = {}) {
    const {
      leftSidebarClass,
      mainClass,
      articleClass,
      footerClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), articleClass, footerClass })}`,
    });
  },

  withMainWithArticlePlusFooterAndRightSidebar(args: LayoutDemoArgsType = {}) {
    const {
      mainClass,
      articleClass,
      footerClass,
      rightSidebarClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), articleClass, footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  withLeftSidebarAndMainWithArticlePlusFooterAndRightSidebar(
    args: LayoutDemoArgsType = {},
  ) {
    const {
      leftSidebarClass,
      mainClass,
      articleClass,
      footerClass,
      rightSidebarClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), articleClass, footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  // Main With Header Plus Article Plus Footer

  withMainWithHeaderPlusArticlePlusFooter(args: LayoutDemoArgsType = {}) {
    const { mainClass, articleClass, headerClass, footerClass, ...restArgs } =
      args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withHeaderPlusArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), articleClass, headerClass, footerClass })}`,
    });
  },

  withLeftSidebarAndMainWithHeaderPlusArticlePlusFooter(
    args: LayoutDemoArgsType = {},
  ) {
    const {
      leftSidebarClass,
      mainClass,
      articleClass,
      headerClass,
      footerClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeaderPlusArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), articleClass, headerClass, footerClass })}`,
    });
  },

  withMainWithHeaderPlusArticlePlusFooterAndRightSidebar(
    args: LayoutDemoArgsType = {},
  ) {
    const {
      mainClass,
      articleClass,
      headerClass,
      footerClass,
      rightSidebarClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${MainDemo.withHeaderPlusArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), articleClass, headerClass, footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },

  withLeftSidebarAndMainWithHeaderPlusArticlePlusFooterAndRightSidebar(
    args: LayoutDemoArgsType = {},
  ) {
    const {
      leftSidebarClass,
      mainClass,
      articleClass,
      headerClass,
      footerClass,
      rightSidebarClass,
      ...restArgs
    } = args;

    return this.render({
      ...restArgs,
      slot: `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeaderPlusArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), articleClass, headerClass, footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`,
    });
  },
};
