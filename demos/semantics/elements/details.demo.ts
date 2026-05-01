export function basic() {
  return `<details open name="accordion-group">
  <summary>Accordion 1</summary>
  <p>Flamingos are known for their bright pink feathers and distinctive long necks. These birds are social creatures that live in large groups, and a group of flamingos is called a flamboyance. They can often be seen standing on one leg, which helps them conserve body heat.</p>
</details>

<hr />

<details name="accordion-group">
  <summary>Accordion 2</summary>
  <ul>
    <li>Kangaroos are marsupials that are native to Australia.</li>
    <li>They are known for their powerful hind legs, which they use to hop around.</li>
    <li>Kangaroos can't walk backwards due to the shape of their legs and tail.</li>
    <li>Baby kangaroos, called joeys, are born very small and undeveloped and must crawl into their mother's pouch to continue developing.</li>
    <li>Some species of kangaroos can leap up to 30 feet in a single bound.</li>
  </ul>
</details>
`;
}

export function basicDropdown() {
  return `<details>
  <summary aria-haspopup="menu">Dropdown</summary>
  <ul role="menu">
    <li><a role="menuitem" href="#">Solid</a></li>
    <li><a role="menuitem" href="#">Liquid</a></li>
    <li><a role="menuitem" href="#">Gas</a></li>
    <li><a role="menuitem" href="#">Plasma</a></li>
  </ul>
</details>

<select name="select" aria-label="Select" required>
  <option selected disabled value="">Select</option>
  <option>Solid</option>
  <option>Liquid</option>
  <option>Gas</option>
  <option>Plasma</option>
</select>
`;
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

export function dropdownWithCheckboxes() {
  return `<details>
  <summary aria-haspopup="menu">Select phases of matter...</summary>
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
  </ul>
</details>
`;
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
