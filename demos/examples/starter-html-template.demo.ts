import { renderElement } from "@scripts/utils";

export function main(
  tagName: string = "body",
  attrs: Record<string, string> = {},
) {
  return renderElement(
    tagName,
    {
      ...attrs,
      class: ["content-grid", ...(attrs.class ? [attrs.class] : [])].join(" "),
    },
    `<header>
  <nav>
    <a href="#" class="fs-3"><strong>Acme Corp</strong></a>

    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#" role="button" class="contrast">Log In</a></li>
    </ul>
  </nav>
</header>

<main class="py-d mb-3">
  <hgroup>
    <h1>Welcome to Semanticus CSS</h1>
    <p>ARIA-centric, semantic HTML enhanced by atomic utilities.</p>
  </hgroup>

  <button>Get Started</button>
</main>

<footer class="full-width pane secondary subtle">
  <nav>
    <p>Acme Corp &copy; 2026</p>
    <a href="#">Contact Us</a>
  </nav>
</footer>`,
  );
}
