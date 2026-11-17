import { NavDemo, HeaderDemo, FooterDemo } from "@demos/semantics";
import { renderElement } from "@scripts/utils";

export function topBar(attrs: Record<string, string> = {}) {
  return HeaderDemo.topBar(attrs);
}

export function bottomBar(attrs: Record<string, string> = {}) {
  return FooterDemo.bottomBarWithAside(attrs);
}

export function sidebar(attrs: Record<string, string> = {}) {
  attrs.style = "height: 400px; width: 250px;";

  return renderElement("aside", attrs, `<nav>
  <ul>
    <li><a href="#">About</a></li>
    <li><a href="#" aria-current="page">Getting Started</a></li>
    <li><a href="#">Advanced Usage</a></li>
    <li><a href="#">Uninstall</a></li>
  </ul>
</nav>

<nav>
  <button class="ghost">Support</button>
</nav>`);
}

export function breadcrumbs(attrs: Record<string, string> = {}) {
  return NavDemo.breadcrumbs(attrs);
}

export function pageTitleAndControls(attrs: Record<string, string> = {}) {
  return HeaderDemo.pageTitleAndControls(attrs);
}

export function formControls(attrs: Record<string, string> = {}) {
  return FooterDemo.formControls(attrs);
}
