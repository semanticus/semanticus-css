export function semanticStyling() {
  return `<article>
  <hgroup>
    <h1>Hello World</h1>
    <p>Look at me, I'm <strong>bold</strong> and <em>stylish!</em></p>
  </hgroup>

  <button>Get Started</button>
</article>`;
}

export function components() {
  return `<article class="card">
  <hgroup>
    <h1>Hello World</h1>
    <p>Look at me, I'm <strong>bold</strong> and <em>stylish!</em></p>
  </hgroup>

  <button>Get Started</button>
</article>`;
}

export function variants() {
  return `<article class="card secondary subtle">
  <hgroup>
    <h1>Hello World</h1>
    <p>Look at me, I'm <strong>bold</strong> and <em>stylish!</em></p>
  </hgroup>

  <button class="info ghost">Get Started</button>
</article>`;
}

export function utilities() {
  return `<article class="card secondary subtle shadow text-center w-75 mx-auto">
  <hgroup>
    <h1>Hello World</h1>
    <p>Look at me, I'm <strong>bold</strong> and <em>stylish!</em></p>
  </hgroup>

  <button class="info bg-opacity-75">Get Started</button>
</article>`;
}
