# Semantic Styling

Style plain HTML elements without adding any classes. Just write semantic HTML and **Semanticus CSS** handles the rest.

## Accessibility as part of the design

In **Semanticus CSS**, accessibility is not treated as a separate pass after the interface is already designed.

The semantics docs highlight patterns where accessible HTML naturally produces better styling hooks and clearer UI states.

- A loading region can be expressed with `aria-busy="true"`
- Validation can be expressed with `aria-invalid`
- Disabled controls remain native disabled controls
- **Tooltips** use the [ARIA: tooltip pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)
- **Dropdowns** use the [ARIA: menu pattern](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- **Modals** use the [Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
- **Sidebars** use the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)

and so on.

This keeps the source markup easier to read and helps teams think about accessibility earlier, because the same decisions that improve semantics also unlock built-in styling.
