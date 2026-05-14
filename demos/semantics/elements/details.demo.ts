import { renderElement } from "@scripts/utils";

export function main(attrs: Record<string, string> = {}) {
  return renderElement("details", attrs, `<summary>Accordion 1</summary>
<p>
  This content is hidden by default and revealed when you click the summary.
  Accordions are great for organizing content into collapsible sections.
</p>`);
}

export function entangledAccordions() {
  return `<details name="accordion-group">
  <summary>Accordion 1</summary>
  <p>
    This content is hidden by default and revealed when you click the summary.
    Accordions are great for organizing content into collapsible sections.
  </p>
</details>

<hr />

<details name="accordion-group" open>
  <summary>Accordion 2</summary>
  <ul>
    <li>This accordion starts in the open state.</li>
    <li>Use the <code>open</code> attribute to expand by default.</li>
    <li>Click the summary to collapse.</li>
    <li>Great for FAQ sections or settings panels.</li>
  </ul>
</details>`;
}

export function asButton() {
  return `<details>
  <summary role="button">Button-style Accordion</summary>
  <p>The <code>summary[role=button]</code> turns the accordion trigger into a full-width button.</p>
</details>`;
}

export function basicDropdown(attrs: Record<string, string> = {}) {
  return renderElement("details", attrs, `<summary aria-haspopup="menu">Dropdown</summary>
<ul role="menu">
  <li><a role="menuitem" href="#">Solid</a></li>
  <li><a role="menuitem" href="#">Liquid</a></li>
  <li><a role="menuitem" href="#">Gas</a></li>
  <li><a role="menuitem" href="#">Plasma</a></li>
</ul>`);
}

export function dropdownWithRadios() {
  return `<details>
  <summary aria-haspopup="menu">Select a phase of matter...</summary>
  <ul role="menu">
    <li>
      <label>
        <input type="radio" name="phase" value="solid" />
        Solid
      </label>
    </li>
    <li>
      <label>
        <input type="radio" name="phase" value="liquid" />
        Liquid
      </label>
    </li>
  </ul>
</details>
`;
}

export function dropdownWithCheckboxes(attrs: Record<string, string> = {}) {
  return renderElement("details", attrs, `<summary aria-haspopup="menu">Select phases of matter...</summary>
<ul role="menu">
  <li>
    <label>
      <input type="checkbox" name="solid" />
      Solid
    </label>
  </li>
  <li>
    <label>
      <input type="checkbox" name="liquid" />
      Liquid
    </label>
  </li>
</ul>`);
}

export function dropdownAsButton() {
  return `<details>
  <summary role="button" aria-haspopup="menu">Dropdown as a button</summary>
  <ul role="menu">
    <li><a role="menuitem" href="#">Solid</a></li>
    <li><a role="menuitem" href="#">Liquid</a></li>
    <li><a role="menuitem" href="#">Gas</a></li>
    <li><a role="menuitem" href="#">Plasma</a></li>
  </ul>
</details>
`;
}

export function dropdownValidationStates() {
  return `<details>
  <summary aria-haspopup="menu" aria-invalid="false">Valid phase of matter: Solid</summary>
  <ul role="menu">
    <li><a role="menuitem" href="#">Solid</a></li>
    <li><a role="menuitem" href="#">Liquid</a></li>
    <li><a role="menuitem" href="#">Gas</a></li>
    <li><a role="menuitem" href="#">Plasma</a></li>
  </ul>
</details>

<details>
  <summary aria-haspopup="menu" aria-invalid="true">Debated classification: Plasma</summary>
  <ul role="menu">
    <li><a role="menuitem" href="#">Solid</a></li>
    <li><a role="menuitem" href="#">Liquid</a></li>
    <li><a role="menuitem" href="#">Gas</a></li>
    <li><a role="menuitem" href="#">Plasma</a></li>
  </ul>
</details>
`;
}

export function dropdownInNav() {
  return `<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#">Services</a></li>
    <li>
      <details>
        <summary aria-haspopup="menu">Account</summary>
        <ul role="menu" dir="rtl">
          <li><a role="menuitem" href="#">Profile</a></li>
          <li><a role="menuitem" href="#">Settings</a></li>
          <li><a role="menuitem" href="#">Security</a></li>
          <li><a role="menuitem" href="#">Logout</a></li>
        </ul>
      </details>
    </li>
    <li><button>Log Out</button></li>
  </ul>
</nav>
`;
}

export function faq() {
  return `<h1>Frequently Asked Questions</h1>

<details>
  <summary>How do I get started?</summary>
  <div>
    <p>Simply include the CSS file in your HTML and start using the classes.</p>
  </div>
</details>

<hr />

<details>
  <summary>Can I customize the colors?</summary>
  <div>
    <p>Yes! Override the CSS variables to customize colors and more.</p>
  </div>
</details>

<hr />

<details>
  <summary>Is JavaScript required?</summary>
  <div>
    <p>No! Semanticus CSS is pure CSS with zero JavaScript dependencies.</p>
  </div>
</details>
`;
}
