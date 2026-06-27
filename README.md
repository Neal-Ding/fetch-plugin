# fetch-plugin

[![Build Status](https://github.com/Neal-Ding/fetch-plugin/actions/workflows/ci.yml/badge.svg)](https://github.com/Neal-Ding/fetch-plugin/actions/workflows/ci.yml)

Fetch polyfill with **timeout**, **JSONP**, and **lifecycle hooks**, built on top of [whatwg-fetch](https://github.com/github/fetch).

- [中文文档](README.zh-CN.md)

## Installation

```bash
npm install fetch-plugin
```

Or load directly in browsers via UMD (exposed as `_fetch`):

```html
<script src="https://unpkg.com/fetch-plugin/dist/index.umd.min.js"></script>
```

## Quick Start

```js
import fetch from "fetch-plugin";

// GET
fetch.getJSON("/api/users", { page: 1 }).then(console.log);

// POST
fetch.postJSON("/api/users", { name: "Alice" }).then(console.log);

// With per-request timeout
fetch.getJSON("/api/slow", {}, { timeout: 5000 }).then(console.log);
```

## API

### HTTP Methods

```js
fetch.getJSON(url, [data], [options])
fetch.postJSON(url, [data], [options])
fetch.putJSON(url, [data], [options])
fetch.deleteJSON(url, [data], [options])
```

- `url` — Request URL.
- `data` — For GET/DELETE: serialized to query string. For POST/PUT: serialized as JSON body.
- `options` — Merged with global defaults. See [Options](#options).

### JSONP

```js
fetch.getJSONP(url, [data], [options])
```

> **Important:** JSONP requires server-side cooperation. The server must read the callback parameter from the query string and wrap the response as a function call:
>
> ```
> GET /api?callback=jsonp_1719000000000_0
> // Server responds:
> jsonp_1719000000000_0({"data": "hello"})
> ```

`options` for JSONP:

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `timeout` | `number` | `30000` | Request timeout in ms |
| `callbackName` | `string` | auto | Custom callback function name |
| `callbackParam` | `string` | `"callback"` | Query parameter name |

### Global Configuration

```js
fetch.setOptions({
  timeout: 5000,
  headers: { Authorization: "Bearer xxx" },
  fetchStart: function (param) {
    console.log("Request:", param.url);
    return param;
  },
  fetchSuccess: function (data) {
    console.log("Success:", data);
  },
  fetchError: function (error) {
    console.error("Error:", error.message);
  },
});
```

Per-request options override global settings. Headers are merged (global + per-request).

## Options

Options can be set globally via `setOptions()` or per-request.

### Standard Fetch Options

Passed directly to `new Request()`. See [MDN Request docs](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request).

| Field | Type | Default |
|-------|------|---------|
| `method` | `string` | auto |
| `headers` | `object` \| `Headers` | `{"Content-Type": "application/json"}` |
| `body` | `string` | — |
| `mode` | `string` | `"same-origin"` |
| `credentials` | `string` | `"include"` |
| `cache` | `string` | `"reload"` |
| `redirect` | `string` | `"follow"` |
| `referrer` | `string` | `"client"` |
| `integrity` | `string` | — |
| `keepalive` | `boolean` | — |
| `signal` | `AbortSignal` | — |

### Plugin Options

Handled by fetch-plugin. **Not** passed to `new Request()`.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `timeout` | `number` | `30000` | Request timeout in ms. Uses `AbortController` for real cancellation. |
| `fetchStart` | `function` | identity | Called before request. Receives `{url, fetchOption}`. Return `false` to cancel. Can modify url/options. |
| `fetchSuccess` | `function` | — | Called on success with parsed data. Works both globally and per-request. |
| `fetchError` | `function` | — | Called on error with `FetchPluginError`. Works both globally and per-request. |

### Lifecycle Hooks

```
fetchStart({url, fetchOption})          ← before request (can cancel)
       ↓
   [fetch request with timeout + abort]
       ↓
  checkStatus(response)                 ← validate HTTP status
       ↓
  parseJSON(response)                   ← parse body
       ↓
  fetchSuccess(data)                    ← success hook
       ↓
  fetchError(error)                     ← error hook (any stage above)
```

Both `fetchSuccess` and `fetchError` support global and per-request registration. Per-request hooks take priority.

## Error Handling

All errors thrown by fetch-plugin are instances of `FetchPluginError`:

```js
import fetch, { FetchPluginError } from "fetch-plugin";

try {
  await fetch.getJSON("/api/data");
} catch (err) {
  if (err instanceof FetchPluginError) {
    console.log(err.message);   // e.g., "https://api.example.com/data timeout"
    console.log(err.url);       // the request URL
    console.log(err.status);    // HTTP status (if applicable)
    console.log(err.fetchOption); // the options used
  }
}
```

## Browser Support

Chrome 66+, Firefox 57+, Safari 12.1+, Edge 79+, Node.js 18+.

The `whatwg-fetch` polyfill extends support to older browsers (IE 10+, etc.).

## License

MIT
