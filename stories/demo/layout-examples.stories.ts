import type { Meta, StoryObj } from '@storybook/html';
import * as AsideStories from '../semantics/aside.stories';
import * as HeaderStories from '../semantics/header.stories';
import * as ArticleStories from '../semantics/article.stories';
import * as FooterStories from '../semantics/footer.stories';

const meta: Meta = {
  title: 'Demo/Layout Examples',
};

export default meta;

export const MainAsideHeaderArticleFooter: StoryObj = {
  render: () => `<main class="flow-h">
  ${AsideStories.render(AsideStories.LeftSidebarNavigation.args)}

  <div class="flow-v">
    ${HeaderStories.render({ ...HeaderStories.WithSearchNavigation.args, class: 'ps-d' })}

    ${ArticleStories.render({ ...ArticleStories.WithHgroup.args })}

    ${FooterStories.render({ ...FooterStories.WithNavigation.args, class: 'px-d text-bg-contrast-subtle' })}
  </div>
</main>`,
};
