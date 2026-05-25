import { renderElement } from "@scripts/utils";

export function main(tagName: string = "body", attrs: Record<string, string> = {}) {
  return renderElement(tagName, { ...attrs, class: ["flow-v", ...(attrs.class ? [attrs.class] : [])].join(' ') }, renderElement("div", { class: "flow-h container" } , `${leftSidebar({
    class: "bg-secondary-subtle bg-opacity-25 d-none d-md-flex",
    popover: "auto",
    id: "left-sidebar"
  })}

${renderElement("main", { class: "flex-grow-1" } , `${withSearchDropdownAndLinks({ class: "border-bottom ps-0 ps-md-d bg-body" })}

<nav class="d-flex d-xl-none border-bottom pb-d mb-d ps-0 ps-md-d">
  <button role="link" class="d-inline-block d-md-none" popovertarget="left-sidebar">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h14"/></svg>
    <small>menu</small>
  </button>
  <p></p>
  <button role="link" class="d-inline-block" popovertarget="right-sidebar">
    <small>on this page</small>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16m-10 6h10M6 18h14"/></svg>
  </button>
</nav>

${renderElement("div", { class: "flow-h pt-d" }, `${renderElement("div", { class: "layout-grid" } , `${multipleParagraphs({ class: "full-width pb-d" })}

${renderElement("footer", { class: 'border-top' }, `<nav>
  <p>Copyright</p>

  <ul>
    <li><a href="#!">Contact Us</a></li>
  </ul>
</nav>`)}`)}

${rightSidebar({
  class: "border-start d-none d-xl-flex",
  popover: "auto",
  id: "right-sidebar",
  "data-placement": "right"
})}`)}`)}`));
}

function multipleParagraphs(attrs: Record<string, string> = {}) {
  return renderElement("article", attrs, `<h1>Getting Started</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.</p>
  <blockquote class="breakout">Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote>
  <p>Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet.</p>
  <p>Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  <p>In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est. Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies.</p>`);
}

export function leftSidebar(attrs: Record<string, string> = {}) {
  return renderElement("aside", { ...attrs, class: `sidebar ${attrs.class || ""}`.trim() }, `<h2 class="fs-3">Guide</h2>
<nav>
  <ul>
    <li><a href="#" aria-current="page">Getting Started</a></li>
    <li><a href="#">Light & Dark</a></li>
    <li><a href="#">Palettes & Sizes</a></li>
  </ul>
</nav>

<a href="#" role="button" class="ghost">Support</a>`);
}

export function rightSidebar(attrs: Record<string, string> = {}) {
  return renderElement("aside", { ...attrs, class: `sidebar ${attrs.class || ""}`.trim() }, `<h3 class="fs-6">On this page</h3>
<nav>
  <ul>
    <li><a href="#">Install</a></li>
    <li><a href="#">Usage</a></li>
  </ul>
</nav>`);
}

export function withSearchDropdownAndLinks(attrs: Record<string, string> = {}) {
  return renderElement("header", attrs, `<nav>
  <input class="w-auto" type="search" name="search" placeholder="Search" aria-label="Search" />

  <ul>
    <li><a href="#" aria-current="page">Guide</a></li>
    <li><a href="#">Docs</a></li>
    <li><a href="#" role="button" class="secondary">Log In</a></li>
  </ul>
</nav>`);
}
