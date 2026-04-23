<script setup>
const bgColorsHtml = `<div class="text-bg-primary p-3 mb-2">.text-bg-primary</div>
<div class="text-bg-secondary p-3 mb-2">.text-bg-secondary</div>
<div class="text-bg-success p-3 mb-2">.text-bg-success</div>
<div class="text-bg-info p-3 mb-2">.text-bg-info</div>
<div class="text-bg-warning p-3 mb-2">.text-bg-warning</div>
<div class="text-bg-danger p-3 mb-2">.text-bg-danger</div>
<div class="text-bg-contrast p-3 mb-2">.text-bg-contrast</div>
`;
const bgOnlyHtml = `<div class="bg-primary p-3 mb-2">.bg-primary</div>
<div class="bg-secondary p-3 mb-2">.bg-secondary</div>
<div class="bg-success p-3 mb-2">.bg-success</div>
<div class="bg-info p-3 mb-2">.bg-info</div>
<div class="bg-warning p-3 mb-2">.bg-warning</div>
<div class="bg-danger p-3 mb-2">.bg-danger</div>
<div class="bg-contrast p-3 mb-2">.bg-contrast</div>
<div class="bg-body p-3 mb-2 border">.bg-body</div>
<div class="bg-body-secondary p-3 mb-2">.bg-body-secondary</div>
<div class="bg-transparent p-3 mb-2 border">.bg-transparent</div>
`;
const bgSubtleHtml = `<div class="bg-primary-subtle p-3 mb-2">.bg-primary-subtle</div>
<div class="bg-secondary-subtle p-3 mb-2">.bg-secondary-subtle</div>
<div class="bg-success-subtle p-3 mb-2">.bg-success-subtle</div>
<div class="bg-info-subtle p-3 mb-2">.bg-info-subtle</div>
<div class="bg-warning-subtle p-3 mb-2">.bg-warning-subtle</div>
<div class="bg-danger-subtle p-3 mb-2">.bg-danger-subtle</div>
`;
const bgOpacityHtml = `<div class="bg-success p-2 mb-2">Default success background</div>
<div class="bg-success bg-opacity-75 p-2 mb-2">75% opacity</div>
<div class="bg-success bg-opacity-50 p-2 mb-2">50% opacity</div>
<div class="bg-success bg-opacity-25 p-2 mb-2">25% opacity</div>
<div class="bg-success bg-opacity-10 p-2">10% opacity</div>
`;
const bgGradientHtml = `<div class="bg-primary bg-gradient p-3 mb-2">.bg-primary.bg-gradient</div>
<div class="bg-success bg-gradient p-3 mb-2">.bg-success.bg-gradient</div>
<div class="bg-danger bg-gradient p-3 mb-2">.bg-danger.bg-gradient</div>
`;
const textColorsHtml = `<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
<p class="text-info">.text-info</p>
<p class="text-warning">.text-warning</p>
<p class="text-danger">.text-danger</p>
<p class="text-contrast">.text-contrast</p>
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-body-secondary">.text-body-secondary</p>
<p class="text-body-emphasis">.text-body-emphasis</p>
<p class="text-reset">.text-reset</p>
`;
const textEmphasisHtml = `<p class="text-primary-emphasis">.text-primary-emphasis</p>
<p class="text-secondary-emphasis">.text-secondary-emphasis</p>
<p class="text-success-emphasis">.text-success-emphasis</p>
<p class="text-info-emphasis">.text-info-emphasis</p>
<p class="text-warning-emphasis">.text-warning-emphasis</p>
<p class="text-danger-emphasis">.text-danger-emphasis</p>
`;
const textOpacityHtml = `<div class="text-primary">Default primary text</div>
<div class="text-primary text-opacity-75">75% opacity primary text</div>
<div class="text-primary text-opacity-50">50% opacity primary text</div>
<div class="text-primary text-opacity-25">25% opacity primary text</div>
`;
const linkColorsHtml = `<a href="#" class="link-primary">Primary link</a>
<a href="#" class="link-secondary">Secondary link</a>
<a href="#" class="link-success">Success link</a>
<a href="#" class="link-info">Info link</a>
<a href="#" class="link-warning">Warning link</a>
<a href="#" class="link-danger">Danger link</a>
<a href="#" class="link-contrast">Contrast link</a>
<a href="#" class="link-body-emphasis">Body emphasis link</a>
`;
const linkOpacityHtml = `<a href="#" class="link-opacity-10">10%</a>
<a href="#" class="link-opacity-25">25%</a>
<a href="#" class="link-opacity-50">50%</a>
<a href="#" class="link-opacity-75">75%</a>
<a href="#" class="link-opacity-100">100%</a>
`;
const linkUnderlineHtml = `<a href="#" class="link-underline-primary">Primary underline</a>
<a href="#" class="link-underline-secondary">Secondary underline</a>
<a href="#" class="link-underline-success">Success underline</a>
<a href="#" class="link-underline-danger">Danger underline</a>
`;
const practicalHtml = `<article class="card bg-primary-subtle border border-primary-subtle rounded p-3">
  <h3 class="text-primary-emphasis">Notification</h3>
  <p class="text-primary-emphasis mb-0">Your changes have been saved successfully.</p>
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

### Subtle Backgrounds

<HtmlPreviewer :code="bgSubtleHtml" />

### Background Opacity

Control background opacity with `.bg-opacity-*` utilities.

<HtmlPreviewer :code="bgOpacityHtml" />

### Background Gradient

Add a `.bg-gradient` class to apply a subtle gradient overlay.

<HtmlPreviewer :code="bgGradientHtml" />

## Text Color

Colorize text with `.text-*` utilities.

<HtmlPreviewer :code="textColorsHtml" />

### Emphasis Colors

<HtmlPreviewer :code="textEmphasisHtml" />

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
