import type { Meta, StoryObj } from '@storybook/html';
import { ArticleDemo } from '@demos/semantics/article.demo';
import { HeaderDemo } from '@demos/semantics/header.demo';
import { AsideDemo } from '@demos/semantics/aside.demo';
import { FooterDemo } from '@demos/semantics/footer.demo';

const meta: Meta = {
  title: 'Demo/DocsPageExample',
};

export default meta;

export const DocsPageExample: StoryObj = {
  render() {
    return `<div class="flow-h container">
  ${AsideDemo.pagesLinksSidebar({ class: 'bg-secondary-subtle py-4' })}

  <main>
    ${HeaderDemo.searchDropdownAndLinks({ class: 'border-bottom ps-4 mb-4 bg-body' })}

    <div class="flow-h mt-5">
      <div class="flow-v w-60 mx-auto">
        ${ArticleDemo.multipleParagraphs()}

        ${FooterDemo.copyrightAndContactUs({ class: 'border-top mt-5' })}
      </div>

      ${AsideDemo.pageLinksSidebar({ class: 'border-start sticky-top' })}
    </div>
  </main>
</div>`;
  },
};
