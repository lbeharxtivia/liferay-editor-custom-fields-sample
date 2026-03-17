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

### Creating your custom field
- Fork this repo using the desired name of your field editor.
- In package.json, change the name and reset the version number to 26.0.0
- Use [yarn link](https://classic.yarnpkg.com/lang/en/docs/cli/link/) to see your progress locally and follow the directions below to run it in a client extension.
- Once local development and testing is complete, publish your package to npm.


### Using it in a client extension
- If you don't have the custom fields client extension yet, here's how to get it:
  - In a terminal, navigate to your Liferay workspace's _client-extensions_ folder
  - Clone the client extension into your folder using `git clone git@github.com:lbeharxtivia/liferay-editor-custom-fields-client-extension.git`
- Go to your custom fields client extension folder in terminal
- If you're still in active development, assuming you followed the instructions above to create a link from your local folder, run `yarn link @my-org/my-field-editor` in a terminal
- Install your field editor's module `yarn add @my-org/my-field-editor^26.0.0`
- Import and call the init function in src/index.ts.
```
import initMyFieldEditor from '@my-org/my-field-editor';

initMyFieldEditor();
```
- Run `blade gw clean deploy` to deploy your new client extension

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
