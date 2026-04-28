import type { Meta, StoryObj } from '@storybook/html';

type Args = {
  class: string;
  slot: string;
};

export function render(args: Partial<Args>): string {
  return `<nav class="${args.class}">
    ${args.slot}
  </nav>`;
}

const meta: Meta<Args> = {
  title: 'Semantics/Nav',
  render,
  excludeStories: ['render'],
  // render: (args: Args) => {
  //   const element = document.createElement('header');
  //   element.className = args.class;
  //   element.innerHTML = args.slot;

  //   return element;
  // },
};

export default meta;

export const Default: StoryObj<Args> = {
  args: {
    slot: "<h4>Logo</h4>",
  },
};

export const TopBar: StoryObj<Args> = {
  args: {
    slot: `<h2>Logo</h2>

<h3>tagline</h3>

<ul>
  <li><a href="#!">Log out</a></li>
</ul>`,
  }
};

export const SearchAndDropdown: StoryObj<Args> = {
  args: {
    slot: `<input class="w-auto" type="search" name="search" placeholder="Search" aria-label="Search" />

<ul>
  <li>
    <details>
      <summary aria-haspopup="menu">About</summary>
      <ul dir="rtl" role="menu">
        <li><a role="menuitem" href="#" onclick="event.preventDefault()">Services</a></li>
        <li><a role="menuitem" href="#" onclick="event.preventDefault()">Portfolio</a></li>
        <li><a role="menuitem" href="#" onclick="event.preventDefault()">Careers</a></li>
      </ul>
    </details>
  </li>
  <li><a href="#" role="button" class="secondary">Log In</a></li>
</ul>`,
  }
};

export const PagesNavigation: StoryObj<Args> = {
  args: {
    slot: `<ul>
  <li><a href="#">Overview</a></li>
  <li><a href="#">Layout</a></li>
</ul>`,
  }
};

export const PageNavigation: StoryObj<Args> = {
  args: {
    slot: `<ul>
  <li><a href="#">How to go about it</a></li>
</ul>`,
  }
};
