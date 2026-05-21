import { renderElement } from "@scripts/utils";

export function main(tagName: string = "body", attrs: Record<string, string> = {}) {
  return renderElement(tagName, { ...attrs, class: ["vstack", ...(attrs.class ? [attrs.class] : [])].join(' ') }, `<header class="container">
  <nav>
    <h3><a href="#">Acme Corp</a></h3>

    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#" role="button">Log In</a></li>
    </ul>
  </nav>
</header>

<main class="container py-d flex-grow-1">
  <hgroup>
    <h1>Welcome to Semanticus CSS</h1>
    <p>A lightweight CSS framework for modern web development.</p>
  </hgroup>

  <button class="secondary">Get Started</button>
</main>

<footer class="text-center text-bg-secondary-subtle">
  <p>Acme Corp &copy; 2026. All rights reserved.</p>
</footer>`);
}
