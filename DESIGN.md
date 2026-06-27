# fetch-plugin v2 Design Discussion

> 讨论分支 `design/v2`，不做实现，先达成一致再写代码。

---

## 1. globalOption 全局配置

### 现状

```js
let globalOption = {
  headers: new Headers(...),
  mode: "same-origin",
  timeout: 30000,
  fetchStart(param) { return param },
};

let setOptions = (options) => {
  const merged = mergeOptions(options);
  globalOption = merged.resultOptions;   // 整体替换
  globalHeaders = merged.resultHeaders;
};
```

`mergeOptions` 对 `headers` 做深合并（plain object 级别），对其它字段做浅合并。`setOptions` 整体替换 `globalOption`。

### 待讨论

**a) 深浅合并策略**

当前：`Object.assign({}, globalOption, myOptions)` — 浅合并。如果用户设 `globalOption = { mode: 'cors' }`，会丢失 `timeout`、`credentials` 等默认值。

选项：
- **A. 保持浅合并** — 简单可预测，但用户需要了解完整默认值
- **B. 深合并** — 嵌套对象递归合并，但 `fetchStart` 等函数字段的合并语义不清
- **C. 折中：标量字段浅合并，`headers` 单独深合并**（当前做法）

我的建议：**C**，已经实现了。但需要文档明确说明哪些字段会覆盖、哪些会合并。

**b) `fetchSuccess`/`fetchError` 钩子的作用域**

当前 `handleFetchPass` 只检查 `globalOption.fetchSuccess`，即使用户在单次请求 option 里传了也不生效。

```js
let handleFetchPass = (data) => {
  typeof globalOption.fetchSuccess === "function" &&   // ← 只读 globalOption
    globalOption.fetchSuccess(data);
};
```

建议：同时支持 global 和 per-request 钩子，per-request 优先或串联调用。

```js
// 两处都检查
if (typeof option.fetchSuccess === "function") option.fetchSuccess(data);
else if (typeof globalOption.fetchSuccess === "function") globalOption.fetchSuccess(data);
```

---

## 2. Headers 构造函数标准化

### 现状

```js
new Headers(Object.entries(globalHeaders))   // 已修正
```

### 潜在问题

用户传 `option.headers` 时可能是 **plain object** 也可能是 **Headers 实例**：

```js
getJSON(url, data, { headers: new Headers({ Auth: 'x' }) })
```

当前代码 `Object.assign({}, globalHeaders, myOptions.headers)` 对 `Headers` 实例无效——`Headers` 的可枚举自有属性为空，`Object.assign` 拿不到值。

### 方案

```js
function mergeHeaders(base, override) {
  const merged = new Headers(base)
  if (!override) return merged

  if (override instanceof Headers) {
    for (const [k, v] of override.entries()) merged.set(k, v)
  } else if (typeof override === 'object') {
    Object.entries(override).forEach(([k, v]) => merged.set(k, v))
  }
  return merged
}
```

然后去掉独立的 `globalHeaders` 变量，统一用 `globalOption.headers`。`setOptions` 时直接替换 `globalOption.headers` 为新的 `Headers` 实例。

---

## 3. 非标准字段如何传给 Request

### 现状

```js
// _fetch 内部，传给 Request 之前剥离
let { timeout, fetchStart, fetchSuccess, fetchError, ...standardFetchOption }
  = param.fetchOption;
let myRequest = new Request(param.url, standardFetchOption);
```

能工作，但"哪些字段是标准的"靠硬编码的 destructuring。

### 方案

**保持单参数 merged 风格的 API（兼容现有调用方）+ 用常量声明插件字段：**

```js
const PLUGIN_KEYS = ['timeout', 'fetchStart', 'fetchSuccess', 'fetchError']
const STANDARD_KEYS = ['method', 'headers', 'body', 'mode', 'credentials',
  'cache', 'redirect', 'referrer', 'integrity', 'keepalive', 'signal']

function pickStandardOptions(opts) {
  const result = {}
  for (const key of STANDARD_KEYS) {
    if (key in opts) result[key] = opts[key]
  }
  return result
}
```

**还是保持现有 destructuring 方案？** destructuring 的好处是 eslint/TS 能检查，缺点是新插件字段需要记得加。常量列表的好处是集中管理。

我倾向于：常量列表 `STANDARD_KEYS`——因为它也天然成为文档的一部分，用户一看就知道哪些是标准字段。

---

## 4. JSONP 回调名生成 + 服务端协作文档

### 现状

```js
let callbackValue = "jsonp" + +new Date() + "_" + Math.random().toString(36).slice(2, 8);
```

### 待改进

**a) 生成策略**

`Date.now() + random` 在同一毫秒内大量并发时有碰撞风险。改用**单调计数器**：

```js
let _jsonpSeq = 0
const callbackValue = option.callbackName
  || `jsonp_${Date.now()}_${_jsonpSeq++}`
```

- 同一毫秒内计数器递增，无碰撞
- 去掉 `random()` 调用，更快
- 如果用户传了 `option.callbackName`，就用用户指定的（某些老旧服务端要求固定回调名）

**b) 文档化服务端要求**

JSONP 需要服务端配合：读取 query string 中的回调参数，将响应包裹为函数调用。

```
Client: GET /api?callback=jsonp_1719000000000_0
Server: jsonp_1719000000000_0({"data": "hello"})
```

需在 README 中明确说明。

---

## 5. for...in → Object.keys

### 现状

```js
for (let key in data) {
  if (Object.prototype.hasOwnProperty.call(data, key)) { ... }
}
```

### 改为

```js
Object.keys(data).forEach(key => {
  list.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
})
```

更简洁，且天然免疫原型链污染。

---

## 6. 审查中发现的其它问题

### 6.1 `globalOption.headers` 初始化时机

```js
let globalOption = {
  headers: new Headers(Object.entries(globalHeaders)),  // 只在模块加载时创建一次
  ...
};
```

`setOptions()` 之后 `globalHeaders` 变了，但 `globalOption.headers` 不会自动同步。不过 `mergeOptions()` 每次都重新从 `globalHeaders` 创建 `Headers`，所以**实际上不受影响**——但两个变量并存增加了维护心智负担。

建议：见 §2，去掉 `globalHeaders`，统一用 `globalOption.headers`。

### 6.2 错误对象不一致

| 来源 | 属性 |
|------|------|
| `_fetch` timeout | `{ message, fetchOption }` |
| `_fetch` cancel | `{ message, fetchOption }` |
| `_fetch` fetch error | `{ message, url, fetchOption }` |
| `checkStatus` | `{ message }` ❌ 无 url/fetchOption |
| `parseJSON` | `{ message }` ❌ 无 fetchOption |
| `getJSONP` timeout | `{ message }` |
| `getJSONP` error | `{ message }` |

建议：统一 Error 形状：

```js
class FetchPluginError extends Error {
  constructor(message, { url, status, fetchOption } = {}) {
    super(message);
    this.url = url;
    this.status = status;
    this.fetchOption = fetchOption;
  }
}
```

### 6.3 AbortController 集成

现代 fetch 支持 `signal` 实现取消。当前 timeout 是用 `setTimeout` + `reject` 实现的，但底层 TCP 连接可能还在。可以集成 AbortController 同时触发真正的请求取消：

```js
const controller = new AbortController();
timer = setTimeout(() => controller.abort(), timeout);
fetch(url, { ...standardOption, signal: controller.signal })
```

Node 15+, Chrome 66+, Firefox 57+, Safari 12.1+ 均支持。

**是否作为 v2 特性？**

### 6.4 `fetchStart` 返回 false 时的行为

当前：返回 `false` 时 reject。但如果 `fetchStart` 返回 `Promise.resolve(false)` 呢？

```js
// 第 191-202 行
Promise.resolve(fetchOption.fetchStart({...})).then((param) => {
  if (param === false) { ... reject ... }
```

这里 `param` 可能是 `Promise<false>`（`fetchStart` 返回了一个 resolve 为 false 的 Promise）或直接 `false`。当前 `Promise.resolve` 会展开 Promise，所以两种情况都能正确处理。✅

### 6.5 `response.clone()` 缺失

`checkStatus` 返回原始 `response`，`parseJSON` 调用 `response.text()`。如果用户需要在 `fetchSuccess` 钩子中再次读取 response body，会失败（body already consumed）。

建议：在 pass 钩子前 clone response。

---

## 7. README 拆分

中英两版：
- `README.md` — 英文（默认，GitHub 首页显示）
- `README.zh-CN.md` — 中文

英文版作为主文档，中文版完整翻译 + 适应国内读者习惯。

---

## 优先级建议

| 优先级 | 议题 | 理由 |
|--------|------|------|
| P0 | §2 Headers 合并处理 Headers 实例 | 当前对 `new Headers()` 传参静默失效 |
| P0 | §5 for...in → Object.keys | 原型链污染风险 |
| P1 | §1b per-request 钩子 | 功能缺陷 |
| P1 | §4 JSONP 回调 + 文档 | 并发安全 + 使用门槛 |
| P1 | §3 非标准字段文档化 | 用户困惑 |
| P2 | §6.1 去掉 globalHeaders | 代码简化 |
| P2 | §6.2 统一 Error 形状 | 调试体验 |
| P2 | §6.3 AbortController | 新特性 |
| P3 | §6.5 response.clone | 边缘场景 |
| P3 | §7 README 中英 | 文档 |
