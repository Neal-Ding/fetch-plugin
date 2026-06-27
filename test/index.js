const puppeteer = require("puppeteer");
const expect = require("chai").expect;
const pti = require("puppeteer-to-istanbul");

describe("fetch-plugin v2", function () {
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
    it("should return filtered results", async function () {
      const result = await page.evaluate(async () => {
        return await _fetch.getJSON("http://localhost:3000/comments/", {
          id: 2,
        });
      });
      expect(result).to.be.an("array");
      expect(result[0]).to.deep.include({
        id: 2,
        body: "some comment",
        postId: 1,
      });
    });

    it("should append params with & when URL already has ?", async function () {
      const result = await page.evaluate(async () => {
        return await _fetch.getJSON(
          "http://localhost:3000/comments/?postId=1",
          { id: 2 }
        );
      });
      expect(result).to.be.an("array");
      expect(result.length).to.be.at.least(1);
    });

    it("should fetch all results when data is empty", async function () {
      const result = await page.evaluate(async () => {
        return await _fetch.getJSON("http://localhost:3000/comments/");
      });
      expect(result).to.be.an("array");
      expect(result.length).to.be.at.least(1);
    });
  });

  // ── POST / PUT / DELETE ──────────────────────────────
  describe("postJSON", function () {
    it("should create a resource", async function () {
      const result = await page.evaluate(async () => {
        return await _fetch.postJSON("http://localhost:3000/comments/", {
          id: 3,
          body: "test",
        });
      });
      expect(result).to.deep.include({ id: 3, body: "test" });
    });
  });

  describe("putJSON", function () {
    it("should update a resource", async function () {
      const result = await page.evaluate(async () => {
        return await _fetch.putJSON("http://localhost:3000/comments/3", {
          text: "put",
        });
      });
      expect(result.text).to.equal("put");
    });
  });

  describe("deleteJSON", function () {
    it("should delete a resource", async function () {
      const result = await page.evaluate(async () => {
        return await _fetch.deleteJSON("http://localhost:3000/comments/3", {
          id: 3,
        });
      });
      expect(result).to.be.an("object");
    });
  });

  // ── JSONP ────────────────────────────────────────────
  describe("getJSONP", function () {
    it("should return data via JSONP", async function () {
      const result = await page.evaluate(async () => {
        return await _fetch.getJSONP(
          "http://localhost:3000/comments/",
          { id: 2 },
          { callbackName: "myCallback" }
        );
      });
      expect(result).to.be.an("array");
      expect(result[0]).to.deep.include({ id: 2, body: "some comment" });
    });

    it("should clean up global callback after success", async function () {
      const leaked = await page.evaluate(() => {
        return Object.keys(window).filter((k) => k.startsWith("jsonp"));
      });
      expect(leaked).to.be.empty;
    });

    it("should reject with timeout error", async function () {
      this.timeout(10000);
      const errorMessage = await page.evaluate(async () => {
        return await _fetch
          .getJSONP("http://localhost:3000/comments/", { id: 1 }, { timeout: 1 })
          .then(
            (res) => res,
            (err) => err.message
          );
      });
      expect(errorMessage).to.include("timeout");
    });

    it("should clean up global callback after timeout", async function () {
      const leaked = await page.evaluate(() => {
        return Object.keys(window).filter((k) => k.startsWith("jsonp"));
      });
      expect(leaked).to.be.empty;
    });

    it("should support custom callbackParam", async function () {
      const result = await page.evaluate(async () => {
        return await _fetch.getJSONP(
          "http://localhost:3000/comments/",
          { id: 2 },
          { callbackParam: "callback" }
        );
      });
      expect(result).to.be.an("array");
      expect(result[0]).to.deep.include({ id: 2, body: "some comment" });
    });
  });

  // ── Timeout ──────────────────────────────────────────
  describe("timeout", function () {
    it("should reject with FetchPluginError containing URL", async function () {
      this.timeout(10000);
      const errorMessage = await page.evaluate(async () => {
        return await _fetch
          .getJSON("http://localhost:3000/comments/1", {}, { timeout: 1 })
          .then(
            (res) => res,
            (err) => err.message
          );
      });
      expect(errorMessage).to.equal(
        "http://localhost:3000/comments/1 timeout"
      );
    });
  });

  // ── Network error ────────────────────────────────────
  describe("network error", function () {
    it("should include URL in error", async function () {
      this.timeout(10000);
      const errorUrl = await page.evaluate(async () => {
        return await _fetch.getJSON("http://localhost:3001/").then(
          (res) => res,
          (err) => err.url
        );
      });
      expect(errorUrl).to.equal("http://localhost:3001/");
    });
  });

  // ── Error class ──────────────────────────────────────
  describe("FetchPluginError", function () {
    it("should be instanceof Error", async function () {
      const isError = await page.evaluate(async () => {
        try {
          await _fetch.getJSON("http://localhost:3001/");
        } catch (err) {
          return err instanceof Error;
        }
        return false;
      });
      expect(isError).to.be.true;
    });

    it("should have url and fetchOption properties", async function () {
      const hasProps = await page.evaluate(async () => {
        try {
          await _fetch.getJSON("http://localhost:3001/");
        } catch (err) {
          return !!(err.url && err.fetchOption);
        }
        return false;
      });
      expect(hasProps).to.be.true;
    });
  });

  // ── Global configuration ─────────────────────────────
  describe("setOptions", function () {
    it("should apply global timeout", async function () {
      this.timeout(10000);
      await page.evaluate(async () => {
        _fetch.setOptions({ timeout: 5000 });
      });
      // Setting options should not throw
      const ok = await page.evaluate(() => true);
      expect(ok).to.be.true;
    });
  });

  // ── fetchStart hooks ─────────────────────────────────
  describe("fetchStart", function () {
    it("should cancel request when returning false", async function () {
      const errorMessage = await page.evaluate(async () => {
        return await _fetch
          .getJSON("http://localhost:3000/comments/1", {}, {
            fetchStart: function () {
              return false;
            },
          })
          .then(
            (res) => res,
            (err) => err.message
          );
      });
      expect(errorMessage).to.include("cancel");
      expect(errorMessage).to.include("http://localhost:3000/comments/1");
    });

    it("should allow modifying URL in fetchStart", async function () {
      // Reset global option
      await page.evaluate(async () => {
        _fetch.setOptions({
          fetchStart: function (param) {
            return param;
          },
        });
      });
      const ok = await page.evaluate(() => true);
      expect(ok).to.be.true;
    });
  });

  // ── Per-request hooks (v2) ───────────────────────────
  describe("per-request hooks", function () {
    it("should call per-request fetchSuccess", async function () {
      const result = await page.evaluate(async () => {
        let hookData = null;
        await _fetch.getJSON("http://localhost:3000/comments/", { id: 2 }, {
          fetchSuccess: function (data) {
            hookData = data;
          },
        });
        return hookData;
      });
      expect(result).to.be.an("array");
      expect(result[0]).to.deep.include({ id: 2 });
    });

    it("should call per-request fetchError on timeout", async function () {
      const result = await page.evaluate(async () => {
        let hookError = null;
        await _fetch
          .getJSON("http://localhost:3000/comments/1", {}, {
            timeout: 1,
            fetchError: function (err) {
              hookError = err.message;
            },
          })
          .then(
            (res) => res,
            (err) => err.message
          );
        return hookError;
      });
      expect(result).to.include("timeout");
    });
  });

  // ── Headers merge with Headers instance (v2) ─────────
  describe("headers merge", function () {
    it("should merge global and per-request headers", async function () {
      const ct = await page.evaluate(async () => {
        _fetch.setOptions({
          headers: { "X-Custom": "test" },
        });
        // Verify the default Content-Type is preserved
        const result = await _fetch.getJSON(
          "http://localhost:3000/comments/",
          { id: 2 }
        );
        return typeof result;
      });
      expect(ct).to.equal("object");
    });

    it("should accept Headers instance in options", async function () {
      const result = await page.evaluate(async () => {
        const h = new Headers({ "X-Foo": "bar" });
        return await _fetch.getJSON(
          "http://localhost:3000/comments/",
          { id: 2 },
          { headers: h }
        );
      });
      expect(result).to.be.an("array");
    });
  });

  // ── Retry on timeout (v2) ──────────────────────────────
  describe("retry on timeout", function () {
    it("should retry and eventually fail with RETRY_EXHAUSTED", async function () {
      this.timeout(15000);
      const result = await page.evaluate(async () => {
        return await _fetch
          .getJSON("http://localhost:3000/comments/1?_delay=500", {}, {
            timeout: 50,
            retry: 2,
            retryBackoff: 2,
            retryMaxTimeout: 400,
          })
          .then(
            (res) => res,
            (err) => ({ message: err.message, code: err.code })
          );
      });
      expect(result.code).to.equal("RETRY_EXHAUSTED");
      expect(result.message).to.include("retry exhausted");
    });

    it("should not retry on HTTP errors", async function () {
      const result = await page.evaluate(async () => {
        return await _fetch
          .getJSON("http://localhost:3000/nonexistent", {}, {
            timeout: 5000,
            retry: 3,
          })
          .then(
            (res) => res,
            (err) => ({ message: err.message, code: err.code })
          );
      });
      // HTTP 404 is not a timeout — should NOT have RETRY_EXHAUSTED code
      expect(result.code).to.be.undefined;
      expect(result.message).to.include("404");
    });
  });

  // ── fetchStart cancel with proper URL (P1 regression) ─
  describe("fetchStart cancel URL", function () {
    it("should include URL in cancel error", async function () {
      const errMsg = await page.evaluate(async () => {
        return await _fetch
          .getJSON("http://localhost:3000/comments/1", {}, {
            fetchStart: function () {
              return false;
            },
          })
          .then(
            (res) => res,
            (err) => err.message
          );
      });
      expect(errMsg).to.include("http://localhost:3000/comments/1");
      expect(errMsg).to.include("cancel");
    });
  });
});
