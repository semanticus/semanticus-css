import { LayoutGridDemo } from "@demos/components";

export function overview() {
  return `<br>
<br>
${LayoutGridDemo.main('div')}
<br>
<br>
${LayoutGridDemo.breakout('div')}
<br>
<br>
${LayoutGridDemo.fullWidth('div')}
<br>
<br>
${LayoutGridDemo.nested('div')}
<br>
<br>
${LayoutGridDemo.nestedFullWidth('div')}`;
}
