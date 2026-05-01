export const basic = `<p>This content is visible</p>
<p hidden>This content is hidden</p>
<p>This content is also visible</p>
`;

export const toggle = `<div>
  <button onclick="document.getElementById('toggle-content').toggleAttribute('hidden')">
    Toggle Content
  </button>
  <p id="toggle-content" hidden>
    This content can be toggled visible and hidden!
  </p>
</div>
`;
