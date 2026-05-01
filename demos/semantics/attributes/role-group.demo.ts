export function basic() {
  return `<div role="group">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
</div>`;
}

export function inputWithButton() {
  return `<fieldset role="group">
  <input type="text" placeholder="Enter value">
  <button>Go</button>
</fieldset>`;
}

export function selectWithButton() {
  return `<fieldset role="group">
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <button>Action</button>
</fieldset>`;
}

export function multipleInputs() {
  return `<fieldset role="group">
  <input type="text" placeholder="First name">
  <input type="text" placeholder="Last name">
  <button>Save</button>
</fieldset>`;
}

export function paginationExample() {
  return `<fieldset role="group">
  <a href="#" role="button" disabled>Previous</a>
  <a href="#page-1" role="button">1</a>
  <a href="#page-2" role="button" aria-current="page">2</a>
  <a href="#page-3" role="button">3</a>
  <a href="#page-3" role="button">Next</a>
</fieldset>`;
}

export function newsletterExample() {
  return `<form>
  <label for="email">Subscribe to our newsletter</label>
  <fieldset role="group">
    <input type="email" id="email" placeholder="your@email.com">
    <button type="submit">Subscribe</button>
  </fieldset>
</form>`;
}
