import { renderElement, classMergeAttributes } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement("footer", attrs, `<small><strong>Acme Corp</strong> &copy; all rights reserved.</small>`);
}

export function bottomBar(attrs: Record<string, string> = {}) {
  return renderElement("footer", classMergeAttributes("nav", attrs), `<strong>Acme Corp</strong>

<p>&copy; all rights reserved.</p>

<nav>
  <a href="#contact">Contact Us</a>
</nav>`);
}

export function bottomBarWithAside(attrs: Record<string, string> = {}) {
  return renderElement("footer", classMergeAttributes("nav", attrs), `<div>
  <strong>Acme Corp</strong>
  <p>&copy; all rights reserved.</p>
</div>

<aside>
  <nav>
    <a href="#contact">Terms of Service</a>
    <a href="#contact">Privacy Policy</a>
    <a href="#contact">Contact Us</a>
  </nav>
</aside>`);
}

export function formControls(attrs: Record<string, string> = {}) {
  return renderElement("footer", attrs, `<button class="w-100" type="submit">Sign in</button>

<hr class="my-4">

<aside>
  <nav>
    <a href="#">Forgot password?</a>
    <a href="#">Don't have an account, yet? Create account</a>
  </nav>
</aside>`);
}
