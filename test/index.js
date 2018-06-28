const puppeteer = require('puppeteer')
const expect = require("chai").expect
const pti = require('puppeteer-to-istanbul')

describe("fetch-test", function () {
    let browser = null

    before(async function (){
        this.timeout(10000)
        browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
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

        testDataGet = [{ id: 2, body: 'some comment', postId: 1 }]
        resultGet = await page.evaluate(async () => {
            return await _fetch.getJSON('http://localhost:3000/comments/', {
                id: 2
            }).then(res => {
                console.log(res)
                return res
            }, err => {
                console.log(err)
            })
        });

        testDataJSONP = [{ id: 2, body: 'some comment', postId: 1 }]
        resultJSONP = await page.evaluate(async () => {
            return await _fetch.getJSONP('http://localhost:3000/comments/', {
                id: 2
            }, {
                    callbackName: "callback"
                }).then(res => {
                    console.log(res)
                    return res
                }, err => {
                    console.log(err)
                })
        });

        testDataPost = { id: 3 }
        resultPost = await page.evaluate(async () => {
            return await _fetch.postJSON('http://localhost:3000/comments/', {
                id: 3
            }).then(res => {
                console.log(res)
                return res
            }, err => {
                console.log(err)
            })
        });

        testDataDel = { id: 3 }
        resultDel = await page.evaluate(async () => {
            return await _fetch.deleteJSON('http://localhost:3000/comments/3', {
                id: 3
            }).then(res => {
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
        expect(JSON.stringify(testDataGet)).to.equal(JSON.stringify(resultGet))
    })

    it("fetch postJSON", function () {
        expect(JSON.stringify(testDataPost)).to.equal(JSON.stringify(resultPost))
    })

    it("fetch getJSONP", function () {
        expect(JSON.stringify(testDataJSONP)).to.equal(JSON.stringify(resultJSONP))
    })

    it("fetch timeout", function () {
        expect(resultTimeout).to.equal("http://localhost:3000/comments/1 timeout")
    })

    it("fetch error", function () {
        expect(resultError).to.equal("http://localhost:3001/")
    })
})
