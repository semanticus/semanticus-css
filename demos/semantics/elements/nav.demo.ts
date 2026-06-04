import { renderElement } from "@scripts/utils";
import * as AsideDemo from "@demos/semantics/elements/aside.demo";

export function main(attrs: Record<string, string> = {}, slot: string = "") {
  return renderElement(
    "nav",
    attrs,
    slot ||
      `<a href="#"><strong>Acme Corp</strong></a>

<p>tag line</p>

<a href="#!" class="secondary">Log out</a>`,
  );
}

export function horizontalHeaderNavigation(
  attrs: Record<string, string> = {},
  brandName: string = "Semanticus CSS",
) {
  return main(
    attrs,
    `<div>
  <img style="width: 30px" src="https://semanticus.design/logo.svg" alt="Brand logo">
  <strong class="fs-6">${brandName}</strong>
</div>

<ul>
  <li><a href="#about">About</a></li>
  <li><a href="#products" aria-current="page">Products</a></li>
  <li><button>Log In</button></li>
</ul>`,
  );
}

export function horizontalHeaderWithSearchAndDropdown(
  attrs: Record<string, string> = {},
) {
  return main(
    attrs,
    `<input type="search" name="search" placeholder="Search" aria-label="Search" />

<ul>
  <li><a href="#" aria-current="page">Products</a></li>
  <li>
    <details>
      <summary aria-haspopup="menu">About</summary>
      <ul dir="rtl" role="menu">
        <li><a role="menuitem" href="#">Services</a></li>
        <li><a role="menuitem" href="#">Portfolio</a></li>
        <li><a role="menuitem" href="#">Careers</a></li>
      </ul>
    </details>
  </li>
  <li><button>Log In</button></li>
</ul>`,
  );
}

export function logoTaglineLinks() {
  return `<nav>
  <h2>logo</h2>

  <h3>tagline</h3>

  <ul>
    <li><a href="#!">Log out</a></li>
  </ul>
</nav>`;
}

export function searchAndDropdownExample() {
  return `<nav>
  <input type="search" name="search" placeholder="Search" aria-label="Search" />

  <ul>
    <li><a href="#" aria-current="page">Docs</a></li>
    <li>
      <details>
        <summary aria-haspopup="menu">About</summary>
        <ul dir="rtl" role="menu">
          <li><a role="menuitem" href="#services">Services</a></li>
          <li><a role="menuitem" href="#company">Company</a></li>
          <li><a role="menuitem" href="#careers">Careers</a></li>
        </ul>
      </details>
    </li>
    <li><a href="#" role="button" class="contrast">Log In</a></li>
  </ul>
</nav>`;
}

export function copyrightAndContactUs() {
  return `<nav>
  <p>Copyright</p>

  <ul>
    <li><a href="#!">Contact Us</a></li>
  </ul>
</nav>`;
}

export function pagesLinks() {
  return `<nav>
  <ul>
    <li><a href="#">Overview</a></li>
    <li><a href="#">Layout</a></li>
  </ul>
</nav>`;
}

export function pageLinks() {
  return `<nav>
  <ul>
    <li><a href="#">Install</a></li>
    <li><a href="#">Usage</a></li>
  </ul>
</nav>`;
}

export function breadcrumbs(attrs: Record<string, string> = {}) {
  return main(
    { ...attrs, "aria-label": "Breadcrumbs" },
    `<ol>
  <li><a href="#">Home</a></li>
  <li><a href="#category">Category</a></li>
  <li aria-current="page"><a href="#page">Page</a></li>
</ol>`,
  );
}

export function sidebarExample(attrs: Record<string, string> = {}) {
  return AsideDemo.sidebarWithFixedSize({}, verticalSidebarNavigation(attrs));
}

export function verticalSidebarNavigation(attrs: Record<string, string> = {}) {
  return main(
    { ...attrs },
    `<ul>
  <li>
    <div class="hstack gap-1">
      <img style="width: 30px" src="https://semanticus.design/logo.svg" alt="Brand logo" />
      <strong class="fs-6">Semanticus CSS</strong>
    </div>
  </li>
  <li><hr /></li>

  <li><a href="#about">About</a></li>
  <li><a href="#getting-started" aria-current="page">Getting Started</a></li>
  <li><a href="#advanced-usage">Advanced Usage</a></li>
  <li><a href="#uninstall">Uninstall</a></li>

  <li class="flex-grow-1"></li>
  <li><button class="ghost">Support</button></li>
</ul>`,
  );
}
