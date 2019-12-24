const { toMatchImageSnapshot } = require('jest-image-snapshot');
const puppeteer = require('puppeteer');
expect.extend({ toMatchImageSnapshot });

const screenshotTest = ({ describe_, it_, id_ }) =>
  describe_.map((elem, i) =>
    describe(describe_[i], () => {
      it(it_[i], async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        await page.goto(`http://localhost:4001/iframe.html?id=${id_[i]}`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
      });
    }),
  );

export default screenshotTest;
