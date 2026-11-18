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

export function basicUsage(
  attrs: Record<string, string> = {}
) {
  return main(attrs, `<a href="#details" class="secondary">
  <span class="icon-search" aria-hidden="true"></span>View
</a>
<a href="#edit">
  <span class="icon-checkbox" aria-hidden="true"></span>Edit
</a>
<a href="#details" class="danger">
  <span class="icon-invalid" aria-hidden="true"></span>Delete
</a>`);
}

export function horizontalNavigation(
  attrs: Record<string, string> = {},
) {
  return main(
    attrs,
    `<ul>
  <li><a href="#careers">Careers</a></li>
  <li><a href="#about" aria-current="page">About us</a></li>
  <li><a href="#contact">Contact us</a></li>
</ul>

<ul>
  <li><a href="#terms-of-service">Terms of Service</a></li>
  <li><a href="#privacy-policy">Privacy Policy</a></li>
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

export function verticalNavigation(attrs: Record<string, string> = {}) {
  return AsideDemo.withFixedSize(attrs, docsAndHelpLinks());
}

export function docsLinks(
  attrs: Record<string, string> = {},
) {
  return main(
    { ...attrs },
    `<ul>
  <li><a href="#">About</a></li>
  <li><a href="#" aria-current="page">Getting Started</a></li>
  <li><a href="#">Advanced Usage</a></li>
  <li><a href="#">Uninstall</a></li>
</ul>`,
  );
}

export function helpLinks(
  attrs: Record<string, string> = {},
) {
  return main(
    { ...attrs },
    `<button class="ghost">Support</button>
<a href="#" role="button">Download</a>`,
  );
}

export function docsAndHelpLinks(
  attrs: Record<string, string> = {}
) {
  return `${docsLinks(attrs)}

${helpLinks(attrs)}`;
}
