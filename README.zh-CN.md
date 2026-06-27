# fetch-plugin

[![Build Status](https://github.com/Neal-Ding/fetch-plugin/actions/workflows/ci.yml/badge.svg)](https://github.com/Neal-Ding/fetch-plugin/actions/workflows/ci.yml)

基于 [whatwg-fetch](https://github.com/github/fetch) 的 fetch 增强库，支持**超时**、**JSONP** 和**生命周期钩子**。

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

// GET 请求
fetch.getJSON("/api/users", { page: 1 }).then(console.log);

// POST 请求
fetch.postJSON("/api/users", { name: "张三" }).then(console.log);

// 单次请求自定义超时
fetch.getJSON("/api/slow", {}, { timeout: 5000 }).then(console.log);
```

## API

### HTTP 方法

```js
fetch.getJSON(url, [data], [options])
fetch.postJSON(url, [data], [options])
fetch.putJSON(url, [data], [options])
fetch.deleteJSON(url, [data], [options])
```

- `url` — 请求地址。
- `data` — GET/DELETE 时序列化为查询字符串，POST/PUT 时序列化为 JSON 请求体。
- `options` — 与全局配置合并。详见[配置项](#配置项)。

### JSONP

```js
fetch.getJSONP(url, [data], [options])
```

> **注意：** JSONP 需要服务端配合。服务端必须从查询字符串中读取回调参数名，并将响应包装为函数调用：
>
> ```
> GET /api?callback=jsonp_1719000000000_0
> // 服务端返回:
> jsonp_1719000000000_0({"data": "hello"})
> ```
>
> 回调参数名默认为 `callback`，可通过 `callbackParam` 自定义。

JSONP 专用配置项：

| 字段 | 类型 | 默认值 | 说明 |
|-------|------|--------|------|
| `timeout` | `number` | `30000` | 超时时间（毫秒） |
| `callbackName` | `string` | 自动生成 | 自定义回调函数名。省略时自动生成唯一名称。如果服务端要求固定回调名，手动指定此项。 |
| `callbackParam` | `string` | `"callback"` | 查询参数名 |

### 全局配置

```js
fetch.setOptions({
  timeout: 5000,
  headers: { Authorization: "Bearer xxx" },
  fetchStart: function (param) {
    console.log("发起请求:", param.url);
    return param;          // 返回 false 可取消请求
  },
  fetchSuccess: function (data) {
    console.log("请求成功:", data);
  },
  fetchError: function (error) {
    console.error("请求失败:", error.message);
  },
});
```

单次请求的配置会覆盖全局配置。`headers` 为合并模式（全局 + 单次请求）。

## 配置项

可通过 `setOptions()` 全局设置，也可在单次请求中传入。

### 标准 Fetch 配置

直接传给 `new Request()`。详见 [MDN Request 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Request/Request)。

| 字段 | 类型 | 默认值 |
|-------|------|--------|
| `method` | `string` | 自动 |
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

### 插件配置

由 fetch-plugin 处理，**不会**传给 `new Request()`。

| 字段 | 类型 | 默认值 | 说明 |
|-------|------|--------|------|
| `timeout` | `number` | `30000` | 超时时间（毫秒）。内部使用 `AbortController` 实现真正的请求取消。 |
| `fetchStart` | `function` | 透传 | 请求发起前调用。接收 `{url, fetchOption}`。返回 `false` 可取消请求。可修改 url 和配置项后返回。 |
| `fetchSuccess` | `function` | — | 请求成功时调用。支持全局和单次请求两种注册方式。 |
| `fetchError` | `function` | — | 请求失败时调用。接收 `FetchPluginError`。支持全局和单次请求两种注册方式。 |

### 生命周期

```
fetchStart({url, fetchOption})          ← 请求前（可取消、可修改参数）
       ↓
   [fetch 请求 + 超时 + AbortController]
       ↓
  checkStatus(response)                 ← 校验 HTTP 状态码
       ↓
  parseJSON(response)                   ← 解析响应体
       ↓
  fetchSuccess(data)                    ← 成功回调
       ↓
  fetchError(error)                     ← 失败回调（以上任意环节出错）
```

`fetchSuccess` 和 `fetchError` 支持全局注册（`setOptions`）和单次请求注册。**单次请求的钩子优先执行**，如果单次请求未设置则回退到全局钩子。

## 错误处理

fetch-plugin 抛出的所有错误都是 `FetchPluginError` 实例：

```js
import fetch, { FetchPluginError } from "fetch-plugin";

try {
  await fetch.getJSON("/api/data");
} catch (err) {
  if (err instanceof FetchPluginError) {
    console.log(err.message);     // 例如 "https://api.example.com/data timeout"
    console.log(err.url);         // 请求 URL
    console.log(err.status);      // HTTP 状态码（如适用）
    console.log(err.fetchOption); // 请求配置
  }
}
```

## JSONP 回调名生成策略

如果不指定 `callbackName`，回调名按以下规则自动生成：

```
jsonp_{时间戳}_{自增序号}
```

例如：`jsonp_1719000000000_0`、`jsonp_1719000000000_1`……

使用单调自增计数器保证同一毫秒内多次调用的唯一性，无需随机数。

如果你的服务端要求固定的回调名（如老旧 CGI 接口），请通过 `callbackName` 手动指定。

## 浏览器兼容性

Chrome 66+、Firefox 57+、Safari 12.1+、Edge 79+、Node.js 18+。

`whatwg-fetch` polyfill 可将兼容性延伸到更老的浏览器（IE 10+ 等）。

## License

MIT
