import type { Meta, StoryObj } from '@storybook/html';
import { AsideDemo } from '@demos/semantics/aside.demo';
import { FooterDemo } from '@demos/semantics/footer.demo';
import { ArticleDemo } from '@demos/semantics/article.demo';
import { HeaderDemo } from '@demos/semantics/header.demo';

const meta: Meta = {
  title: 'Demo/Layout with Asides',
};

export default meta;

export const Header: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Header</h3>
    <div class="bg-danger" style="width: 100%; height: 400px;">
      ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}
    </div>
  </div>

  <div>
    <h3>Aside - Header</h3>
    <div class="bg-danger flow-h" style="width: 100%; height: 400px;">
      ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}
      ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}
    </div>
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Aside - Header - Aside</h3>
    <div class="bg-danger flow-h" style="width: 100%; height: 400px;">
      ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}
      ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}
      ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
    </div>
  </div>

  <div>
    <h3>Header - Aside</h3>
    <div class="bg-danger flow-h" style="width: 100%; height: 400px;">
      ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}
      ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
    </div>
  </div>
</section>`,
};

export const Footer: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Footer</h3>
    <div class="bg-danger" style="width: 100%; height: 400px;">
      ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
    </div>
  </div>

  <div>
    <h3>Aside - Footer</h3>
    <div class="bg-danger flow-h" style="width: 100%; height: 400px;">
      ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}
      ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
    </div>
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Aside - Footer - Aside</h3>
    <div class="bg-danger flow-h" style="width: 100%; height: 400px;">
      ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}
      ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
      ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
    </div>
  </div>

  <div>
    <h3>Footer - Aside</h3>
    <div class="bg-danger flow-h" style="width: 100%; height: 400px;">
      ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
      ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
    </div>
  </div>
</section>`,
};

export const MainWithHeaderPlusFooter: StoryObj = {
  render: () => `<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Footer</h3>
    <div class="bg-danger" style="width: 100%; height: 400px;">
      <main>
        ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}
        ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
      </main>
    </div>
  </div>

  <div>
    <h3>Aside - Footer</h3>
    <div class="bg-danger flow-h" style="width: 100%; height: 400px;">
      ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}
      <main>
        ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}
        ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
      </main>
    </div>
  </div>
</section>

<section class="grid" style="min-width: 1024px;">
  <div>
    <h3>Aside - Footer - Aside</h3>
    <div class="bg-danger flow-h" style="width: 100%; height: 400px;">
      ${AsideDemo.pagesLinksSidebar({ class: 'bg-warning' })}
      <main>
        ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}
        ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
      </main>
      ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
    </div>
  </div>

  <div>
    <h3>Footer - Aside</h3>
    <div class="bg-danger flow-h" style="width: 100%; height: 400px;">
      <main>
        ${HeaderDemo.logoTaglineLinks({ class: 'text-bg-contrast' })}
        ${FooterDemo.copyrightAndContactUs({ class: 'text-bg-contrast-subtle' })}
      </main>
      ${AsideDemo.pageLinksSidebar({ class: 'bg-warning' })}
    </div>
  </div>
</section>`,
};
