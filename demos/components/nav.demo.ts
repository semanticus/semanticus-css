import { renderElement, classMergeAttributes } from "@scripts/utils";

export function header(attrs: Record<string, string> = {}) {
  return renderElement(
    "header",
    classMergeAttributes("nav", attrs),
    `<hgroup>
  <h1>Pages</h1>
  <p>Your pages and content</p>
</hgroup>

<nav>
  <a href="#new" class="button">New Page</a>
</nav>`,
  );
}

export function footer(attrs: Record<string, string> = {}) {
  return renderElement(
    "footer",
    classMergeAttributes("nav", attrs),
    `<strong>Acme Corp</strong>

<small>© 2020</small>

<ul>
  <li><a href="#privacy">Privacy</a></li>
  <li><a href="#terms">Terms</a></li>
</ul>`,
  );
}
