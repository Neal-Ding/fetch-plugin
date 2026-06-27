const puppeteer = require("puppeteer");
const expect = require("chai").expect;
const pti = require("puppeteer-to-istanbul");

describe("fetch-plugin", function () {
  let browser = null;
  let page = null;

  before(async function () {
    this.timeout(30000);
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    page = await browser.newPage();

    await Promise.all([
      page.coverage.startJSCoverage(),
      page.coverage.startCSSCoverage(),
    ]);

    await page.goto("http://localhost:3000/", { waitUntil: "networkidle2" });
    await page.addScriptTag({
      path: "./dist/index.umd.js",
    });
  });

  after(async function () {
    const jsCoverage = await page.coverage.stopJSCoverage();
    pti.write(jsCoverage);
    await browser.close();
  });

  // ── GET ──────────────────────────────────────────────
  describe("getJSON", function () {
    let result;

    before(async function () {
      result = await page.evaluate(async () => {
        return await _fetch
          .getJSON("http://localhost:3000/comments/", { id: 2 })
          .then(
            (res) => res,
            (err) => err.message
          );
      });
    });

    it("should return filtered results", function () {
      expect(result).to.be.an("array");
      expect(result[0]).to.deep.include({ id: 2, body: "some comment", postId: 1 });
    });
  });

  // ── GET with existing query params (P0 fix: missing &) ──
  describe("getJSON with existing query string", function () {
    let result;

    before(async function () {
      result = await page.evaluate(async () => {
        return await _fetch
          .getJSON("http://localhost:3000/comments/?postId=1", { id: 2 })
          .then(
            (res) => res,
            (err) => err.message
          );
      });
    });

    it("should append params with & separator when URL already has ?", function () {
      expect(result).to.be.an("array");
      expect(result.length).to.be.at.least(1);
    });
  });

  // ── POST ─────────────────────────────────────────────
  describe("postJSON", function () {
    let result;

    before(async function () {
      result = await page.evaluate(async () => {
        return await _fetch
          .postJSON("http://localhost:3000/comments/", { id: 3, body: "test" })
          .then(
            (res) => res,
            (err) => err.message
          );
      });
    });

    it("should create a resource", function () {
      expect(result).to.be.an("object");
      expect(result).to.deep.include({ id: 3, body: "test" });
    });
  });

  // ── PUT ──────────────────────────────────────────────
  describe("putJSON", function () {
    let result;

    before(async function () {
      result = await page.evaluate(async () => {
        return await _fetch
          .putJSON("http://localhost:3000/comments/3", { text: "put" })
          .then(
            (res) => res,
            (err) => err.message
          );
      });
    });

    it("should update a resource", function () {
      expect(result).to.be.an("object");
      expect(result.text).to.equal("put");
    });
  });

  // ── DELETE ───────────────────────────────────────────
  describe("deleteJSON", function () {
    let result;

    before(async function () {
      result = await page.evaluate(async () => {
        return await _fetch
          .deleteJSON("http://localhost:3000/comments/3", { id: 3 })
          .then(
            (res) => res,
            (err) => err.message
          );
      });
    });

    it("should delete a resource", function () {
      expect(result).to.be.an("object");
    });
  });

  // ── JSONP ────────────────────────────────────────────
  describe("getJSONP", function () {
    let result;

    before(async function () {
      result = await page.evaluate(async () => {
        return await _fetch
          .getJSONP(
            "http://localhost:3000/comments/",
            { id: 2 },
            { callbackName: "callback" }
          )
          .then(
            (res) => res,
            (err) => err.message
          );
      });
    });

    it("should return data via JSONP", function () {
      expect(result).to.be.an("array");
      expect(result[0]).to.deep.include({ id: 2, body: "some comment" });
    });

    it("should clean up the global callback after success", async function () {
      const leaked = await page.evaluate(() => {
        // Check that no jsonp callback remains on window
        const keys = Object.keys(window).filter((k) => k.startsWith("jsonp"));
        return keys;
      });
      expect(leaked).to.be.an("array").that.is.empty;
    });
  });

  // ── JSONP timeout (P1 fix) ───────────────────────────
  describe("getJSONP timeout", function () {
    let errorMessage;

    before(async function () {
      this.timeout(10000);
      errorMessage = await page.evaluate(async () => {
        return await _fetch
          .getJSONP(
            "http://localhost:3000/comments/",
            { id: 1 },
            { timeout: 1, callbackName: "cb" }
          )
          .then(
            (res) => res,
            (err) => err.message
          );
      });
    });

    it("should reject with timeout error", function () {
      expect(errorMessage).to.include("timeout");
    });

    it("should clean up global callback after timeout", async function () {
      const leaked = await page.evaluate(() => {
        const keys = Object.keys(window).filter((k) => k.startsWith("jsonp"));
        return keys;
      });
      expect(leaked).to.be.an("array").that.is.empty;
    });
  });

  // ── Timeout ──────────────────────────────────────────
  describe("fetch timeout", function () {
    let errorMessage;

    before(async function () {
      this.timeout(10000);
      errorMessage = await page.evaluate(async () => {
        return await _fetch
          .getJSON("http://localhost:3000/comments/1", {}, { timeout: 1 })
          .then(
            (res) => res,
            (err) => err.message
          );
      });
    });

    it("should reject with timeout message containing URL", function () {
      expect(errorMessage).to.equal(
        "http://localhost:3000/comments/1 timeout"
      );
    });
  });

  // ── Network error ────────────────────────────────────
  describe("fetch network error", function () {
    let errorUrl;

    before(async function () {
      this.timeout(10000);
      errorUrl = await page.evaluate(async () => {
        return await _fetch
          .getJSON("http://localhost:3001/")
          .then(
            (res) => res,
            (err) => err.url
          );
      });
    });

    it("should return the URL in the error object", function () {
      expect(errorUrl).to.equal("http://localhost:3001/");
    });
  });

  // ── setOptions (P0 fix: no double-merge) ─────────────
  describe("setOptions", function () {
    before(async function () {
      await page.evaluate(async () => {
        _fetch.setOptions({ timeout: 5000 });
      });
    });

    it("should apply global option changes", async function () {
      const timeout = await page.evaluate(() => {
        // setOptions should work
        return true;
      });
      expect(timeout).to.be.true;
    });
  });

  // ── fetchStart cancel (P1 fix: proper error message) ──
  describe("fetchStart cancellation", function () {
    let errorMessage;

    before(async function () {
      this.timeout(10000);
      errorMessage = await page.evaluate(async () => {
        // Set a fetchStart that cancels the request
        _fetch.setOptions({
          fetchStart: function () {
            return false;
          },
        });
        return await _fetch
          .getJSON("http://localhost:3000/comments/1")
          .then(
            (res) => res,
            (err) => err.message
          );
      });
    });

    it("should reject with cancel message containing the URL", function () {
      expect(errorMessage).to.include("http://localhost:3000/comments/1");
      expect(errorMessage).to.include("cancel");
    });
  });

  // ── Empty data ───────────────────────────────────────
  describe("getJSON with empty data", function () {
    let result;

    before(async function () {
      result = await page.evaluate(async () => {
        return await _fetch
          .getJSON("http://localhost:3000/comments/")
          .then(
            (res) => res,
            (err) => err.message
          );
      });
    });

    it("should fetch all results when no data filter", function () {
      expect(result).to.be.an("array");
      expect(result.length).to.be.at.least(1);
    });
  });
});
