const { chromium } = require('playwright');
(async () => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    const queries = [
      'Oracle OCI Generative AI Professional credly badge', 
      'Oracle Banking Digital Experience badge',
      'Oracle FLEXCUBE badge',
      'Oracle Java Certified Professional badge',
      'AWS Cloud Practitioner badge credly'
    ];
    for(const q of queries) {
        await page.goto('https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(q));
        await page.waitForTimeout(2000);
        const images = await page.$$eval('img', imgs => imgs.map(i => i.src).filter(src => src.startsWith('http')));
        // Find the first image that is not the google logo (usually the first couple might be icons)
        console.log(q + ' : ' + images[1]); 
    }
    await browser.close();
  } catch (e) { console.error(e); }
})();
