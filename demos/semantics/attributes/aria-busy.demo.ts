export function basic() {
  return `<article class="card" aria-busy="true">
  Loading content...
</article>
`;
}

export function loadingButton() {
  return `<button aria-busy="true" disabled>Loading...</button>
`;
}

export function loadingForm() {
  return `<form aria-busy="true">
  <label>Name</label>
  <input type="text" disabled>
  <label>Email</label>
  <input type="email" disabled>
  <button disabled>Submit</button>
</form>
`;
}
