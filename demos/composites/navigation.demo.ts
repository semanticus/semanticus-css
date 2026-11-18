import { SidebarDemo } from "@demos/components";
import { NavDemo, HeaderDemo, FooterDemo } from "@demos/semantics";

export function topBar(attrs: Record<string, string> = {}) {
  return HeaderDemo.topBar(attrs);
}

export function bottomBar(attrs: Record<string, string> = {}) {
  return FooterDemo.bottomBarWithAside(attrs);
}

export function sidebar(attrs: Record<string, string> = {}) {
  return SidebarDemo.popoverExample(attrs);
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
