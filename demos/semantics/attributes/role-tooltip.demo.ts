export function basic() {
  return `<p>
  Tooltip on a <span>
    <a href="#" aria-describedby="tip-link">link</a>
    <span id="tip-link" role="tooltip" data-placement="right">Tooltip</span>
  </span>
</p>
<p>
  Tooltip on
  <span>
    <em aria-describedby="tip-em">inline element</em>
    <span id="tip-em" role="tooltip">Tooltip</span>
  </span>
</p>
<p>
  <span>
    <button aria-describedby="tip-btn">Tooltip on a button</button>
    <span id="tip-btn" role="tooltip" data-placement="bottom">Tooltip</span>
  </span>
</p>`;
}

export function placement() {
  return `<section role="toolbar">
  <span><button aria-describedby="tip-top">Top</button><span id="tip-top" role="tooltip">Top</span></span>
  <span><button aria-describedby="tip-right">Right</button><span id="tip-right" role="tooltip" data-placement="right">Right</span></span>
  <span><button aria-describedby="tip-bottom">Bottom</button><span id="tip-bottom" role="tooltip" data-placement="bottom">Bottom</span></span>
  <span><button aria-describedby="tip-left">Left</button><span id="tip-left" role="tooltip" data-placement="left">Left</span></span>
</section>
`;
}
