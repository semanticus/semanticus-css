# Token Naming Convention

Semanticus organizes theme tokens into four tiers. The [CSS Variables reference](/guide/css-variables) lists the current defaults and explains migration from older overrides.

## Four Token Tiers

| Tier | Pattern | Example |
| --- | --- | --- |
| System | `--{property}` | `--background-color`, `--font-size` |
| Variant | `--{intent}-{property}[-{state}]` | `--primary-background-color-hover` |
| Component | `--{component}[-{part}]-{property}[-{state}]` | `--card-marginals-border-color` |
| Individual | `--_{component}[-{part}]-{property}[-{state}]` | `--_buttons-background-color` |

System defaults feed component and variant values. Components initialize internal slots, which intent and modifier classes can override. This describes the token relationships; it is not a set of CSS cascade layers.

## Tier 1: System Tokens

```
--{property}
```

Use a CSS property name where practical: `--background-color`, `--color`, `--font-size`, `--font-weight`, `--line-height`, `--border-width`, and `--border-radius`.

Some tokens describe shared design values instead: `--spacing` and its numbered scale, `--color-muted-fade`, and `--color-hover-shade`. `--typography-color` defaults to `--color`; components can change it for their content.

## Tier 2: Variant Tokens

```
--{intent}-{property}[-{state}]
```

Intent prefixes are `primary`, `secondary`, `contrast`, `success`, `info`, `warning`, and `danger`. Each has color, background-color, hover, outline-color, and subtle-background-color tokens. There is no outline hover token family.

```css
:root {
  --primary-background-color: #6366f1;
  --primary-color: light-dark(#4f46e5, #a5b4fc);
  --primary-background-color-hover: #4f46e5;
}
```

The palette sets the primary base values. Shared theme and variant definitions derive the other colors. Load custom overrides after the base bundle and any palette.

## Tier 3: Component Tokens

```
--{component}[-{part}]-{property}[-{state}]
```

Use the existing component scope and CSS property segment:

```css
:root {
  --buttons-padding-inline: 1.25rem;
  --inputs-border-radius: 0.5rem;
  --card-background-color: light-dark(white, #181c25);
  --card-marginals-border-color: var(--border-color);
  --menu-background-color: light-dark(white, #181c25);
  --pane-padding-block: var(--spacing-3);
  --alert-border-accent-width: 0.25rem;
}
```

Buttons and inputs use plural scopes (`--buttons-*`, `--inputs-*`). Input subtypes retain singular names such as `--input-range-track-height` and `--input-switch-border-width`. Headings have per-level scopes such as `--h1-font-weight` and `--h6-font-size`.

## Tier 4: Individual Component Tokens

The `--_` prefix marks internal values. For example, a button initializes `--_buttons-background-color` from `--buttons-background-color`; intent variants then adjust that slot. Cards similarly initialize `--_card-background-color` from `--card-background-color`.

Prefer public tokens in application overrides:

```css
.card.featured {
  --card-background-color: light-dark(#eef2ff, #202632);
}
```

An override on a wrapper is inherited only if a descendant does not redeclare the token. Internal slots may be reset on the component or by variants, so they are not a stable public API for per-instance customization. Private color helpers and size scales also use `--_`; not every private token is a component slot.

## Property Name Rules

Include the CSS property name where possible. For example, use `--buttons-background-color` for a color slot and `--inputs-border-width` for a width slot. Layout controls such as `--sidebar-size`, `--auto-grid-min`, icon assets, and shared scale tokens are exceptions.

### State Ordering

State comes last:

```text
--buttons-background-color-hover
--inputs-background-color-focus
--details-summary-color-open
```

Naming alone does not establish that a component consumes a token. The current summary consumer differs from the declared theme defaults; see [component hooks](/guide/css-variables#layout-and-component-hooks).

### Spacing Tokens

Use the relevant CSS property for component spacing, such as `--buttons-padding-block` or `--typography-margin-block`. Use `--spacing` for shared density and `--spacing-1` through `--spacing-9` for the semantic scale. Utilities use a separate five-step `--spacer-*` mapping; suffixes are not interchangeable between the two scales.

### Cascade-Seed Tokens

`--font-size`, `--font-weight`, `--line-height`, and `--text-underline-offset` supply shared defaults. The theme changes base font size and spacing at responsive breakpoints. Component tokens such as `--buttons-font-size` and `--inputs-font-size` can customize particular controls.

## Updating Older Overrides

The old dialog color tokens, details-specific menu tokens, and small-font token are no longer the current customization API. Use the [migration table](/guide/css-variables#updating-older-overrides) and the component documentation rather than applying the historical v2-to-v3 rename table to v4.
