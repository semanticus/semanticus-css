export const LoadingDemo = {
  loadingCard() {
    return `<article class="card" aria-busy="true">
  <hgroup>
    <h3>Loading Content</h3>
    <p>Please wait while we fetch your data...</p>
  </hgroup>
</article>
`;
  },

  loadingButton() {
    return `<button aria-busy="true" disabled>Processing...</button>
<button class="secondary">Cancel</button>
`;
  },

  loadingWithProgress() {
    return `<article class="card">
  <h3>Uploading File...</h3>
  <progress value="65" max="100">65%</progress>
  <small>Uploading document.pdf (65% complete)</small>
</article>
`;
  },
};
