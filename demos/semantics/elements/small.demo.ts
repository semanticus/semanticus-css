export function basic() {
  return `<input
  type="email"
  name="email"
  placeholder="Email"
  autocomplete="email"
  aria-label="Email"
  aria-describedby="email-helper"
/>
<small id="email-helper">We'll never share your email with anyone else.</small>
`;
}
