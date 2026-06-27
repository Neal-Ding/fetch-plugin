# fetch-plugin

[![CI](https://github.com/Neal-Ding/fetch-plugin/actions/workflows/ci.yml/badge.svg)](https://github.com/Neal-Ding/fetch-plugin/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](https://github.com/Neal-Ding/fetch-plugin/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/fetch-plugin)](https://www.npmjs.com/package/fetch-plugin)
[![license](https://img.shields.io/npm/l/fetch-plugin)](LICENSE)

> 基于 [whatwg-fetch](https://github.com/github/fetch) 的 fetch 增强库。支持 **超时**、**指数退避重试**、**JSONP**、**生命周期钩子**、**AbortController 集成** 等，兼容浏览器与 Node.js。

- [English Documentation](README.md)

## 安装

```bash
npm install fetch-plugin
```

或通过 UMD 直接在浏览器中加载（暴露为 `_fetch`）：

```html
<script src="https://unpkg.com/fetch-plugin/dist/index.umd.min.js"></script>
```

## 快速开始

```js
import fetch from "fetch-plugin";

// GET 请求带查询参数
const users = await fetch.getJSON("/api/users", { page: 1 });

// POST JSON
const created = await fetch.postJSON("/api/users", { name: "张三" });

// 超时 + 重试
const data = await fetch.getJSON("/api/slow", {}, {
  timeout: 3000,
  retry: 2,
  retryBackoff: 1.5,
});

// 底层请求（不做 JSON 解析）
const resp = await fetch.request("/api/export", { method: "GET" });
```

## API

### HTTP 便捷方法

```js
fetch.getJSON(url, [data], [options])
fetch.postJSON(url, [data], [options])
fetch.putJSON(url, [data], [options])
fetch.deleteJSON(url, [data], [options])
```

- `url` — 请求地址
- `data` — GET/DELETE 时序列化为查询字符串，POST/PUT 时序列化为 JSON 请求体
- `options` — 与全局配置合并。详见[配置项](#配置项)

### `request(url, [options])` — 底层请求

所有方法的基座。返回原始 `Response`，不做 JSON 假设。

```js
const resp = await fetch.request("/api/data", {
  method: "GET",
  timeout: 5000,
  retry: true,
});
// resp 是标准 Response — 可调用 resp.json()、resp.text() 等
```

完整的超时、重试、signal relay、钩子均适用。

### JSONP

```js
fetch.getJSONP(url, [data], [options])
```

> **服务端要求：** 服务端必须从查询字符串中读取回调参数名，将响应包装为函数调用：
> ```
> GET /api?callback=jsonp_1719000000000_0
> // 返回：
> jsonp_1719000000000_0({"data": "hello"})
> ```

JSONP 专用配置项：

| 字段 | 类型 | 默认值 | 说明 |
|-------|------|--------|------|
| `timeout` | `number` | `30000` | 超时时间（毫秒） |
| `callbackName` | `string` | 自动生成 | 自定义回调函数名。如果服务端要求固定回调名，手动指定此项 |
| `callbackParam` | `string` | `"callback"` | 查询参数名 |

### 全局配置

```js
fetch.setOptions({
  timeout: 5000,
  retry: 2,
  retryBackoff: 1.5,
  retryMaxTimeout: 10000,
  headers: { Authorization: "Bearer xxx" },
  fetchStart(param) {
    console.log("发起请求:", param.url);
    return param;                 // 返回 false 可取消
  },
  fetchSuccess(data) {
    console.log("成功:", data);
  },
  fetchError(error) {
    console.error(error.message);
  },
  onRetry(count, nextTimeout) {
    console.log(`第 ${count} 次重试，下个超时: ${nextTimeout}ms`);
  },
});

// 读取当前全局配置
const opts = fetch.getOptions();
```

单次请求的配置覆盖全局配置。**headers 为深度合并**（全局 + 单次）。

## 配置项

可通过 `setOptions()` 全局设置，也可在单次请求中传入。

### 标准 Fetch 配置

直接传给 `new Request()`。详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Request/Request)。

| 字段 | 类型 | 默认值 |
|-------|------|--------|
| `method` | `string` | 自动 |
| `headers` | `object` \| `Headers` | `{"Content-Type":"application/json"}` |
| `body` | `string` | — |
| `mode` | `string` | `"same-origin"` |
| `credentials` | `string` | `"include"` |
| `cache` | `string` | `"reload"` |
| `redirect` | `string` | `"follow"` |
| `referrer` | `string` | `"client"` |
| `integrity` | `string` | — |
| `keepalive` | `boolean` | — |
| `signal` | `AbortSignal` | — 会被 relay 到内部超时控制器 |

> 传入 `signal` 后，它会被 **relay** 到内部 `AbortController`。你手动 abort 和超时 abort 都能取消请求。

### 插件配置

由 fetch-plugin 处理，**不会**传给 `new Request()`。

| 字段 | 类型 | 默认值 | 说明 |
|-------|------|--------|------|
| `timeout` | `number` | `30000` | 超时时间（毫秒）。内部使用 `AbortController` 真正取消请求 |
| `retry` | `boolean` \| `number` | `false` | `false`/`0`=禁用，`true`=无限重试（cap 停），`2`=最多 2 次重试 |
| `retryBackoff` | `number` | `1.5` | 每次重试超时时间的倍率 |
| `retryMaxTimeout` | `number` | `10000` | 当计算出的下次超时 ≥ 此值时停止重试 |
| `onRetry` | `function` | — | `onRetry(retryCount, nextTimeout)` — 每次重试前调用 |
| `fetchStart` | `function` | 透传 | `fetchStart({url,fetchOption})`。返回 `false` 可取消。可修改 url/options |
| `fetchSuccess` | `function` | — | 成功回调。支持全局和单次请求，单次请求优先 |
| `fetchError` | `function` | — | 失败回调。支持全局和单次请求，单次请求优先 |

### 重试行为

```js
// 最多重试 3 次，指数退避
fetch.getJSON("/api/flaky", {}, {
  timeout: 1000,
  retry: 3,
  retryBackoff: 2,       // 1s → 2s → 4s → 停止（4s < cap 10s）
  retryMaxTimeout: 10000,
  onRetry(count, next) {
    console.log(`重试 ${count}，下个超时 ${next}ms`);
  },
});

// 无限重试直到达到 cap
fetch.getJSON("/api/flaky", {}, {
  timeout: 3000,
  retry: true,           // 持续重试直到 3000*1.5^n >= 10000
});
```

**仅超时错误触发重试** — HTTP 4xx/5xx 和网络错误**不重试**。

### 生命周期

```
fetchStart({url, fetchOption})          ← 请求前（可取消、可修改参数）
       ↓
   [fetch + 超时 + AbortController]
       ↓                ↓ (超时)
   [onRetry(count, nextTimeout)]        ← 每次重试前
       ↓                ↓ (重试耗尽)
  checkStatus(response)                 ← 校验 HTTP 状态码
       ↓
  parseJSON(response)                   ← 解析 JSON（仅 getJSON/postJSON 等）
       ↓
  fetchSuccess(data)                    ← 成功回调
       ↓
  fetchError(error)                     ← 失败回调（以上任意环节）
```

## 错误处理

所有错误均为 `FetchPluginError` 实例，带 `code` 字段：

```js
import fetch, { FetchPluginError } from "fetch-plugin";

try {
  await fetch.getJSON("/api/data");
} catch (err) {
  console.log(err.message);     // "https://api.example.com/data timeout"
  console.log(err.url);
  console.log(err.status);
  console.log(err.code);        // "TIMEOUT" | "RETRY_EXHAUSTED" | undefined
  console.log(err.fetchOption); // 本次请求使用的配置
}
```

| `code` | 含义 |
|--------|------|
| `"TIMEOUT"` | 请求超时 |
| `"RETRY_EXHAUSTED"` | 重试次数耗尽或达到 cap |
| `undefined` | HTTP 错误、网络错误、JSON 解析错误等 |

## JSONP 回调名生成策略

省略 `callbackName` 时，回调名自动生成：

```
jsonp_{时间戳}_{自增序号}
```

例如：`jsonp_1719000000000_0`、`jsonp_1719000000000_1`……

使用单调自增计数器保证同一毫秒内唯一性，无需随机数。若服务端要求固定回调名，请手动指定 `callbackName`。

## 浏览器 & Node.js 兼容性

| 环境 | 版本 |
|------|------|
| Chrome | 66+ |
| Firefox | 57+ |
| Safari | 12.1+ |
| Edge | 79+ |
| Node.js | 15+（18 以下由 `whatwg-fetch` 提供 polyfill） |
| IE | 10+（通过 polyfill） |

## License

MIT
