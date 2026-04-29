import { renderElement } from '@demos/utils';
import { NavDemo } from '@demos/semantics/nav.demo';

export type AsideDemoArgsType = {
  slot?: string;
  class?: string;
};

export const AsideDemoArgs = {
  pagesLinksSidebar: {
    class: 'sidebar',
    slot: `<h4>Guide</h4>
${NavDemo.pagesLinks()}

<a href="#" role="button" class="ghost">Support</a>`,
  },

  pageLinksSidebar: {
    class: 'sidebar',
    slot: `<h4>On this page</h4>
${NavDemo.pageLinks()}`,
  },
};

export const AsideDemo = {
  render: renderElement.bind(null, 'aside'),

  pagesLinksSidebar(args: AsideDemoArgsType = {}) {
    const newArgs = { ...AsideDemoArgs.pagesLinksSidebar, ...args };
    newArgs.class = `sidebar ${newArgs.class || ''}`.trim();

    return this.render(newArgs);
  },

  pageLinksSidebar(args: AsideDemoArgsType = {}) {
    const newArgs = { ...AsideDemoArgs.pageLinksSidebar, ...args };
    newArgs.class = `sidebar ${newArgs.class || ''}`.trim();

    return this.render(newArgs);
  },
};
