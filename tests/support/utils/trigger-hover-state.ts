import { Page } from "@playwright/test";

export async function triggerHoverState(page: Page, selector: string) {
  // 1. Establish the direct connection with Chromium DevTools
  const session = await page.context().newCDPSession(page);
  await session.send("DOM.enable");
  await session.send("CSS.enable"); // Required to toggle pseudo classes

  // 2. Get the root Node ID of the entire page document structure
  const { root } = await session.send("DOM.getDocument");

  // 3. Query all target nodes directly inside the browser engine using the selector
  const { nodeIds } = await session.send("DOM.querySelectorAll", {
    nodeId: root.nodeId,
    selector,
  });

  // 4. Force the pseudo-state on every node using correct CDP parameters
  for (const nodeId of nodeIds) {
    await session.send("CSS.forcePseudoState", {
      nodeId: nodeId,
      forcedPseudoClasses: ["hover"], // FIXED: Changed 'forcedPseudoStates' to 'forcedPseudoClasses'
    });
  }

  // 5. Allow layout rendering cycles to process visually
  // await page.waitForTimeout(300);
}
