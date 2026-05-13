export function semanticStyling() {
  return `<form>
  <hgroup>
    <h1>Hello World</h1>
    <p>Look at me, I'm <strong>bold</strong> and <em>stylish!</em></p>
  </hgroup>

  <fieldset role="group">
    <input type="email" name="email" placeholder="Enter your email" autocomplete="email" />
    <input type="submit" value="Subscribe" />
  </fieldset>
</form>`;
}

export function variants() {
  return `<button class="ghost">Ghost</button>
<button class="secondary">Secondary</button>
<button class="contrast">Contrast</button>`;
}

export function utilities() {
  return `<footer class="py-4 text-center text-bg-contrast-subtle">
  <p class="mb-0">Star us on GitHub!</p>
</footer>`;
}

export function starterHtmlTemplateDemo() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@semanticus/semanticus-css@0.9.0/dist/semanticus.css">
</head>

<body class="vstack">
  <header class="container sticky-top bg-body">
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
  </footer>
</body>
</html>`;
}
