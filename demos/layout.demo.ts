import { renderElement } from "@demos/utils";
import * as AsideDemo from "@demos/semantics/elements/aside.demo";
import * as FooterDemo from "@demos/semantics/elements/footer.demo";
import * as HeaderDemo from "@demos/semantics/elements/header.demo";
import * as MainDemo from "@demos/semantics/elements/main.demo";

function base(attrs: Record<string, string>, slot: string) {
  return renderElement("div", { ...attrs, class: `flow-h ${attrs.class || ""}`.trim() }, slot);
}

// Header

export function withHeader(attrs: Record<string, string> = {}) {
  const { headerClass, ...restArgs } = attrs;

  return base(restArgs, HeaderDemo.basic({ class: headerClass }));
}

export function withLeftSidebarAndHeader(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, headerClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${HeaderDemo.basic({ class: headerClass })}`);
}

export function withHeaderAndRightSidebar(attrs: Record<string, string> = {}) {
  const { headerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${HeaderDemo.basic({ class: headerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndHeaderAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, headerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${HeaderDemo.basic({ class: headerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

// Footer

export function withFooter(attrs: Record<string, string> = {}) {
  const { footerClass, ...restArgs } = attrs;

  return base(restArgs, FooterDemo.basic({ class: footerClass }));
}

export function withLeftSidebarAndFooter(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, footerClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${FooterDemo.basic({ class: footerClass })}`);
}

export function withFooterAndRightSidebar(attrs: Record<string, string> = {}) {
  const { footerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${FooterDemo.basic({ class: footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndFooterAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, footerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${FooterDemo.basic({ class: footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

// Main

export function withMain(attrs: Record<string, string> = {}) {
  const { mainClass, ...restArgs } = attrs;

  return base(restArgs, MainDemo.basic({ class: mainClass }));
}

export function withLeftSidebarAndMain(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.basic({ class: mainClass })}`);
}

export function withMainAndRightSidebar(attrs: Record<string, string> = {}) {
  const { mainClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${MainDemo.basic({ class: mainClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndMainAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.basic({ class: mainClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

// Main With Header

export function withMainWithHeader(attrs: Record<string, string> = {}) {
  const { mainClass, headerClass, ...restArgs } = attrs;

  return base(restArgs, MainDemo.withHeader({ class: `${mainClass} flow-v`.trim(), headerClass }));
}

export function withLeftSidebarAndMainWithHeader(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, headerClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeader({ class: `${mainClass} flow-v`.trim(), headerClass })}`);
}

export function withMainWithHeaderAndRightSidebar(attrs: Record<string, string> = {}) {
  const { mainClass, headerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${MainDemo.withHeader({ class: `${mainClass} flow-v`.trim(), headerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndMainWithHeaderAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, headerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeader({ class: `${mainClass} flow-v`.trim(), headerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

// Main With Footer

export function withMainWithFooter(attrs: Record<string, string> = {}) {
  const { mainClass, footerClass, ...restArgs } = attrs;

  return base(restArgs, MainDemo.withFooter({ class: `${mainClass} flow-v`.trim(), footerClass }));
}

export function withLeftSidebarAndMainWithFooter(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, footerClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withFooter({ class: `${mainClass} flow-v`.trim(), footerClass })}`);
}

export function withMainWithFooterAndRightSidebar(attrs: Record<string, string> = {}) {
  const { mainClass, footerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${MainDemo.withFooter({ class: `${mainClass} flow-v`.trim(), footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndMainWithFooterAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, footerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withFooter({ class: `${mainClass} flow-v`.trim(), footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

// Main With Header Plus Footer

export function withMainWithHeaderPlusFooter(attrs: Record<string, string> = {}) {
  const { mainClass, headerClass, footerClass, ...restArgs } = attrs;

  return base(restArgs, MainDemo.withHeaderPlusFooter({ class: `${mainClass} flow-v`.trim(), headerClass, footerClass }));
}

export function withLeftSidebarAndMainWithHeaderPlusFooter(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, headerClass, footerClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeaderPlusFooter({ class: `${mainClass} flow-v`.trim(), headerClass, footerClass })}`);
}

export function withMainWithHeaderPlusFooterAndRightSidebar(attrs: Record<string, string> = {}) {
  const { mainClass, headerClass, footerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${MainDemo.withHeaderPlusFooter({ class: `${mainClass} flow-v`.trim(), headerClass, footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndMainWithHeaderPlusFooterAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, headerClass, footerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeaderPlusFooter({ class: `${mainClass} flow-v`.trim(), headerClass, footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

// Main With Article

export function withMainWithArticle(attrs: Record<string, string> = {}) {
  const { mainClass, articleClass, ...restArgs } = attrs;

  return base(restArgs, MainDemo.withArticle({ class: `${mainClass} flow-v`.trim(), articleClass }));
}

export function withLeftSidebarAndMainWithArticle(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, articleClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withArticle({ class: `${mainClass} flow-v`.trim(), articleClass })}`);
}

export function withMainWithArticleAndRightSidebar(attrs: Record<string, string> = {}) {
  const { mainClass, articleClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${MainDemo.withArticle({ class: `${mainClass} flow-v`.trim(), articleClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndMainWithArticleAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, articleClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withArticle({ class: `${mainClass} flow-v`.trim(), articleClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

// Main With Header Plus Article

export function withMainWithHeaderPlusArticle(attrs: Record<string, string> = {}) {
  const { mainClass, headerClass, articleClass, ...restArgs } = attrs;

  return base(restArgs, MainDemo.withHeaderPlusArticle({ class: `${mainClass} flow-v`.trim(), headerClass, articleClass }));
}

export function withLeftSidebarAndMainWithHeaderPlusArticle(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, headerClass, articleClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeaderPlusArticle({ class: `${mainClass} flow-v`.trim(), headerClass, articleClass })}`);
}

export function withMainWithHeaderPlusArticleAndRightSidebar(attrs: Record<string, string> = {}) {
  const { mainClass, headerClass, articleClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${MainDemo.withHeaderPlusArticle({ class: `${mainClass} flow-v`.trim(), headerClass, articleClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndMainWithHeaderPlusArticleAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, headerClass, articleClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeaderPlusArticle({ class: `${mainClass} flow-v`.trim(), headerClass, articleClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

// Main With Article Plus Footer

export function withMainWithArticlePlusFooter(attrs: Record<string, string> = {}) {
  const { mainClass, articleClass, footerClass, ...restArgs } = attrs;

  return base(restArgs, MainDemo.withArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), articleClass, footerClass }));
}

export function withLeftSidebarAndMainWithArticlePlusFooter(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, articleClass, footerClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), articleClass, footerClass })}`);
}

export function withMainWithArticlePlusFooterAndRightSidebar(attrs: Record<string, string> = {}) {
  const { mainClass, articleClass, footerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${MainDemo.withArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), articleClass, footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndMainWithArticlePlusFooterAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, articleClass, footerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), articleClass, footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

// Main With Header Plus Article Plus Footer

export function withMainWithHeaderPlusArticlePlusFooter(attrs: Record<string, string> = {}) {
  const { mainClass, headerClass, articleClass, footerClass, ...restArgs } = attrs;

  return base(restArgs, MainDemo.withHeaderPlusArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), headerClass, articleClass, footerClass }));
}

export function withLeftSidebarAndMainWithHeaderPlusArticlePlusFooter(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, headerClass, articleClass, footerClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeaderPlusArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), headerClass, articleClass, footerClass })}`);
}

export function withMainWithHeaderPlusArticlePlusFooterAndRightSidebar(attrs: Record<string, string> = {}) {
  const { mainClass, headerClass, articleClass, footerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${MainDemo.withHeaderPlusArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), headerClass, articleClass, footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndMainWithHeaderPlusArticlePlusFooterAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, headerClass, articleClass, footerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.withHeaderPlusArticlePlusFooter({ class: `${mainClass} flow-v`.trim(), headerClass, articleClass, footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}
