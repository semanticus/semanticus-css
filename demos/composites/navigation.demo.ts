import { NavDemo } from "@demos/semantics";
import { renderElement } from "@scripts/utils";

export function header(attrs: Record<string, string> = {}) {
  return renderElement("header", attrs, `<strong class="fs-3">Acme Corp</strong>

<nav>
  <ul>
    <li><a href="#explore" aria-current="page">Explore</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<nav>
  <a href="#login">Log in</a>
  <a href="#signup" role="button">Sign up</a>
</nav>`);
}

export function sidebar(attrs: Record<string, string> = {}) {
  attrs.style = "height: 400px; width: 250px;";

  return renderElement("aside", attrs, `<div class="border-bottom pb-2">
  <strong class="fs-3">Acme Corp</strong>
</div>

<nav class="flex-grow-1">
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#getting-started" aria-current="page">Getting Started</a></li>
    <li><a href="#advanced-usage">Advanced Usage</a></li>
    <li><a href="#uninstall">Uninstall</a></li>
  </ul>
</nav>

<nav>
  <button class="ghost">Support</button>
</nav>`);
}

export function breadcrumbs(attrs: Record<string, string> = {}) {
  return NavDemo.breadcrumbs(attrs);
}
