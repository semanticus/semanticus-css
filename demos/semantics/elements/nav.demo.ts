import { renderElement } from "@scripts/utils";

function render(attrs: Record<string, string>, slot: string = "") {
  return renderElement("nav", attrs, slot);
}

export function main(attrs: Record<string, string> = {}) {
  return render(attrs, `<ul>
  <li><h2>logo</h2></li>
</ul>

<ul>
  <li><a href="#" aria-current="page" onclick="event.preventDefault()">Products</a></li>
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
  <li><button>Log In</button></li>
</ul>`);
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

export function searchDropdownAndLinks() {
  return `<nav>
  <input class="w-auto" type="search" name="search" placeholder="Search" aria-label="Search" />

  <ul>
    <li><a href="#" aria-current="page">Docs</a></li>
    <li>
      <details>
        <summary aria-haspopup="menu">About</summary>
        <ul dir="rtl" role="menu">
          <li><a role="menuitem" href="#" onclick="event.preventDefault()">Services</a></li>
          <li><a role="menuitem" href="#" onclick="event.preventDefault()">Company</a></li>
          <li><a role="menuitem" href="#" onclick="event.preventDefault()">Careers</a></li>
        </ul>
      </details>
    </li>
    <li><a href="#" role="button" class="secondary">Log In</a></li>
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

export function verticalInAside() {
  return `<aside>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</aside>`;
}

export function breadcrumbs() {
  return `<nav aria-label="breadcrumb">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li>Page</li>
  </ul>
</nav>`;
}
