export const TooltipDemo = {
  basicTooltip() {
    return `<p>
  Hover over this
  <span>
    <a href="#" aria-describedby="tooltip-example">link</a>
    <span id="tooltip-example" role="tooltip" data-placement="bottom">This is a tooltip</span>
  </span>
  to see a tooltip.
</p>
`;
  },
};
