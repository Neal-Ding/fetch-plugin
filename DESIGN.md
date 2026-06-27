# fetch-plugin v2 Design & Audit

## 当前状态

| 维度 | 状态 |
|------|------|
| 源码质量 | ✅ 已修复所有 P0-P1 bug |
| 测试 | ✅ 5 unit + 32 integration |
| CI | ✅ GitHub Actions, 3 Node versions |
| 双语文档 | ✅ README.md + README.zh-CN.md |
| TS 类型 | ✅ dist/index.d.ts |
| Branch protection | ✅ master 受 Ruleset 保护 |
| npm publish | ⚠️ OIDC 404，待改用 Automation Token |

---

## 缺失项 & 优化点

### 1. package.json 关键字段缺失

| 字段 | 作用 | 建议 |
|------|------|------|
| `files` | 精确控制发布内容，替代 `.npmignore` | `"files": ["dist/"]` |
| `exports` | ESM/CJS 双导出，支持 tree-shaking | 见下方 |
| `sideEffects` | 告诉打包工具可安全 tree-shake | `false` |
| `module` / `unpkg` / `jsdelivr` | CDN 加载路径 | `"module": "dist/index.js"` (CJS) |
| `funding` | GitHub Sponsors 链接 | 可选 |

**`exports` 示例：**
```json
"exports": {
  ".": {
    "import": "./dist/index.js",
    "require": "./dist/index.js",
    "types": "./dist/index.d.ts"
  }
}
```

### 2. 缺少社区标配文件

| 文件 | 优先级 |
|------|--------|
| `CHANGELOG.md` | P0 — 让用户知道每个版本改了什么 |
| `CONTRIBUTING.md` | P2 — 贡献指南 |
| Issue templates (bug/feature) | P2 |
| `CODE_OF_CONDUCT.md` | P3 |
| `SECURITY.md` | P3 |

### 3. CI 完善

| 项目 | 现状 | 建议 |
|------|------|------|
| OIDC publish | ❌ 404 | 改用 Automation Token + `NPM_TOKEN` secret |
| Coverage 上报 | ❌ 无 | 接 Coveralls 或 Codecov |
| Integration test | ⚠️ CI 只跑 unit test | CI 加 json-server 跑 integration |
| Semantic release | ❌ | 可选：`release-please` 或 `semantic-release` |
| Bundle size | ❌ | 可选：`size-limit` 或 bundlewatch |

### 4. 代码质量

| 项目 | 建议 |
|------|------|
| ESLint | 加 `eslint` + `@eslint/js` 基础配置 |
| Prettier | 统一格式 |
| pre-commit hook | `husky` + `lint-staged` |

### 5. npm 发布杂项

| 项目 | 说明 |
|------|------|
| `engines` | ✅ `>=15` |
| `keywords` | 可补充 `"backoff"`, `"abort"`, `"polyfill"` |
| npm badge | ✅ 已加入 README |
| Package size | 当前 26.4KB (gzip ~8KB)，可接受 |

### 6. `DESIGN.md` 位置

当前放在根目录，会被 `.npmignore` 排除。如果希望用户看到设计决策，放 `docs/design.md` 或直接在 README 里链接。

---

## 优先级建议

| 优先级 | 项目 | 理由 |
|--------|------|------|
| P0 | npm publish 修通（Automation Token） | 阻断发布 |
| P0 | `CHANGELOG.md` | v2 大版本必须有 |
| P1 | `files` / `exports` 字段 | npm 包标准化 |
| P1 | Coveralls 接入 | 文档 badge 已放，需数据源 |
| P1 | CI 跑 integration test | 当前只测单元 |
| P2 | `CONTRIBUTING.md` + Issue templates | 社区规范 |
| P2 | ESLint + Prettier | 代码一致性 |
| P3 | `CODE_OF_CONDUCT.md` / `SECURITY.md` | 大项目标配 |
| P3 | `funding` / semantic-release | 锦上添花 |
