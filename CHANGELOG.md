# Changelog

All notable changes to this project will be documented in this file.

## [1.3.0] — Unreleased (v2)

### Added

- **Retry with exponential backoff** — `retry`, `retryBackoff`, `retryMaxTimeout`, `onRetry` options. Only timeout errors are retried; HTTP errors are not.
- **User AbortSignal relay** — providing `signal` now properly relays to the internal timeout controller instead of being silently overwritten.
- **`request()` base method** — returns raw `Response` without JSON assumption. All convenience methods (`getJSON`, etc.) are built on top of it.
- **`getOptions()` method** — returns a snapshot of current global options with an independent `Headers` clone.
- **Per-request `fetchSuccess` / `fetchError` hooks** — previously only worked globally; now per-request hooks take priority.
- **JSONP timeout and cleanup** — `getJSONP` now supports configurable timeout, cleans up global callback properties after resolve/reject, and uses a monotonic counter for callback names.
- **`FetchPluginError` class** — all errors are now `FetchPluginError` instances with `url`, `status`, `fetchOption`, and `code` (`TIMEOUT` / `RETRY_EXHAUSTED`) properties.
- **TypeScript definitions** — `dist/index.d.ts` with full API types.
- **Chinese documentation** — `README.zh-CN.md`.
- **Unit tests** — `test/unit.js` (Node, no Puppeteer, runs in milliseconds).
- **GitHub Actions CI** with Node 18/20/22 matrix, coverage collection, and npm publish workflow.

### Changed

- **Headers merge** — `mergeHeaders()` now handles both `Headers` instances and plain objects.
- **`setOptions`** — fixed double-merge bug; now calls `mergeOptions` once.
- **`setGetURL`** — fixed missing `&` separator when URL already has `?`.
- **`for...in`** — replaced with `Object.keys()` to avoid prototype chain pollution.
- **`globalOption.headers`** — is now the single source of truth; removed separate `globalHeaders` variable.
- **`timeout`** — now uses `AbortController.abort()` for real request cancellation.
- **`response.clone()`** — responses are cloned before resolve so users can re-read the body in hooks.
- **Engines** — minimum Node version set to 15.

### Fixed

- `resultHealers` typo → `resultHeaders`
- JSONP callback global property leak
- `fetchStart` cancel error showed `undefined` URL
- Per-request `fetchSuccess` not firing (was only checking globalOption)
- User `signal` being overwritten by internal `AbortController`

### Removed

- `.travis.yml` — replaced by GitHub Actions
- `babel-plugin-external-helpers` / `babel-plugin-transform-object-assign` — no longer needed
- `rollup-plugin-terser` / `rollup-plugin-commonjs` / `rollup-plugin-node-resolve` — replaced by `@rollup/plugin-*` equivalents

## [1.2.8] — 2020-11-28

- Bump dependencies for security audit

## [1.2.7] — 2020-10-15

- Initial public release with timeout, JSONP, global option hooks
