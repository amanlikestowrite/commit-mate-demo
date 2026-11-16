# Commit Mate demo

This repository demonstrates the published [`@amanlikestowrite/commit-mate`](https://www.npmjs.com/package/@amanlikestowrite/commit-mate) package. It installs the package as a dependency and imports `analyzeChanges` in [`index.js`](./index.js) to generate three Conventional Commit suggestions from a sample Git diff.

## Run the API demo

```sh
npm install
npm run demo
```

## Try the CLI in this repository

Make and stage a change, then run:

```sh
npx @amanlikestowrite/commit-mate generate
npx @amanlikestowrite/commit-mate diff
```

The interactive command only commits files already staged in Git, and asks for confirmation before creating a commit.

Package source: <https://github.com/amanlikestowrite/npm-asd-bucket>
