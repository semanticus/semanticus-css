export function basic() {
  return `<progress value="0" max="100"></progress>
<progress value="50" max="100"></progress>
<progress value="100" max="100"></progress>
`;
}

export function indeterminate() {
  return `<progress></progress>
`;
}

export function withLabel() {
  return `<label>
  Upload progress
  <progress value="50" max="100">50%</progress>
</label>
`;
}
