# fetch-plugin

[![CI](https://github.com/Neal-Ding/fetch-plugin/actions/workflows/ci.yml/badge.svg)](https://github.com/Neal-Ding/fetch-plugin/actions/workflows/ci.yml)
[![Coverage](https://coveralls.io/repos/github/Neal-Ding/fetch-plugin/badge.svg?branch=master)](https://coveralls.io/github/Neal-Ding/fetch-plugin?branch=master)
[![npm](https://img.shields.io/npm/v/fetch-plugin)](https://www.npmjs.com/package/fetch-plugin)
[![license](https://img.shields.io/npm/l/fetch-plugin)](LICENSE)

> A fetch wrapper with **timeout**, **retry with exponential backoff**, **JSONP**, **lifecycle hooks**, **AbortController integration**, and more — built on [whatwg-fetch](https://github.com/github/fetch) for broad browser and Node.js compatibility.

- [中文文档](README.zh-CN.md)

## Installation

```bash
npm install fetch-plugin
```

Or load directly in browsers (exposed as `_fetch`):

```html
<script src="https://unpkg.com/fetch-plugin/dist/index.umd.min.js"></script>
```

## Quick Start

```js
import fetch from "fetch-plugin";

// GET with query params
const users = await fetch.getJSON("/api/users", { page: 1 });

// POST JSON
const created = await fetch.postJSON("/api/users", { name: "Alice" });

// With timeout + retry
const data = await fetch.getJSON("/api/slow", {}, {
  timeout: 3000,
  retry: 2,
  retryBackoff: 1.5,
});

// Raw request (no JSON parsing)
const resp = await fetch.request("/api/export", { method: "GET" });
```

## API

### HTTP Convenience Methods

```js
fetch.getJSON(url, [data], [options])
fetch.postJSON(url, [data], [options])
fetch.putJSON(url, [data], [options])
fetch.deleteJSON(url, [data], [options])
```

- `url` — Request URL
- `data` — GET/DELETE: serialized as query string. POST/PUT: serialized as JSON body
- `options` — Merged with global defaults. See [Options](#options)

### `request(url, [options])` — Raw Request

The base method underlying all others. Returns a raw `Response` without assuming JSON.

```js
const resp = await fetch.request("/api/data", {
  method: "GET",
  timeout: 5000,
  retry: true,
});
// resp is a standard Response — call resp.json(), resp.text(), etc.
```

Full timeout, retry, signal relay, and hooks apply.

### JSONP

```js
fetch.getJSONP(url, [data], [options])
```

> **Server requirement:** The server must read the callback parameter from the query string and wrap the response as a function call:
> ```
> GET /api?callback=jsonp_1719000000000_0
> // Response:
> jsonp_1719000000000_0({"data": "hello"})
> ```

JSONP-specific options:

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `timeout` | `number` | `30000` | Request timeout (ms) |
| `callbackName` | `string` | auto | Custom callback name. Auto-generated if omitted. |
| `callbackParam` | `string` | `"callback"` | Query parameter name for the callback |

### Global Configuration

```js
fetch.setOptions({
  timeout: 5000,
  retry: 2,
  retryBackoff: 1.5,
  retryMaxTimeout: 10000,
  headers: { Authorization: "Bearer xxx" },
  fetchStart(param) {
    console.log("Request:", param.url);
    return param;                 // return false to cancel
  },
  fetchSuccess(data) {
    console.log("Success:", data);
  },
  fetchError(error) {
    console.error(error.message);
  },
  onRetry(count, nextTimeout) {
    console.log(`Retry #${count}, next timeout: ${nextTimeout}ms`);
  },
});

// Read current global options
const opts = fetch.getOptions();
```

Per-request options override globals. **Headers are deep-merged** (global + per-request).

## Options

Options can be set globally via `setOptions()` or per-request.

### Standard Fetch Options

Passed directly to `new Request()`. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request).

| Field | Type | Default |
|-------|------|---------|
| `method` | `string` | auto |
| `headers` | `object` \| `Headers` | `{"Content-Type":"application/json"}` |
| `body` | `string` | — |
| `mode` | `string` | `"same-origin"` |
| `credentials` | `string` | `"include"` |
| `cache` | `string` | `"reload"` |
| `redirect` | `string` | `"follow"` |
| `referrer` | `string` | `"client"` |
| `integrity` | `string` | — |
| `keepalive` | `boolean` | — |
| `signal` | `AbortSignal` | — Relay to internal timeout controller |

> When you provide `signal`, it is **relayed** to the internal `AbortController`. Both your manual abort and the timeout abort can cancel the request.

### Plugin Options

Handled by fetch-plugin — **not** passed to `new Request()`.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `timeout` | `number` | `30000` | Request timeout (ms). Uses `AbortController` for real cancellation |
| `retry` | `boolean` \| `number` | `false` | `false`/`0`=disabled, `true`=unlimited (stops at cap), `2`=max 2 retries |
| `retryBackoff` | `number` | `1.5` | Multiplier for timeout on each retry |
| `retryMaxTimeout` | `number` | `10000` | Stop retrying when next timeout ≥ this value |
| `onRetry` | `function` | — | `onRetry(retryCount, nextTimeout)` — called before each retry |
| `fetchStart` | `function` | identity | `fetchStart({url,fetchOption})`. Return `false` to cancel. Can mutate url/options |
| `fetchSuccess` | `function` | — | Called on success. Works globally or per-request. Per-request takes priority |
| `fetchError` | `function` | — | Called on error. Works globally or per-request. Per-request takes priority |

### Retry Behavior

```js
// Retry up to 3 times with exponential backoff
fetch.getJSON("/api/flaky", {}, {
  timeout: 1000,
  retry: 3,
  retryBackoff: 2,       // 1s → 2s → 4s → stop (4s < cap 10s)
  retryMaxTimeout: 10000,
  onRetry(count, next) {
    console.log(`Retry ${count}, next timeout ${next}ms`);
  },
});

// Unlimited retries until cap is reached
fetch.getJSON("/api/flaky", {}, {
  timeout: 3000,
  retry: true,           // keeps going until 3000*1.5^n >= 10000
});
```

**Only timeout errors are retried** — HTTP 4xx/5xx and network errors are **not** retried.

### Lifecycle

```
fetchStart({url, fetchOption})          ← before request (can cancel / mutate)
       ↓
   [fetch + timeout via AbortController]
       ↓                ↓ (timeout)
   [onRetry(count, nextTimeout)]        ← before each retry
       ↓                ↓ (retry exhausted)
  checkStatus(response)                 ← validate HTTP status
       ↓
  parseJSON(response)                   ← parse body (getJSON/postJSON only)
       ↓
  fetchSuccess(data)                    ← success hook
       ↓
  fetchError(error)                     ← error hook (any stage)
```

## Error Handling

All errors are `FetchPluginError` instances with a `code` property:

```js
import fetch, { FetchPluginError } from "fetch-plugin";

try {
  await fetch.getJSON("/api/data");
} catch (err) {
  console.log(err.message);     // "https://api.example.com/data timeout"
  console.log(err.url);
  console.log(err.status);
  console.log(err.code);        // "TIMEOUT" | "RETRY_EXHAUSTED" | undefined
  console.log(err.fetchOption); // options used for this request
}
```

| `code` | Meaning |
|--------|---------|
| `"TIMEOUT"` | Request timed out |
| `"RETRY_EXHAUSTED"` | All retries consumed or cap reached |
| `undefined` | HTTP error, network error, parse error, etc. |

## Browser & Node.js Support

| Environment | Version |
|-------------|---------|
| Chrome | 66+ |
| Firefox | 57+ |
| Safari | 12.1+ |
| Edge | 79+ |
| Node.js | 15+ (uses `whatwg-fetch` polyfill for pre-18) |
| IE | 10+ (via polyfill) |

## License

MIT
