function cell(label: string) {
  return `<div class="p-2 bg-secondary-subtle border text-center">${label}</div>`;
}

export function equalWidth() {
  return `
<div class="row mb-3">
  <div class="col">${cell('.col')}</div>
  <div class="col">${cell('.col')}</div>
  <div class="col">${cell('.col')}</div>
</div>
<div class="row">
  <div class="col">${cell('.col')}</div>
  <div class="col">${cell('.col')}</div>
</div>`.trim();
}

export function fixedWidth() {
  return `
<div class="row mb-2">
  <div class="col-1">${cell('1')}</div>
  <div class="col-1">${cell('1')}</div>
  <div class="col-1">${cell('1')}</div>
  <div class="col-1">${cell('1')}</div>
  <div class="col-1">${cell('1')}</div>
  <div class="col-1">${cell('1')}</div>
  <div class="col-1">${cell('1')}</div>
  <div class="col-1">${cell('1')}</div>
  <div class="col-1">${cell('1')}</div>
  <div class="col-1">${cell('1')}</div>
  <div class="col-1">${cell('1')}</div>
  <div class="col-1">${cell('1')}</div>
</div>
<div class="row mb-2">
  <div class="col-2">${cell('2')}</div>
  <div class="col-4">${cell('4')}</div>
  <div class="col-6">${cell('6')}</div>
</div>
<div class="row mb-2">
  <div class="col-4">${cell('4')}</div>
  <div class="col-8">${cell('8')}</div>
</div>
<div class="row">
  <div class="col-3">${cell('3')}</div>
  <div class="col-6">${cell('6')}</div>
  <div class="col-3">${cell('3')}</div>
</div>`.trim();
}

export function responsive() {
  return `
<div class="row">
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">${cell('.col-12 .col-sm-6 .col-md-4 .col-lg-3')}</div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">${cell('.col-12 .col-sm-6 .col-md-4 .col-lg-3')}</div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">${cell('.col-12 .col-sm-6 .col-md-4 .col-lg-3')}</div>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">${cell('.col-12 .col-sm-6 .col-md-4 .col-lg-3')}</div>
</div>`.trim();
}

export function stackedToHorizontal() {
  return `
<div class="row mb-3">
  <div class="col-sm-8">${cell('.col-sm-8')}</div>
  <div class="col-sm-4">${cell('.col-sm-4')}</div>
</div>
<div class="row">
  <div class="col-sm">${cell('.col-sm')}</div>
  <div class="col-sm">${cell('.col-sm')}</div>
  <div class="col-sm">${cell('.col-sm')}</div>
</div>`.trim();
}

export function mixAndMatch() {
  return `
<!-- Stack on mobile, 8/4 split on medium+ -->
<div class="row mb-3">
  <div class="col-12 col-md-8">${cell('.col-12 .col-md-8')}</div>
  <div class="col-6 col-md-4">${cell('.col-6 .col-md-4')}</div>
</div>
<!-- 50% on mobile, 33% on medium+ -->
<div class="row mb-3">
  <div class="col-6 col-md-4">${cell('.col-6 .col-md-4')}</div>
  <div class="col-6 col-md-4">${cell('.col-6 .col-md-4')}</div>
  <div class="col-6 col-md-4">${cell('.col-6 .col-md-4')}</div>
</div>
<!-- Always 50% wide -->
<div class="row">
  <div class="col-6">${cell('.col-6')}</div>
  <div class="col-6">${cell('.col-6')}</div>
</div>`.trim();
}

export function offsets() {
  return `
<div class="row mb-3">
  <div class="col-4">${cell('.col-4')}</div>
  <div class="col-4 col-offset-4">${cell('.col-4 .col-offset-4')}</div>
</div>
<div class="row mb-3">
  <div class="col-3 col-offset-3">${cell('.col-3 .col-offset-3')}</div>
  <div class="col-3 col-offset-3">${cell('.col-3 .col-offset-3')}</div>
</div>
<div class="row mb-3">
  <div class="col-6 col-offset-3">${cell('.col-6 .col-offset-3')}</div>
</div>
<div class="row">
  <div class="col-sm-4 col-offset-md-2">${cell('.col-sm-4 .col-offset-md-2')}</div>
  <div class="col-sm-6">${cell('.col-sm-6')}</div>
</div>`.trim();
}

export function nesting() {
  return `
<div class="row">
  <div class="col-sm-9">
    ${cell('.col-sm-9')}
    <div class="row mt-2">
      <div class="col-8 col-sm-6">${cell('.col-8 .col-sm-6')}</div>
      <div class="col-4 col-sm-6">${cell('.col-4 .col-sm-6')}</div>
    </div>
  </div>
  <div class="col-sm-3">${cell('.col-sm-3')}</div>
</div>`.trim();
}

export function columnOrdering() {
  return `
<!-- Reorder with .order-* -->
<div class="row mb-3">
  <div class="col order-3">${cell('1st in source, order-3')}</div>
  <div class="col order-1">${cell('2nd in source, order-1')}</div>
  <div class="col order-2">${cell('3rd in source, order-2')}</div>
</div>
<!-- order-first / order-last -->
<div class="row mb-3">
  <div class="col order-last">${cell('1st in source, order-last')}</div>
  <div class="col">${cell('2nd in source')}</div>
  <div class="col order-first">${cell('3rd in source, order-first')}</div>
</div>
<!-- Reverse entire row with .flex-row-reverse -->
<div class="row flex-row-reverse">
  <div class="col">${cell('1st in source')}</div>
  <div class="col">${cell('2nd in source')}</div>
  <div class="col">${cell('3rd in source')}</div>
</div>`.trim();
}

export function alignment() {
  return `
<!-- align-items-start / center / end -->
<div class="row align-items-start mb-3" style="height:80px; background:var(--bg-2,rgba(0,0,0,.04))">
  <div class="col">${cell('start')}</div>
  <div class="col">${cell('start')}</div>
  <div class="col">${cell('start')}</div>
</div>
<div class="row align-items-center mb-3" style="height:80px; background:var(--bg-2,rgba(0,0,0,.04))">
  <div class="col">${cell('center')}</div>
  <div class="col">${cell('center')}</div>
  <div class="col">${cell('center')}</div>
</div>
<div class="row align-items-end mb-3" style="height:80px; background:var(--bg-2,rgba(0,0,0,.04))">
  <div class="col">${cell('end')}</div>
  <div class="col">${cell('end')}</div>
  <div class="col">${cell('end')}</div>
</div>
<!-- justify-content-center / between -->
<div class="row justify-content-center mb-3">
  <div class="col-4">${cell('.col-4 (centered)')}</div>
  <div class="col-4">${cell('.col-4 (centered)')}</div>
</div>
<div class="row justify-content-between">
  <div class="col-4">${cell('.col-4 (between)')}</div>
  <div class="col-4">${cell('.col-4 (between)')}</div>
</div>`.trim();
}

export function customGutter() {
  return `
<!-- No gutter -->
<div class="row mb-3" style="--grid-gutter: 0">
  <div class="col-4">${cell('No gutter')}</div>
  <div class="col-4">${cell('No gutter')}</div>
  <div class="col-4">${cell('No gutter')}</div>
</div>
<!-- Default gutter -->
<div class="row mb-3">
  <div class="col-4">${cell('Default gutter')}</div>
  <div class="col-4">${cell('Default gutter')}</div>
  <div class="col-4">${cell('Default gutter')}</div>
</div>
<!-- Large gutter (2rem) -->
<div class="row" style="--grid-gutter: 2rem">
  <div class="col-4">${cell('Large gutter')}</div>
  <div class="col-4">${cell('Large gutter')}</div>
  <div class="col-4">${cell('Large gutter')}</div>
</div>`.trim();
}
