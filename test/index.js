const puppeteer = require('puppeteer')
const expect = require("chai").expect
const pti = require('puppeteer-to-istanbul')

describe("fetch-test", function () {
    let browser = null

    before(async () => {
        browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Enable both JavaScript and CSS coverage
        await Promise.all([
            page.coverage.startJSCoverage(),
            page.coverage.startCSSCoverage()
        ]);

        await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
        await page.addScriptTag({
            path: "./dist/index.umd.js"
        })

        testData = { id: 2, body: 'some comment', postId: 1 }
        result = await page.evaluate(async () => {
            return await _fetch.getJSON('http://localhost:3000/comments/2').then(res => {
                console.log(res)
                return res
            }, err => {
                console.log(err)
            })
        });

        resultTimeout = await page.evaluate(async () => {
            return await _fetch.getJSON('http://localhost:3000/comments/1', {}, {
                timeout: 1
            }).then(res => {
                return res
            }, err => {
                return err.message
            })
        });

        resultError = await page.evaluate(async () => {
            return await _fetch.getJSON('http://localhost:3001/').then(res => {
                return res
            }, err => {
                return err.url
            })
        });

        // Disable JavaScript coverage
        const jsCoverage = await page.coverage.stopJSCoverage()
        pti.write(jsCoverage)
    })

    after(function () {
        browser.close();
    });

    it("fetch getJSON", function () {
        expect(JSON.stringify(testData)).to.equal(JSON.stringify(result))
    })

    it("fetch timeout", function () {
        expect(resultTimeout).to.equal("http://localhost:3000/comments/1 timeout")
    })

    it("fetch error", function () {
        expect(resultError).to.equal("http://localhost:3001/")
    })
})
