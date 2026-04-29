import type { Meta, StoryObj } from '@storybook/html';
import { AsideDemo } from '@demos/semantics/aside.demo';
import { FooterDemo } from '@demos/semantics/footer.demo';
import { ArticleDemo } from '@demos/semantics/article.demo';
import { HeaderDemo } from '@demos/semantics/header.demo';

const meta: Meta = {
  title: 'Demo/Layout Examples',
};

export default meta;

// ===== Single element layouts =====

// reimplementing the example from ./layout/main.html
export const Main: StoryObj = {
  render: () => `<main class="bg-success">
  <hgroup>
    <h2>Hello World</h2>
    <p>This is a simple page layout using the body element.</p>
  </hgroup>
</main>`,
};

// reimplementing the example from ./layout/header.html
export const Header: StoryObj = {
  render: () => HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' }),
};

// reimplementing the example from ./layout/footer.html
export const Footer: StoryObj = {
  render: () => FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' }),
};

// reimplementing the example from ./layout/aside.html
export const Aside: StoryObj = {
  render: () => AsideDemo.pagesLinksSidebar({ class: 'bg-warning' }),
};

// ===== Two element layouts =====

// reimplementing the example from ./layout/main-aside.html
export const MainWithAside: StoryObj = {
  render: () => `<main class="flow-h bg-success">
  <hgroup>
    <h2>Hello World</h2>
    <p>This is a simple page layout using the body element.</p>
  </hgroup>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</main>`,
};

// reimplementing the example from ./layout/aside-main.html
export const AsideWithMain: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <main class="bg-success">
    <hgroup>
      <h2>Hello World</h2>
      <p>This is a simple page layout using the body element.</p>
    </hgroup>
  </main>
</div>`,
};

// reimplementing the example from ./layout/header-main.html
export const HeaderWithMain: StoryObj = {
  render: () => `<div class="flow-h">
  ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

  <main class="bg-success">
    <hgroup>
      <h2>Hello World</h2>
      <p>This is a simple page layout using the body element.</p>
    </hgroup>
  </main>
</div>`,
};

// reimplementing the example from ./layout/main-footer.html
export const MainWithFooter: StoryObj = {
  render: () => `<main class="bg-success">
  <hgroup>
    <h2>Hello World</h2>
    <p>This is a simple page layout using the body element.</p>
  </hgroup>

  ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
</main>`,
};

// reimplementing the example from ./layout/main-footer-aside.html
export const MainWithFooterAndAside: StoryObj = {
  render: () => `<div class="flow-h">
  <main class="bg-success">
    <hgroup>
      <h2>Hello World</h2>
      <p>This is a simple page layout using the body element.</p>
    </hgroup>

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </main>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// reimplementing the example from ./layout/header-footer.html
export const HeaderWithFooter: StoryObj = {
  render: () => `<div class="flow-v">
  ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

  ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
</div>`,
};

// reimplementing the example from ./layout/header-aside.html
export const HeaderWithAside: StoryObj = {
  render: () => `<div class="flow-h">
  ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// reimplementing the example from ./layout/aside-header.html
export const AsideWithHeader: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}
</div>`,
};

// reimplementing the example from ./layout/aside-footer.html
export const AsideWithFooter: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
</div>`,
};

// reimplementing the example from ./layout/footer-aside.html
export const FooterWithAside: StoryObj = {
  render: () => `<div class="flow-h">
  ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// reimplementing the example from ./layout/aside-aside.html
export const AsideWithAside: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// reimplementing the example from ./layout/main-article.html
export const MainWithArticle: StoryObj = {
  render: () => `<main class="bg-success flow-h">
  ${ArticleDemo.hgroup({ class: 'bg-secondary' })}
</main>`,
};

// ===== Three element layouts =====

// reimplementing the example from ./layout/main-header-article.html
export const MainWithHeaderAndArticle: StoryObj = {
  render: () => `<main class="bg-success">
  ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

  ${ArticleDemo.hgroup({ class: 'bg-secondary' })}
</main>`,
};

// reimplementing the example from ./layout/main-article-footer.html
export const MainWithArticleAndFooter: StoryObj = {
  render: () => `<main class="bg-success">
  ${ArticleDemo.hgroup({ class: 'bg-secondary' })}

  ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
</main>`,
};

// reimplementing the example from ./layout/main-header-article-footer.html
export const MainWithHeaderArticleAndFooter: StoryObj = {
  render: () => `<main class="bg-success">
  ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

  ${ArticleDemo.hgroup({ class: 'bg-secondary' })}

  ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
</main>`,
};

// reimplementing the example from ./layout/main-header-article-aside.html
export const MainWithHeaderArticleAndAside: StoryObj = {
  render: () => `<main class="bg-success flow-h">
  <div class="flow-v">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    ${ArticleDemo.hgroup({ class: 'bg-secondary' })}
  </div>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</main>`,
};

// reimplementing the example from ./layout/aside-main-footer.html
export const AsideWithMainAndFooter: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <main class="bg-success">
    <hgroup>
      <h2>Hello World</h2>
      <p>This is a simple page layout using the body element.</p>
    </hgroup>

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </main>
</div>`,
};

// reimplementing the example from ./layout/header-main-footer.html
export const HeaderWithMainAndFooter: StoryObj = {
  render: () => `<main class="bg-success">
  ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

  <hgroup>
    <h2>Hello World</h2>
    <p>This is a simple page layout using the body element.</p>
  </hgroup>

  ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
</main>`,
};

// reimplementing the example from ./layout/aside-header-main.html
export const AsideWithHeaderAndMain: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <main class="bg-success">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    <hgroup>
      <h2>Hello World</h2>
      <p>This is a simple page layout using the body element.</p>
    </hgroup>
  </main>
</div>`,
};

// reimplementing the example from ./layout/main-aside-article.html
export const MainWithAsideAndArticle: StoryObj = {
  render: () => `<main class="bg-success flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  ${ArticleDemo.hgroup({ class: 'bg-secondary' })}
</main>`,
};

// reimplementing the example from ./layout/main-article-aside.html
export const MainWithArticleAndAside: StoryObj = {
  render: () => `<main class="bg-success flow-h">
  ${ArticleDemo.hgroup({ class: 'bg-secondary' })}

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</main>`,
};

// reimplementing the example from ./layout/main-aside-header-article.html
export const MainWithAsideHeaderAndArticle: StoryObj = {
  render: () => `<main class="bg-success flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <div class="flow-v">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    ${ArticleDemo.hgroup({ class: 'bg-secondary' })}
  </div>
</main>`,
};

// reimplementing the example from ./layout/main-aside-article-footer.html
export const MainWithAsideArticleAndFooter: StoryObj = {
  render: () => `<main class="bg-success flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <div class="flow-v">
    ${ArticleDemo.hgroup({ class: 'bg-secondary' })}

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </div>
</main>`,
};

// reimplementing the example from ./layout/aside-header-footer.html
export const AsideWithHeaderAndFooter: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <div class="flow-v">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </div>
</div>`,
};

// reimplementing the example from ./layout/aside-header-footer-aside.html
export const AsideWithHeaderFooterAndAside: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <div class="flow-v">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </div>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// reimplementing the example from ./layout/header-main-aside.html
export const HeaderWithMainAndAside: StoryObj = {
  render: () => `<div class="flow-h">
  <main class="bg-success">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    <hgroup>
      <h2>Hello World</h2>
      <p>This is a simple page layout using the body element.</p>
    </hgroup>
  </main>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// reimplementing the example from ./layout/header-footer-aside.html
export const HeaderWithFooterAndAside: StoryObj = {
  render: () => `<div class="flow-h">
  <div class="flow-v">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </div>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// reimplementing the example from ./layout/aside-main-aside.html
export const AsideWithMainAndAside: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <main class="bg-success">
    <hgroup>
      <h2>Hello World</h2>
      <p>This is a simple page layout using the body element.</p>
    </hgroup>
  </main>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// reimplementing the example from ./layout/aside-header-aside.html
export const AsideWithHeaderAndAside: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// reimplementing the example from ./layout/aside-footer-aside.html
export const AsideWithFooterAndAside: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// ===== Four element layouts =====

// reimplementing the example from ./layout/main-aside-header-article-footer.html
export const MainWithAsideAndHeaderArticleFooter: StoryObj = {
  render: () => `<main class="flow-h bg-success">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <div class="flow-v">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    ${ArticleDemo.helloWorld({ class: 'bg-secondary' })}

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </div>
</main>`,
};

// reimplementing the example from ./layout/main-aside-header-article-footer-aside.html
export const MainWithAsideAndHeaderArticleFooterAndAside: StoryObj = {
  render: () => `<main class="flow-h bg-success">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <div class="flow-v">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    ${ArticleDemo.helloWorld({ class: 'bg-secondary' })}

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </div>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</main>`,
};

// reimplementing the example from ./layout/main-header-article-footer-aside.html
export const MainWithHeaderArticleFooterAndAside: StoryObj = {
  render: () => `<main class="bg-success flow-h">
  <div class="flow-v">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    ${ArticleDemo.hgroup({ class: 'bg-secondary' })}

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </div>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</main>`,
};

// reimplementing the example from ./layout/main-article-footer-aside.html
export const MainWithArticleFooterAndAside: StoryObj = {
  render: () => `<main class="bg-success flow-h">
  <div class="flow-v">
    ${ArticleDemo.hgroup({ class: 'bg-secondary' })}

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </div>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</main>`,
};

// reimplementing the example from ./layout/main-aside-article-footer-aside.html
export const MainWithAsideArticleFooterAndAside: StoryObj = {
  render: () => `<main class="bg-success flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <div class="flow-v">
    ${ArticleDemo.hgroup({ class: 'bg-secondary' })}

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </div>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</main>`,
};

// reimplementing the example from ./layout/main-aside-header-article-aside.html
export const MainWithAsideHeaderArticleAndAside: StoryObj = {
  render: () => `<main class="bg-success flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <div class="flow-v">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    ${ArticleDemo.hgroup({ class: 'bg-secondary' })}
  </div>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</main>`,
};

// reimplementing the example from ./layout/main-aside-article-aside.html
export const MainWithAsideArticleAndAside: StoryObj = {
  render: () => `<main class="bg-success flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  ${ArticleDemo.hgroup({ class: 'bg-secondary' })}

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</main>`,
};

// reimplementing the example from ./layout/aside-header-main-footer.html
export const AsideWithHeaderMainAndFooter: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <main class="bg-success">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    <hgroup>
      <h2>Hello World</h2>
      <p>This is a simple page layout using the body element.</p>
    </hgroup>

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </main>
</div>`,
};

// reimplementing the example from ./layout/aside-header-main-aside.html
export const AsideWithHeaderMainAndAside: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <main class="bg-success">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    <hgroup>
      <h2>Hello World</h2>
      <p>This is a simple page layout using the body element.</p>
    </hgroup>
  </main>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// reimplementing the example from ./layout/header-main-footer-aside.html
export const HeaderWithMainFooterAndAside: StoryObj = {
  render: () => `<div class="flow-h">
  <main class="bg-success">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    <hgroup>
      <h2>Hello World</h2>
      <p>This is a simple page layout using the body element.</p>
    </hgroup>

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </main>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// reimplementing the example from ./layout/aside-main-footer-aside.html
export const AsideWithMainFooterAndAside: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <main class="bg-success">
    <hgroup>
      <h2>Hello World</h2>
      <p>This is a simple page layout using the body element.</p>
    </hgroup>

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </main>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};

// ===== Five element layouts =====

// reimplementing the example from ./layout/aside-header-main-footer-aside.html
export const AsideWithHeaderMainFooterAndAside: StoryObj = {
  render: () => `<div class="flow-h">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}

  <main class="bg-success">
    ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}

    <hgroup>
      <h2>Hello World</h2>
      <p>This is a simple page layout using the body element.</p>
    </hgroup>

    ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
  </main>

  ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
</div>`,
};
