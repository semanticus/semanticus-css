import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement("header", attrs, `<hgroup>
  <h1>My account</h1>
  <p>Manage your account settings</p>
</hgroup>

<nav>
  <button>Save</button>
  <button class="secondary subtle">Cancel</button>
</nav>`);
}

export function withSearchAndNavigationExample(
  attrs: Record<string, string> = {},
) {
  return renderElement("header", attrs, `<strong>Acme Corp</strong>

<input class="w-auto" type="search" name="search" placeholder="Search" aria-label="Search" />

<nav>
  <ul>
    <li><a href="#" aria-current="page">Docs</a></li>
    <li>
      <details>
        <summary aria-haspopup="menu">About</summary>
        <ul dir="rtl" role="menu">
          <li role="menuitem"><a href="#services">Services</a></li>
          <li role="menuitem"><a href="#company">Company</a></li>
          <li role="menuitem"><a href="#careers">Careers</a></li>
        </ul>
      </details>
    </li>
  </ul>
</nav>`);
}
