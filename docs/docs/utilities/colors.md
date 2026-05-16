<script setup>
const bgColorsHtml = `<div class="text-bg-primary p-3 mb-2">.text-bg-primary</div>
<div class="text-bg-primary-subtle border border-primary-subtle p-3 mb-2">.text-bg-primary-subtle</div>
<div class="text-bg-secondary p-3 mb-2">.text-bg-secondary</div>
<div class="text-bg-secondary-subtle p-3 mb-2">.text-bg-secondary-subtle</div>
<div class="text-bg-contrast p-3 mb-2">.text-bg-contrast</div>
<div class="text-bg-contrast-subtle p-3 mb-2">.text-bg-contrast-subtle</div>
<div class="text-bg-success p-3 mb-2">.text-bg-success</div>
<div class="text-bg-success-subtle p-3 mb-2">.text-bg-success-subtle</div>
<div class="text-bg-info p-3 mb-2">.text-bg-info</div>
<div class="text-bg-info-subtle p-3 mb-2">.text-bg-info-subtle</div>
<div class="text-bg-warning p-3 mb-2">.text-bg-warning</div>
<div class="text-bg-warning-subtle p-3 mb-2">.text-bg-warning-subtle</div>
<div class="text-bg-danger p-3 mb-2">.text-bg-danger</div>
<div class="text-bg-danger-subtle p-3 mb-2">.text-bg-danger-subtle</div>
`;
const bgOnlyHtml = `<div class="bg-primary p-3 mb-2">.bg-primary</div>
<div class="bg-primary-subtle p-3 mb-2">.bg-primary-subtle</div>
<div class="bg-secondary p-3 mb-2">.bg-secondary</div>
<div class="bg-secondary-subtle p-3 mb-2">.bg-secondary-subtle</div>
<div class="bg-contrast p-3 mb-2">.bg-contrast</div>
<div class="bg-contrast-subtle p-3 mb-2">.bg-contrast-subtle</div>
<div class="bg-success p-3 mb-2">.bg-success</div>
<div class="bg-success-subtle p-3 mb-2">.bg-success-subtle</div>
<div class="bg-info p-3 mb-2">.bg-info</div>
<div class="bg-info-subtle p-3 mb-2">.bg-info-subtle</div>
<div class="bg-warning p-3 mb-2">.bg-warning</div>
<div class="bg-warning-subtle p-3 mb-2">.bg-warning-subtle</div>
<div class="bg-danger p-3 mb-2">.bg-danger</div>
<div class="bg-danger-subtle p-3 mb-2">.bg-danger-subtle</div>
<div class="bg-body p-3 mb-2 border">.bg-body</div>
<div class="bg-transparent p-3 mb-2 border">.bg-transparent</div>
`;
const bgOpacityHtml = `<div class="bg-primary p-2 mb-2">Default primary background</div>
<div class="bg-primary bg-opacity-75 p-2 mb-2">75% opacity</div>
<div class="bg-primary bg-opacity-50 p-2 mb-2">50% opacity</div>
<div class="bg-primary bg-opacity-25 p-2 mb-2">25% opacity</div>
<div class="bg-primary bg-opacity-10 p-2">10% opacity</div>
`;
const bgGradientHtml = `<div class="text-bg-primary bg-gradient p-3 mb-2">.bg-primary.bg-gradient</div>
<div class="text-bg-secondary bg-gradient p-3 mb-2">.bg-secondary.bg-gradient</div>
<div class="text-bg-contrast bg-gradient p-3 mb-2">.bg-contrast.bg-gradient</div>
<div class="text-bg-success bg-gradient p-3 mb-2">.bg-success.bg-gradient</div>
<div class="text-bg-info bg-gradient p-3 mb-2">.bg-info.bg-gradient</div>
<div class="text-bg-warning bg-gradient p-3 mb-2">.bg-warning.bg-gradient</div>
<div class="text-bg-danger bg-gradient p-3 mb-2">.bg-danger.bg-gradient</div>
`;
const textColorsHtml = `<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-contrast">.text-contrast</p>
<p class="text-success">.text-success</p>
<p class="text-info">.text-info</p>
<p class="text-warning">.text-warning</p>
<p class="text-danger">.text-danger</p>
<p class="text-muted">.text-muted</p>
<p class="text-reset">.text-reset</p>
`;
const textOpacityHtml = `<div class="vstack gap-d">
<div class="text-primary">Default primary text</div>
<div class="text-primary text-opacity-75">75% opacity primary text</div>
<div class="text-primary text-opacity-50">50% opacity primary text</div>
<div class="text-primary text-opacity-25">25% opacity primary text</div>
<div class="text-primary text-opacity-10">10% opacity primary text</div>
</div>
`;
const linkColorsHtml = `<div class="vstack gap-d">
<a href="#" class="link-primary">Primary link</a>
<a href="#" class="link-secondary">Secondary link</a>
<a href="#" class="link-contrast">Contrast link</a>
<a href="#" class="link-success">Success link</a>
<a href="#" class="link-info">Info link</a>
<a href="#" class="link-warning">Warning link</a>
<a href="#" class="link-danger">Danger link</a>
</div>`;
const linkOpacityHtml = `<div class="vstack gap-d">
  <a href="#" class="link-contrast link-opacity-10">Primary link 10%</a>
  <a href="#" class="link-contrast link-opacity-25">Primary link 25%</a>
  <a href="#" class="link-contrast link-opacity-50">Primary link 50%</a>
  <a href="#" class="link-contrast link-opacity-75">Primary link 75%</a>
  <a href="#" class="link-contrast link-opacity-100">Primary link 100%</a>
</div>`;
const linkUnderlineHtml = `<div class="vstack gap-d">
<a href="#" class="link-contrast link-opacity-25 link-underline-primary">Primary underline</a>
<a href="#" class="link-contrast link-opacity-25 link-underline-secondary">Secondary underline</a>
<a href="#" class="link-contrast link-opacity-25 link-underline-success">Success underline</a>
<a href="#" class="link-contrast link-opacity-25 link-underline-info">Info underline</a>
<a href="#" class="link-contrast link-opacity-25 link-underline-warning">Warning underline</a>
<a href="#" class="link-contrast link-opacity-25 link-underline-danger">Danger underline</a>
</div>`;
const practicalHtml = `<article class="card text-bg-primary-subtle border border-primary">
  <hgroup class="mb-0">
    <h3>Notification</h3>
    <p>Your changes have been saved successfully.</p>
  </hgroup>
</article>
`;
</script>

# Colors

Convey meaning through color with text, background, border, and link color utilities.

## Background Color

### Combined Text and Background

Use `.text-bg-*` to set both a matching background and text color at once.

<HtmlPreviewer :code="bgColorsHtml" />

### Background Only

Use `.bg-*` to set just the background color.

<HtmlPreviewer :code="bgOnlyHtml" />

### Background Opacity

Control background opacity with `.bg-opacity-*` utilities.

<HtmlPreviewer :code="bgOpacityHtml" />

### Background Gradient

Add a `.bg-gradient` class to apply a subtle gradient overlay.

<HtmlPreviewer :code="bgGradientHtml" />

## Text Color

Colorize text with `.text-*` utilities.

<HtmlPreviewer :code="textColorsHtml" />


### Text Opacity

<HtmlPreviewer :code="textOpacityHtml" />

## Link Colors

Colored links with hover states.

<HtmlPreviewer :code="linkColorsHtml" />

### Link Opacity

<HtmlPreviewer :code="linkOpacityHtml" />

### Link Underline Colors

<HtmlPreviewer :code="linkUnderlineHtml" />

## Practical Examples

### Alert-like Component

<HtmlPreviewer :code="practicalHtml" />
