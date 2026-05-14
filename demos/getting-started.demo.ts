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
