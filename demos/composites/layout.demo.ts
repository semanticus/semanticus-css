import { renderElement } from "@scripts/utils";
import * as AsideDemo from "@demos/semantics/elements/aside.demo";
import * as FooterDemo from "@demos/semantics/elements/footer.demo";
import * as HeaderDemo from "@demos/semantics/elements/header.demo";
import * as MainDemo from "@demos/semantics/elements/main.demo";

function base(attrs: Record<string, string>, slot: string) {
  return renderElement("div", { ...attrs, class: `flow-h ${attrs.class || ""}`.trim() }, slot);
}

export function overview() {
  return renderElement('main', { class: 'container' }, `${headerExample({ style: "min-width: 1024px;" })}

${footerExample({ style: "min-width: 1024px;" })}

${mainExample({ style: "min-width: 1024px;" })}

${mainWithHeaderExample({ style: "min-width: 1024px;" })}

${mainWithFooterExample({ style: "min-width: 1024px;" })}

${mainWithHeaderPlusFooterExample({ style: "min-width: 1024px;" })}

${mainWithArticleExample({ style: "min-width: 1024px;" })}

${mainWithHeaderPlusArticleExample({ style: "min-width: 1024px;" })}

${mainWithArticlePlusFooterExample({ style: "min-width: 1024px;" })}

${mainWithHeaderPlusArticlePlusFooterExample({ style: "min-width: 1024px;" })}`);
}


// Header

export function withHeader(attrs: Record<string, string> = {}) {
  const { headerClass, ...restArgs } = attrs;

  return base(restArgs, HeaderDemo.main({ class: headerClass }));
}

export function withLeftSidebarAndHeader(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, headerClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${HeaderDemo.main({ class: headerClass })}`);
}

export function withHeaderAndRightSidebar(attrs: Record<string, string> = {}) {
  const { headerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${HeaderDemo.main({ class: headerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndHeaderAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, headerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${HeaderDemo.main({ class: headerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function headerExample(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<div>
    <h3>Header</h3>
    ${withHeader({
      class: "bg-danger",
      headerClass: "text-bg-contrast",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Header</h3>
    ${withLeftSidebarAndHeader({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      headerClass: "text-bg-contrast",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section style="min-width: 1024px;">
  <div>
    <h3>Aside And Header And Right Sidebar</h3>
    ${withLeftSidebarAndHeaderAndRightSidebar({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      headerClass: "text-bg-contrast",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Header And Right Sidebar</h3>
    ${withHeaderAndRightSidebar({
      class: "bg-danger",
      headerClass: "text-bg-contrast",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`);
}

// Footer

export function withFooter(attrs: Record<string, string> = {}) {
  const { footerClass, ...restArgs } = attrs;

  return base(restArgs, FooterDemo.main({ class: footerClass }));
}

export function withLeftSidebarAndFooter(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, footerClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${FooterDemo.main({ class: footerClass })}`);
}

export function withFooterAndRightSidebar(attrs: Record<string, string> = {}) {
  const { footerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${FooterDemo.main({ class: footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndFooterAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, footerClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${FooterDemo.main({ class: footerClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

// Main

export function withMain(attrs: Record<string, string> = {}) {
  const { mainClass, ...restArgs } = attrs;

  return base(restArgs, MainDemo.main({ class: mainClass }));
}

export function withLeftSidebarAndMain(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.main({ class: mainClass })}`);
}

export function withMainAndRightSidebar(attrs: Record<string, string> = {}) {
  const { mainClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${MainDemo.main({ class: mainClass })}
${AsideDemo.rightSidebar({ class: rightSidebarClass })}`);
}

export function withLeftSidebarAndMainAndRightSidebar(attrs: Record<string, string> = {}) {
  const { leftSidebarClass, mainClass, rightSidebarClass, ...restArgs } = attrs;

  return base(restArgs, `${AsideDemo.leftSidebar({ class: leftSidebarClass })}
${MainDemo.main({ class: mainClass })}
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

// Storybook examples

export function footerExample(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<div>
    <h3>Footer</h3>
    ${withFooter({
      class: "bg-danger",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Footer</h3>
    ${withLeftSidebarAndFooter({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section style="min-width: 1024px;">
  <div>
    <h3>Aside And Footer And Right Sidebar</h3>
    ${withLeftSidebarAndFooterAndRightSidebar({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Footer And Right Sidebar</h3>
    ${withFooterAndRightSidebar({
      class: "bg-danger",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`);
}

export function mainExample(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<div>
    <h3>Main</h3>
    ${withMain({
      class: "bg-danger",
      mainClass: "bg-success",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main</h3>
    ${withLeftSidebarAndMain({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section style="min-width: 1024px;">
  <div>
    <h3>Aside And Main And Right Sidebar</h3>
    ${withLeftSidebarAndMainAndRightSidebar({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Main And Right Sidebar</h3>
    ${withMainAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`);
}

export function mainWithHeaderExample(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<div>
    <h3>Main With Header</h3>
    ${withMainWithHeader({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Header</h3>
    ${withLeftSidebarAndMainWithHeader({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section style="min-width: 1024px;">
  <div>
    <h3>Aside And Main With Header And Right Sidebar</h3>
    ${withLeftSidebarAndMainWithHeaderAndRightSidebar({
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
    ${withMainWithHeaderAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`);
}

export function mainWithFooterExample(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<div>
    <h3>Main With Footer</h3>
    ${withMainWithFooter({
      class: "bg-danger",
      mainClass: "bg-success",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Footer</h3>
    ${withLeftSidebarAndMainWithFooter({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section style="min-width: 1024px;">
  <div>
    <h3>Aside And Main With Footer And Right Sidebar</h3>
    ${withLeftSidebarAndMainWithFooterAndRightSidebar({
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
    ${withMainWithFooterAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`);
}

export function mainWithHeaderPlusFooterExample(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<div>
    <h3>Main With Header Plus Footer</h3>
    ${withMainWithHeaderPlusFooter({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Header Plus Footer</h3>
    ${withLeftSidebarAndMainWithHeaderPlusFooter({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section style="min-width: 1024px;">
  <div>
    <h3>Aside And Main With Header Plus Footer And Right Sidebar</h3>
    ${withLeftSidebarAndMainWithHeaderPlusFooterAndRightSidebar({
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
    ${withMainWithHeaderPlusFooterAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`);
}

export function mainWithArticleExample(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<div>
    <h3>Main With Article</h3>
    ${withMainWithArticle({
      class: "bg-danger",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Article</h3>
    ${withLeftSidebarAndMainWithArticle({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section style="min-width: 1024px;">
  <div>
    <h3>Aside And Main With Article And Right Sidebar</h3>
    ${withLeftSidebarAndMainWithArticleAndRightSidebar({
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
    ${withMainWithArticleAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`);
}

export function mainWithHeaderPlusArticleExample(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<div>
    <h3>Main With Header Plus Article</h3>
    ${withMainWithHeaderPlusArticle({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      articleClass: "bg-secondary",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Header Plus Article</h3>
    ${withLeftSidebarAndMainWithHeaderPlusArticle({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      articleClass: "bg-secondary",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section style="min-width: 1024px;">
  <div>
    <h3>Main With Header Plus Article And Right Sidebar</h3>
    ${withMainWithHeaderPlusArticleAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      articleClass: "bg-secondary",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`);
}

export function mainWithArticlePlusFooterExample(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<div>
    <h3>Main With Article Plus Footer</h3>
    ${withMainWithArticlePlusFooter({
      class: "bg-danger",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>

  <div>
    <h3>Aside And Main With Article Plus Footer</h3>
    ${withLeftSidebarAndMainWithArticlePlusFooter({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>

<section style="min-width: 1024px;">
  <div>
    <h3>Aside And Main With Article Plus Footer And Right Sidebar</h3>
    ${withLeftSidebarAndMainWithArticlePlusFooterAndRightSidebar({
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
    ${withMainWithArticlePlusFooterAndRightSidebar({
      class: "bg-danger",
      mainClass: "bg-success",
      articleClass: "bg-secondary",
      footerClass: "text-bg-contrast-subtle",
      rightSidebarClass: "bg-warning",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`);
}

export function mainWithHeaderPlusArticlePlusFooterExample(attrs: Record<string, string> = {}) {
  return renderElement('section', attrs, `<div>
    <h3>Main With Header Plus Article Plus Footer</h3>
    ${withMainWithHeaderPlusArticlePlusFooter({
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
    ${withLeftSidebarAndMainWithHeaderPlusArticlePlusFooter({
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

<section style="min-width: 1024px;">
  <div>
    <h3>Main With Header Plus Article Plus Footer And Right Sidebar</h3>
    ${withMainWithHeaderPlusArticlePlusFooterAndRightSidebar({
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
    ${withLeftSidebarAndMainWithHeaderPlusArticlePlusFooterAndRightSidebar({
      class: "bg-danger",
      leftSidebarClass: "bg-warning",
      rightSidebarClass: "bg-warning",
      mainClass: "bg-success",
      headerClass: "text-bg-contrast",
      articleClass: "bg-secondary",
      footerClass: "text-bg-contrast-subtle",
      style: "width: 100%; height: 400px;",
    })}
  </div>
</section>`);
}
