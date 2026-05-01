export function basic() {
  return `<br>
<p>
  Tooltip on
  <span>
    <em aria-describedby="tip-em">inline element</em>
    <span id="tip-em" role="tooltip">Tooltip</span>
  </span>
</p>`;
}

export function placement() {
  return `<div role="toolbar">
  <span><button aria-describedby="tip-top">Top</button><span id="tip-top" role="tooltip">Top</span></span>
  <span><button aria-describedby="tip-right">Right</button><span id="tip-right" role="tooltip" data-placement="right">Right</span></span>
  <span><button aria-describedby="tip-bottom">Bottom</button><span id="tip-bottom" role="tooltip" data-placement="bottom">Bottom</span></span>
  <span><button aria-describedby="tip-left">Left</button><span id="tip-left" role="tooltip" data-placement="left">Left</span></span>
</div>
`;
}
