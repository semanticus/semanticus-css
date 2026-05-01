export const CompositesLayoutDemo = {
  commonLayout() {
    return `<main class="container">
  <header>
    <hgroup>
      <h1>Page Title</h1>
      <p>This content is constrained within a responsive container.</p>
    </hgroup>
  </header>

  <div class="grid gap-3 mt-4">
    <article class="card">
      <h3>Card 1</h3>
      <p>Content in a grid layout.</p>
    </article>
    <article class="card">
      <h3>Card 2</h3>
      <p>Auto-fit columns.</p>
    </article>
    <article class="card">
      <h3>Card 3</h3>
      <p>Responsive by default.</p>
    </article>
  </div>
</main>
`;
  },
};
