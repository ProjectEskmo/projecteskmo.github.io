<!-- markdownlint-disable-next-line -->
<div align="center">

# Eskmo Documentation

<img src="/assets/eskmo-logo.jpg" height="100px">
<br />
<br />

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/ProjectEskmo/projecteskmo.github.io/blob/master/LICENSE.txt)

</div>

## Installation

First, install Node.js from [nodejs.org](https://nodejs.org).

Once installed, you can set up `npx` globally by running:

```bash
npm install -g npx
```

Then:

```bash
npm install
```

## Developing

To start the local build server with hot module reloading and an eslint watcher, execute:

```bash
npx vitepress dev
```

## Building

To compile the entire site into a static project, use the following command:

```bash
npx vitepress build
```

## Previewing

To preview the built site locally, run:

```bash
npx vitepress preview
```

If you want to verify the build without using VitePress, navigate to the `dist` directory and start a local server:

```
cd .vitepress/dist; python -m http.server
```

## Deploy

If you haven't installed `gh-pages` yet, run the following command:

```bash
npm install --save-dev gh-pages
```

Push the built files to the `gh-pages branch:

```bash
npm run deploy
```