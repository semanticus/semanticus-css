import { ContentGridDemo } from "@demos/components";

export function overview() {
  return `<br>
<br>
${ContentGridDemo.main('div')}
<br>
<br>
${ContentGridDemo.breakout('div')}
<br>
<br>
${ContentGridDemo.fullWidth('div')}
<br>
<br>
${ContentGridDemo.nested('div')}
<br>
<br>
${ContentGridDemo.nestedFullWidth('div')}`;
}
