# Liferay Custom Fields - Sample App Boilerplate

A description of what your app does goes here, as well as a few screenshots

## Supported Liferay Versions

This app supports DXP versions in their premium support phase at the time of this release.

- 2025 Q4
- 2025 Q3
- 2025 Q2
- 2025 Q1
- 2024 Q1
- 7.4

If you need compatibility for older DXP releases, you can create a legacy version with a year that supports the release, and submit a PR.

## Getting Started

This is meant to be imported into a client extension.

- If you don't have the custom fields client extension yet, here's how to get it:
  - In a terminal, navigate to your Liferay workspace's _client-extensions_ folder
  - Clone the client extension into your folder using `git clone git@github.com:lbeharxtivia/liferay-editor-custom-fields-client-extension.git`
  - Run `blade gw clean deploy` to deploy your new client extension
- Go to your custom fields client extension folder in terminal
- Install the module `yarn add @liferay-editor-custom-fields/sample^74.0.0`
- Import and call the init function in src/index.ts

```
import initSample from '@liferay-editor-custom-fields/sample';

initSample();
```

## Dev instructions

- Read the [framework readme](https://github.com/lbeharxtivia/liferay-editor-custom-fields-framework/blob/main/README.md) for events and helper functions
- App should be inert outside of editor
  - If you need JS to run on the page, add it to the fragment or web content template instead.
- Any changes should be limited to non-destructive DOM Manipulation and use OOB Liferay Editor functionality.
- Keep changes as simple as possible! Avoid things like LR Objects in favor of structured web content fields, fragment config, etc.
- If companion Liferay content is required:
  - Stay transparent. Avoid LARs and use ftl, json, etc.
  - Put content in /docs

## License

MIT Licensed. Copyright (c) Xtivia 2026.
