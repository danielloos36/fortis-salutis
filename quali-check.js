const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const p = await browser.newPage();
  await p.setViewportSize({ width: 1440, height: 1000 });
  await p.goto('http://localhost:3123/', { waitUntil: 'load' });
  await p.waitForSelector('text=Qualifikationen & Fortbildungen', { timeout: 10000 });
  await p.evaluate(() => {
    const el = [...document.querySelectorAll('h3')].find(e => e.textContent.includes('Qualifikationen'));
    el.scrollIntoView({ block: 'start' });
  });
  await p.waitForTimeout(500);
  await p.screenshot({ path: 'quali-desktop.png' });

  const m = await browser.newPage();
  await m.setViewportSize({ width: 375, height: 900 });
  await m.goto('http://localhost:3123/', { waitUntil: 'load' });
  await m.waitForSelector('text=Qualifikationen & Fortbildungen', { timeout: 10000 });
  await m.evaluate(() => {
    const el = [...document.querySelectorAll('h3')].find(e => e.textContent.includes('Qualifikationen'));
    el.scrollIntoView({ block: 'start' });
  });
  await m.waitForTimeout(500);
  await m.screenshot({ path: 'quali-mobile.png' });

  const sw = await m.evaluate(() => document.documentElement.scrollWidth);
  console.log('mobile scrollWidth:', sw);
  await browser.close();
  console.log('DONE');
})();
