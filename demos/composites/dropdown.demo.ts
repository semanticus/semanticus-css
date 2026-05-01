export const DropdownDemo = {
  basicDropdown() {
    return `<details>
  <summary aria-haspopup="menu">Choose an option</summary>
  <ul role="menu">
    <li><a role="menuitem" href="#">Profile</a></li>
    <li><a role="menuitem" href="#">Settings</a></li>
    <li><a role="menuitem" href="#">Logout</a></li>
  </ul>
</details>
`;
  },
};
