# Contributing

## Setup

```bash
git clone git@github.com:Neal-Ding/fetch-plugin.git
cd fetch-plugin
yarn install
yarn build
```

## Testing

```bash
# Unit tests (fast, no browser needed)
yarn test:unit

# Integration tests (requires json-server on port 3000)
npx json-server --watch test/data/db.json --port 3000 &
yarn mocha test/index.js --timeout 30000
```

## Project structure

```
src/main.js           — source
dist/                 — built output (CJS + UMD)
test/unit.js          — unit tests (Node)
test/index.js         — integration tests (Puppeteer + json-server)
test/data/db.json     — json-server test data
build/rollup.config.mjs — rollup config
```

## Commit style

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add retry with exponential backoff
fix: missing & separator in setGetURL
docs: update API reference
chore: update devDependencies
```

## Before submitting a PR

- [ ] `yarn build` succeeds
- [ ] `yarn test:unit` passes
- [ ] Integration tests pass locally (`yarn mocha test/index.js --timeout 30000`)
