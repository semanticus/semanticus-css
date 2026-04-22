---
title: Validation States
---

<script setup>
const formValidationHtml = `<form>
  <fieldset>
    <label>
      Email address
      <input
        type="email"
        name="email"
        placeholder="user@example.com"
        aria-invalid="false"
        aria-describedby="email-helper"
        required
      />
      <small id="email-helper">We'll never share your email with anyone else.</small>
    </label>

    <label>
      Password
      <input
        type="password"
        name="password"
        aria-invalid="true"
        aria-describedby="password-helper"
        required
      />
      <small id="password-helper">Password must be at least 8 characters long.</small>
    </label>
  </fieldset>

  <input type="submit" value="Sign Up" />
</form>
`;
</script>

# Validation States

Validation states provide visual feedback to users about the validity of form input.

Use the `aria-invalid` attribute to indicate validation state:

- `aria-invalid="true"` — Indicates the field has failed validation
- `aria-invalid="false"` — Indicates the field has passed validation

Pair with `aria-describedby` to link helper text that explains the validation result:

```html
<input
  type="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<small id="email-error">Please enter a valid email address.</small>
```

## Form Validation Example

<HtmlPreviewer :code="formValidationHtml" />

::: info
The `<small>` element associated with a form control via `aria-describedby` automatically inherits the validation state colors.
:::

## Best Practices

### Accessibility First

- Always use `aria-invalid` to communicate state to assistive technologies
- Pair with `aria-describedby` to provide context for the validation state
- Ensure error messages are clear and actionable

### Visual Feedback

- Use the `:invalid` and `:valid` pseudo-classes for native HTML5 validation
- Combine with `aria-invalid` for JavaScript-driven validation
- Helper text (`<small>`) below form controls inherits validation colors automatically

### Progressive Enhancement

1. Start with HTML5 validation attributes (`required`, `type`, `pattern`)
2. Enhance with JavaScript validation for complex rules
3. Use `aria-invalid` to communicate custom validation results

## Reference

For detailed implementation of `aria-invalid` on specific elements, see the [\[aria-invalid\]](/docs/semantics/aria-invalid) documentation.
