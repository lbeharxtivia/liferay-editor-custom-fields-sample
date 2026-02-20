# Field Editor Framework



You can read more about how it works [Creating a Liferay global JS client extension with TypeScript and Webpack](https://xtivia.com/blog/creating-a-liferay-global-js-client-extension-with-typescript-and-webpack).

## Getting Started

Create a global JS client extension

## Extending

The framework profides Liferay events and exposed functions to use in your plugins.

### Events
Use Liferay.on to subscribe to these events:
- `EditorCustomFields_WebContentFields_OnLoad` - Fires when web content field DOM is loaded.
- `EditorCustomFields_FragmenConfig_OnLoad` - Fires when a new Fragment config is loaded on the right pane of a page editor.
- `EditorCustomFields_Image_OnChange` - Fires when an lfr-editable image or Web Content image is changed.

### Helper functions
These are appended to Liferay.editorCustomFields
- `debounce(callback:function, wait:number)` - A simple callback function
- `getContentImageInput(label:string)` - Gets the metadata input field associated with the web content image.
- `getFieldByLabel(label:string)` - Uses Xpath to get an input field by its label. Usually used to append a GUI element.
- `getPreviewImage()` - Gets the preview Image
- `setReactDomInputValue({fieldEl:element,value:string})` - Sets React DOM input value and triggers an autosave on fragment config

## License
MIT Licensed. Copyright (c) Xtivia 2026.