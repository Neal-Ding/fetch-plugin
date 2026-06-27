/**
 * Unit tests — pure functions tested in Node.js without Puppeteer.
 */
const expect = require("chai").expect;
const fp = require("../dist/index.js");

describe("fetch-plugin unit", function () {

  // ── getOptions ────────────────────────────────────────
  describe("getOptions / setOptions", function () {
    afterEach(function () {
      fp.setOptions({ timeout: 30000, headers: {} });
    });

    it("should return current global options", function () {
      const opts = fp.getOptions();
      expect(opts).to.have.property("timeout", 30000);
      expect(opts).to.have.property("retry", false);
      expect(opts).to.have.property("retryBackoff", 1.5);
      expect(opts).to.have.property("retryMaxTimeout", 10000);
    });

    it("should reflect changes after setOptions", function () {
      fp.setOptions({ timeout: 5000 });
      expect(fp.getOptions().timeout).to.equal(5000);
    });

    it("should return a snapshot — mutations don't affect global", function () {
      const snap = fp.getOptions();
      snap.timeout = 99999;
      expect(fp.getOptions().timeout).not.to.equal(99999);
    });

    it("should return independent headers snapshot", function () {
      const snap = fp.getOptions();
      snap.headers.set("X-Foo", "bar");
      expect(fp.getOptions().headers.get("X-Foo")).to.be.null;
    });
  });

  // ── Available methods ─────────────────────────────────
  describe("exports", function () {
    it("should export all expected methods", function () {
      expect(fp).to.have.all.keys(
        "setOptions", "getOptions", "request",
        "getJSONP", "getJSON", "postJSON", "putJSON", "deleteJSON"
      );
    });
  });
});
