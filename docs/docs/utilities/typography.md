<script setup>
const textAlignHtml = `<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>
<p class="text-sm-end">End aligned on sm and wider.</p>
<p class="text-md-center">Center aligned on md and wider.</p>
<p class="text-lg-start">Start aligned on lg and wider.</p>
`;
const textWrapHtml = `<div class="text-wrap bg-primary-subtle p-2 border mb-2 w-25">
  This text should wrap inside a narrow container.
</div>
<div class="text-nowrap bg-primary-subtle p-2 border overflow-hidden w-25">
  This text should not wrap.
</div>
`;
const textBreakHtml = `<p class="text-break border p-2 w-50">
  mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
</p>
`;
const textTransformHtml = `<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">capitalized text.</p>
`;
const fontSizeHtml = `<p class="fs-1">.fs-1 text</p>
<p class="fs-2">.fs-2 text</p>
<p class="fs-3">.fs-3 text</p>
<p class="fs-4">.fs-4 text</p>
<p class="fs-5">.fs-5 text</p>
<p class="fs-6">.fs-6 text</p>
`;
const fontWeightHtml = `<p class="fw-bold">Bold text.</p>
<p class="fw-bolder">Bolder weight text (relative to parent).</p>
<p class="fw-semibold">Semibold weight text.</p>
<p class="fw-medium">Medium weight text.</p>
<p class="fw-normal">Normal weight text.</p>
<p class="fw-light">Light weight text.</p>
<p class="fw-lighter">Lighter weight text (relative to parent).</p>
`;
const fontStyleHtml = `<p class="fst-italic">Italic text.</p>
<p class="fst-normal">Text with normal font style.</p>
`;
const lineHeightHtml = `<p class="lh-1 border p-2 mb-3">Line height 1. This is a paragraph with a tight line height for compact text display.</p>
<p class="lh-sm border p-2 mb-3">Line height sm (1.25). A slightly more spacious line height for readable text blocks.</p>
<p class="lh-base border p-2 mb-3">Line height base (1.5). The default line height for body text, providing good readability.</p>
<p class="lh-lg border p-2">Line height lg (2). A very spacious line height for maximum readability.</p>
`;
const monospaceHtml = `<p class="font-monospace">This is in monospace</p>
`;
const textDecorationHtml = `<p class="text-decoration-underline">This text has a line underneath it.</p>
<p class="text-decoration-line-through">This text has a line going through it.</p>
<a href="#" class="text-decoration-none">This link has its text decoration removed</a>
`;
const textTruncateHtml = `<div class="text-truncate border p-2" style="max-width:200px">
  This is a long text that will be truncated with an ellipsis because it overflows its container.
</div>
`;
const verticalAlignHtml = `<span class="align-baseline border">baseline</span>
<span class="align-top border">top</span>
<span class="align-middle border">middle</span>
<span class="align-bottom border">bottom</span>
<span class="align-text-top border">text-top</span>
<span class="align-text-bottom border">text-bottom</span>
`;
const verticalAlignTableHtml = `<table>
  <tbody>
    <tr style="height:80px">
      <td class="align-baseline border">baseline</td>
      <td class="align-top border">top</td>
      <td class="align-middle border">middle</td>
      <td class="align-bottom border">bottom</td>
    </tr>
  </tbody>
</table>
`;
const resetColorHtml = `<p class="text-body-secondary">
  Secondary body text with a <a href="#" class="text-reset">reset link</a>.
</p>
`;
const practicalHtml = `<article class="card">
  <header>
    <p class="text-uppercase fw-semibold text-primary fs-6 mb-0">Featured Article</p>
    <h2 class="fw-bold">Getting Started with Utility Classes</h2>
    <p class="text-muted fst-italic">A practical guide to modern CSS utilities</p>
  </header>
  <p class="lh-lg">Utility classes provide a fast and consistent way to style your HTML elements without writing custom CSS. They follow a predictable naming convention that makes them easy to learn and use.</p>
  <p class="text-end">
    <a href="#" class="text-decoration-none fw-semibold">Read more &rarr;</a>
  </p>
</article>
`;
</script>

# Typography

Control text alignment, wrapping, weight, size, and more with typography utilities.

## Text Alignment

Align text with responsive alignment classes.

<HtmlPreviewer :code="textAlignHtml" />

## Text Wrapping and Overflow

<HtmlPreviewer :code="textWrapHtml" />

### Word Break

Prevent long strings from breaking layout with `.text-break`.

<HtmlPreviewer :code="textBreakHtml" />

### Text Truncate

Truncate overflowing text with an ellipsis using `.text-truncate`.

<HtmlPreviewer :code="textTruncateHtml" />

## Text Transform

<HtmlPreviewer :code="textTransformHtml" />

## Font Size

Scale font size with `.fs-1` through `.fs-6`, matching heading sizes.

<HtmlPreviewer :code="fontSizeHtml" />

## Font Weight

<HtmlPreviewer :code="fontWeightHtml" />

## Font Style

<HtmlPreviewer :code="fontStyleHtml" />

## Line Height

<HtmlPreviewer :code="lineHeightHtml" />

## Monospace

<HtmlPreviewer :code="monospaceHtml" />

## Text Decoration

<HtmlPreviewer :code="textDecorationHtml" />

## Reset Color

Use `.text-reset` to inherit the color from the parent element.

<HtmlPreviewer :code="resetColorHtml" />

## Vertical Alignment

Change the vertical alignment of inline, inline-block, and table cell elements.

### Inline Elements

<HtmlPreviewer :code="verticalAlignHtml" />

### Table Cells

<HtmlPreviewer :code="verticalAlignTableHtml" />

## Practical Examples

### Article Header

<HtmlPreviewer :code="practicalHtml" />
