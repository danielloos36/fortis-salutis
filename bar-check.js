const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  // Desktop homepage top
  const d = await browser.newPage();
  await d.setViewportSize({ width: 1440, height: 1000 });
  await d.goto('http://localhost:3104/', { waitUntil: 'networkidle' });
  await d.screenshot({ path: 'bar-home-desktop.png' });

  // Mobile homepage top
  const m = await browser.newPage();
  await m.setViewportSize({ width: 375, height: 800 });
  await m.goto('http://localhost:3104/', { waitUntil: 'networkidle' });
  await m.screenshot({ path: 'bar-home-mobile.png' });

  // Narrowest 320
  const n = await browser.newPage();
  await n.setViewportSize({ width: 320, height: 800 });
  await n.goto('http://localhost:3104/', { waitUntil: 'networkidle' });
  const sw = await n.evaluate(() => document.documentElement.scrollWidth);
  console.log('320px scrollWidth:', sw);
  await n.screenshot({ path: 'bar-home-320.png' });

  // leistungen/hausbesuche hero
  const h = await browser.newPage();
  await h.setViewportSize({ width: 1440, height: 1000 });
  await h.goto('http://localhost:3104/leistungen/hausbesuche', { waitUntil: 'networkidle' });
  await h.screenshot({ path: 'bar-hausbesuche-desktop.png' });

  // Mobile menu open check
  const mm = await browser.newPage();
  await mm.setViewportSize({ width: 375, height: 800 });
  await mm.goto('http://localhost:3104/', { waitUntil: 'networkidle' });
  await mm.click('button[aria-label="Menü öffnen"]');
  await mm.waitForTimeout(400);
  await mm.screenshot({ path: 'bar-mobile-menu-open.png' });

  await browser.close();
})();
