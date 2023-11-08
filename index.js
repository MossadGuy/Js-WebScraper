const puppeteer = require('puppeteer');

const scrape = async () => {
    const URL = 'https://www.halkyatirim.com.tr/content/tr';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL);

    const content = await page.evaluate(() => {
        return document.body.innerHTML;
    });

    console.log(content);

    await browser.close();
}

scrape();